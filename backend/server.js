const express = require('express');
const fs = require('node:fs');          // Use node: prefix for built-in modules
const path = require('node:path');      // Use node: prefix for built-in modules
const crypto = require('node:crypto');   // Use node: prefix for built-in modules
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json({
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf);
    } catch (e) {
      res.status(400).json({ message: 'Invalid JSON' });
      throw new Error('Invalid JSON');
    }
  }
}));

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, {
    body: req.body,
    query: req.query,
    params: req.params
  });
  next();
});

function readUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) return [];
    const raw = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Failed to read users file', err);
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Set default headers for all responses
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Signup
app.post('/api/signup', (req, res) => {
  const { fullName, email, phoneNo, address, password, confirmPassword, whatsappNo, role } = req.body;

  if (!fullName || !email || !phoneNo || !address || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All required fields must be filled' });
  }

  if (!validateEmail(email)) return res.status(400).json({ message: 'Invalid email' });
  if (password.length < 6) return res.status(400).json({ message: 'Password too short' });
  if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

  const users = readUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return res.status(409).json({ message: 'User with this email already exists' });
  }

  const id = String(Date.now());
  const hashed = hashPassword(password);
  const newUser = { id, fullName, email, phoneNo, address, whatsappNo: whatsappNo || '', password: hashed, role: role || 'patient', createdAt: new Date().toISOString() };
  users.push(newUser);
  writeUsers(users);

  // Do not return password
  const { password: _p, ...safe } = newUser;
  res.status(201).json({ message: 'User created', user: safe });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  if (!validateEmail(email)) return res.status(400).json({ message: 'Invalid email' });

  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const hashed = hashPassword(password);
  if (hashed !== user.password) return res.status(401).json({ message: 'Invalid credentials' });

  const { password: _p, ...safe } = user;
  res.json({ message: 'Login successful', user: safe });
});

// Expose users (dev only)
app.get('/api/users', (req, res) => {
  const users = readUsers();
  const safe = users.map(({ password, ...rest }) => rest);
  res.json(safe);
});

// Get single user
app.get('/api/users/:userId', (req, res) => {
  const { userId } = req.params;
  const users = readUsers();
  const user = users.find((u) => String(u.id) === String(userId));
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!user.appointments) {
    user.appointments = [];
  }
  const { password, ...safe } = user;
  res.json(safe);
});

// Create appointment for user
app.post('/api/users/:userId/appointments', (req, res) => {
  try {
    console.log('Received POST request to /api/users/:userId/appointments');
    console.log('Request headers:', req.headers);
    console.log('Request body:', req.body);
    
    const { userId } = req.params;
    console.log('User ID from params:', userId);
    
    const { hospitalId, hospitalName, facilities, total } = req.body;
    
    // Validate request body
    if (!req.body || typeof req.body !== 'object') {
      console.error('Invalid request body format');
      return res.status(400).json({ 
        message: 'Invalid request format', 
        received: req.body 
      });
    }

    // Log received data
    console.log('Parsed appointment data:', {
      userId,
      hospitalId,
      hospitalName,
      facilities,
      total
    });

    if (!hospitalId || !facilities || !Array.isArray(facilities) || facilities.length === 0) {
      console.error('Invalid appointment data:', { hospitalId, facilities });
      return res.status(400).json({ 
        message: 'Invalid appointment data',
        errors: {
          hospitalId: !hospitalId ? 'Missing hospital ID' : null,
          facilities: !facilities ? 'Missing facilities' : 
                    !Array.isArray(facilities) ? 'Facilities must be an array' :
                    facilities.length === 0 ? 'No facilities selected' : null
        }
      });
    }

    const users = readUsers();
    console.log('Read users from file, found', users.length, 'users');
    
    const idx = users.findIndex((u) => String(u.id) === String(userId));
    if (idx === -1) {
      console.error('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('Found user at index:', idx);

    const appointmentId = String(Date.now());
    const appointment = {
      id: appointmentId,
      hospitalId,
      hospitalName: hospitalName || null,
      facilities: facilities.map((f) => ({ ...f })),
      total: Number(total || facilities.reduce((s, f) => s + (f.price || 0), 0)),
      status: 'pending',
      createdAt: new Date().toISOString(),
      reports: []
    };

    users[idx].appointments = users[idx].appointments || [];
    users[idx].appointments.push(appointment);
    
    try {
      writeUsers(users);
      console.log('Successfully wrote updated users to file');
    } catch (writeError) {
      console.error('Error writing to users file:', writeError);
      throw new Error('Failed to save appointment');
    }

    console.log('Appointment created successfully:', appointment);
    
    // Set headers and send response
    res.setHeader('Content-Type', 'application/json');
    const response = { message: 'Appointment created', appointment };
    console.log('Sending response:', response);
    return res.status(201).json(response);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get appointments for a user
app.get('/api/users/:userId/appointments', (req, res) => {
  const { userId } = req.params;
  const users = readUsers();
  const user = users.find((u) => String(u.id) === String(userId));
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!user.appointments) {
    user.appointments = [];
  }
  res.json(user.appointments);
});

// Update appointment (e.g., status change, slot/date, add report)
app.patch('/api/users/:userId/appointments/:appointmentId', (req, res) => {
  const { userId, appointmentId } = req.params;
  const updates = req.body || {};
  const users = readUsers();
  const idx = users.findIndex((u) => String(u.id) === String(userId));
  if (idx === -1) return res.status(404).json({ message: 'User not found' });

  const user = users[idx];
  user.appointments = user.appointments || [];
  const aidx = user.appointments.findIndex((a) => String(a.id) === String(appointmentId));
  if (aidx === -1) return res.status(404).json({ message: 'Appointment not found' });

  const appointment = user.appointments[aidx];

  // Allowed updates: status, facilities (with slots), total, addReport
  if (updates.status) appointment.status = updates.status;
  if (updates.total !== undefined) appointment.total = Number(updates.total);
  if (updates.facilities) appointment.facilities = updates.facilities;
  if (updates.slot) appointment.slot = updates.slot;
  if (updates.date) appointment.date = updates.date;

  if (updates.addReport) {
    const report = {
      id: String(Date.now()),
      text: updates.addReport.text || updates.addReport,
      addedBy: updates.addReport.addedBy || 'hospital',
      createdAt: new Date().toISOString(),
    };
    appointment.reports = appointment.reports || [];
    appointment.reports.push(report);
  }

  users[idx] = user;
  writeUsers(users);
  res.json({ message: 'Appointment updated', appointment });
});

// Get appointments for a hospital (scan users)
app.get('/api/hospitals/:hospitalId/appointments', (req, res) => {
  const { hospitalId } = req.params;
  const users = readUsers();
  const results = [];
  users.forEach((u) => {
    (u.appointments || []).forEach((a) => {
      if (String(a.hospitalId) === String(hospitalId)) {
        results.push({ userId: u.id, fullName: u.fullName, email: u.email, appointment: a });
      }
    });
  });
  res.json(results);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.setHeader('Content-Type', 'application/json');
  res.status(500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(PORT, () => {
  console.log(`Auth backend listening on http://localhost:${PORT}`);
});
