import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const Provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("Google Call");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
