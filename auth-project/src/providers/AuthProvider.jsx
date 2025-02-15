import { createContext, useContext, useState } from "react"; // Import required hooks

const AuthContext = createContext(null);

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = (email, password) => {
    setUser({ email });
    console.log("User logged in:", email);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

//context setup
