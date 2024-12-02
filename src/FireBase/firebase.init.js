// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCLGr8QRaTU88bPO-wafAlxa49OhhFZ2Y",
  authDomain: "k-auth-moha-milon.firebaseapp.com",
  projectId: "k-auth-moha-milon",
  storageBucket: "k-auth-moha-milon.firebasestorage.app",
  messagingSenderId: "35401184677",
  appId: "1:35401184677:web:860d387c5e1c77abf4a44c",
  measurementId: "G-2RP6SVQZG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
