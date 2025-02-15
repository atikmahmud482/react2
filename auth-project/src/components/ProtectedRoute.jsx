import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

// video 51-7 Implement Privet Route and Auth Loader
// video 51-8 Reset Form and Social Login With Auth Provider.

/* Module 52-1
* What is FireBase
* firebase SDK (Software Development Kit)
* Firebase Authentication 



*/
