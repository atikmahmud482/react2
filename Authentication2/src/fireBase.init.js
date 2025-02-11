// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO7I2JkG_fOJFKbfi8fFtRnMxRoKD5u_U",
  authDomain: "authentication2-fe807.firebaseapp.com",
  projectId: "authentication2-fe807",
  storageBucket: "authentication2-fe807.firebasestorage.app",
  messagingSenderId: "767019258689",
  appId: "1:767019258689:web:8432113042b97f0ca3c7c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
