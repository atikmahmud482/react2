// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGHLvlEAGwtJmojL9bJ8sMlLnIdfqmWVI",
  authDomain: "email-password-ddca5.firebaseapp.com",
  projectId: "email-password-ddca5",
  storageBucket: "email-password-ddca5.firebasestorage.app",
  messagingSenderId: "139744898167",
  appId: "1:139744898167:web:ad04aa1dda22afdaacea72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
