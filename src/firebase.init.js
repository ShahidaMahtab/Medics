// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYRtqBeJEOxfSJEiRDbwr62esr-iT3_o0",
  authDomain: "medics-f122e.firebaseapp.com",
  projectId: "medics-f122e",
  storageBucket: "medics-f122e.appspot.com",
  messagingSenderId: "921269728434",
  appId: "1:921269728434:web:2163391c599ff12103c5ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
