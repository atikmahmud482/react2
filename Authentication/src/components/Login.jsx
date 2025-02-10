import { useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("GitHub Sign-In Error:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // ✅ Ensure user is cleared from state after logout
      })
      .catch((error) => {
        console.error("Sign-Out Error:", error);
      });
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <div>
            <h4>{user.displayName}</h4>
            <p>Email: {user.email}</p>
            {user.photoURL && <img src={user.photoURL} alt="Profile" />}
          </div>
        </>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubLogIn}>Login with GitHub</button>
        </>
      )}
    </div>
  );
};

export default Login;
