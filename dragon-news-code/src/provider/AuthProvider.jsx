import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track auth loading state

  // Register new user and update display name & profile picture
  const createNewUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL || "https://via.placeholder.com/150", // Default image
        });
      })
      .then(() => {
        setUser({ ...auth.currentUser });
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  // Logout function
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  // Automatically set user state when auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading when auth state is checked
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, loading, createNewUser, loginUser, logout };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <p>Loading...</p> : children} {/* Show a loading message */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
