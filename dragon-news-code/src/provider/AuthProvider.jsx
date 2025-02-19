import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = () => {
  const [user, setUser] = useState();

  return <AuthContext.Provider></AuthContext.Provider>;
};

export default AuthProvider;
