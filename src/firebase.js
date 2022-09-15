// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VJzsskmO-XpC27vYeCeOvLQsV3Z1a0E",
  authDomain: "netflix-react-yt-ead8a.firebaseapp.com",
  projectId: "netflix-react-yt-ead8a",
  storageBucket: "netflix-react-yt-ead8a.appspot.com",
  messagingSenderId: "664459635311",
  appId: "1:664459635311:web:3d835f431ed562473bfb9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);