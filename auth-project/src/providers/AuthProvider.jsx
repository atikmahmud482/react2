import { createContext, useState } from "react";

// Create Context
const AuthContext = createContext(null);

// AuthProvider component to provide authentication info
const AuthProvider = ({ children }) => {
  // Example state for authentication info
  const [authInfo, setAuthInfo] = useState({
    name: "kfdklfdljks",
    // Add other info like email, isAuthenticated, etc.
  });

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
