import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const LoggedUser = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement your login logic here, e.g., set user data in state
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here, e.g., clear user data from state
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
