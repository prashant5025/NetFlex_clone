// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEVyga9bVyHxlUGc5934Xa9WwxfL3Wt_g",
  authDomain: "ditto-27b7d.firebaseapp.com",
  projectId: "ditto-27b7d",
  storageBucket: "ditto-27b7d.appspot.com",
  messagingSenderId: "781089597853",
  appId: "1:781089597853:web:430cf237f8033ab8cae774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);