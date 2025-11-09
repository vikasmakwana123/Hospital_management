import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        // Try to parse as JSON first
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
      } catch (error) {
        // If parsing fails, maybe storedUser is a JWT string. Try to decode payload.
        try {
          const isJwt = storedUser.split('.').length === 3;
          if (isJwt) {
            const payload = storedUser.split('.')[1];
            // Add padding for base64 decoding
            const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
              atob(base64)
                .split('')
                .map(function (c) {
                  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
            );
            const data = JSON.parse(jsonPayload);
            // Common JWT claim names: role, roles, or user
            const userObj = data.role ? { role: data.role, ...data } : data.user ? data.user : data;
            setUser(userObj);
          } else {
            console.error('Stored user is not valid JSON or JWT');
          }
        } catch (err2) {
          console.error('Failed to decode stored user token', err2);
        }
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
