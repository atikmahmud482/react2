import { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to access Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = (email, password) => {
    setUser({ email }); // Simulating login
    console.log("User logged in:", email);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
