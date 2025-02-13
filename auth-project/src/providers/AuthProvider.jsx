import React, { createContext, useState, useContext } from "react";

// Create Context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that will wrap your application
const AuthProvider = ({ children }) => {
  // Authentication state
  const [user, setUser] = useState(null);

  // Login function
  const login = (email, password) => {
    // Here, you could add logic to authenticate (e.g., call an API)
    setUser({ email, password }); // For now, just setting the user
  };

  // Logout function
  const logout = () => {
    setUser(null); // Remove user on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
