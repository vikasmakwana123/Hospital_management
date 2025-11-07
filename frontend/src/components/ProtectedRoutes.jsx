import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const userToken = localStorage.getItem('user');
  let user = null;

  try {
    user = JSON.parse(userToken);
  } catch (error) {
    console.error('Invalid user token');
  }

  if (user?.role === 'hospital') {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
