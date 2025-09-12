import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import API from "../../api/api";


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
        setIsAuthenticated(true)
        fetchProfile();
    }
  }, []);
  
   const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/profile");
      setUser(res.data);
    } catch (err) {
      console.log("Failed to load profile", err);
      setIsAuthenticated(false);
      setUser(null);
    }finally {
        setLoading(false);
    }
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    fetchProfile();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user,loading}}>
      {children}
    </AuthContext.Provider>
  );
};
