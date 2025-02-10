// Do not config clint site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnZSOwHHsXXGB4sEHonJ3CxF2yQwpG6iA",
  authDomain: "simple-firbase-bff0c.firebaseapp.com",
  projectId: "simple-firbase-bff0c",
  storageBucket: "simple-firbase-bff0c.firebasestorage.app",
  messagingSenderId: "711581209742",
  appId: "1:711581209742:web:3d21447123e159a4cca5df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
///must done export
