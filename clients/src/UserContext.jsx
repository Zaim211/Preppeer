import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the UserContext
export const UserContext = createContext({});

// Create the UserContextProvider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [consultant, setConsultant] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if(!consultant) {
      fetchProfile();
    } 
  }, [consultant]);

  useEffect(() => {
    if (!user) {
      fetchUserProfile();
    }
  }, [user]);
  

  const fetchUserProfile = async () => {
    try {
      const { data } = await axios.get("/api/profile");
      setUser(data);
    } catch (error) {
      return;
    } finally {
      setReady(true);
    }
  };

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get("/api/profileConsultant");
      console.log('data', data);
      setConsultant(data);
    } catch (error) {
      return;
    } finally {
      setReady(true);
    }
  };

  return (
    <UserContext.Provider value={{ consultant, setConsultant, ready, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
