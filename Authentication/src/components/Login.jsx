import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button> */}
      {/* <button onClick={handleGoogleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login with Google</button>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
