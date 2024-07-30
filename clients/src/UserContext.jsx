import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// Create the UserContext
export const UserContext = createContext({});

// Create the UserContextProvider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [consultant, setConsultant] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Fetch the user role
          const { data: { role } } = await axios.get('/api/currentUserRole', { headers: { Authorization: `Bearer ${token}` } });
          if (role === 'student') {
            const { data } = await axios.get('/api/profileStudent', { headers: { Authorization: `Bearer ${token}` } });
            console.log('data', data);
            setUser(data);
          } else if (role === 'consultant') {
            const { data } = await axios.get('/api/profileConsultant', { headers: { Authorization: `Bearer ${token}` } });
            setConsultant(data);
          }
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      } finally {
        setReady(true);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ consultant, setConsultant, ready, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
