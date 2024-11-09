// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHn8GaPN22N9xK636QwdXLyX_cDIAUvQ0",
  authDomain: "flixgpt-236a5.firebaseapp.com",
  projectId: "flixgpt-236a5",
  storageBucket: "flixgpt-236a5.firebasestorage.app",
  messagingSenderId: "1065767150971",
  appId: "1:1065767150971:web:a9b047d908fda091f289de",
  measurementId: "G-8SQB4YNCCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);