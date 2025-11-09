import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaUserMd, FaBolt,FaHospital }  from 'react-icons/fa';
import './NavBar.css';
import { useUser } from '../context/UserContext';

function NavBar() {
  const location = useLocation();
  const { user, logout } = useUser();

  // Normalize role checks to be defensive against different shapes / casing
  const userRole = (() => {
    if (!user) return null;
    if (typeof user === 'string') return user.toLowerCase();
    if (typeof user.role === 'string') return user.role.toLowerCase();
    // if roles is an array
    if (Array.isArray(user.roles) && user.roles.length) return String(user.roles[0]).toLowerCase();
    return null;
  })();

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/patient', label: 'Patient', icon: <FaUser /> },
    ...(userRole === 'hospital'
      ? [{ path: '/hospitalstaff', label: 'Hospital Staff', icon: <FaUserMd /> }]
      : []),
    { path: '/ambulance', label: 'Ambulance', icon: <FaBolt /> },
    { path: '/hospital', label: 'Hospital', icon: <FaHospital /> },
  ];

  return (
    <>
      <div>
        <div className="flex items-center justify-between px-4 py-2 bg-white shadow">
          <div className="flex items-center gap-4">
            <img src="./public/hearticon.svg" alt="Logo" className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">MediCare Plus</span>
              <span className="text-sm text-gray-600">Your Health, Our Priority</span>
            </div>
          </div>
          <div className="flex gap-4">
            {!user ? (
              <>
                <Link
                  to="/signup"
                  className={`px-4 py-2 rounded ${
                    location.pathname === '/signup'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded ${
                    location.pathname === '/login'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      <nav className="navbar flex flex-wrap justify-center p-4 bg-gray-100">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default NavBar;
