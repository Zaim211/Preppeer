import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "prepeer-9a6dd.firebaseapp.com",
    projectId: "prepeer-9a6dd",
    storageBucket: "prepeer-9a6dd.appspot.com",
    messagingSenderId: "786952795709",
    appId: "1:786952795709:web:5913a8e7dd5c0d3f925c54",
    measurementId: "G-29B8V9Z46N"
  };

export const app = initializeApp(firebaseConfig);