// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-d3c60.firebaseapp.com",
  projectId: "mern-real-estate-d3c60",
  storageBucket: "mern-real-estate-d3c60.appspot.com",
  messagingSenderId: "572263843500",
  appId: "1:572263843500:web:b8157c7f7a48b7f8cc0109"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);