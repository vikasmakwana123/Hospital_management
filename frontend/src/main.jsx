
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext';
import { PatientProvider } from './context/PatientContext';

createRoot(document.getElementById('root')).render(
  <PatientProvider>
  <UserProvider>
  
    <App />
  
  </UserProvider>
  </PatientProvider>,

)
