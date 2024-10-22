'use client'
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch("/assets/users.json");
    const users = await response.json();
  
    const foundUser = users.find(user => user.user === email && user.pass === password);
  
    if (foundUser) {
      console.log('ok');
      setUser(foundUser);
      return true;
    }
    return false;
  };
  

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
