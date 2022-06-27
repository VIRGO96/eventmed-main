import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCJsFgN42qtRy64ksvhRSax5x9jTho-Jl8",
    authDomain: "recap-licenta.firebaseapp.com",
    projectId: "recap-licenta",
    storageBucket: "recap-licenta.appspot.com",
    messagingSenderId: "1065240348779",
    appId: "1:1065240348779:web:9858dc6fe30a786f31492e",
    measurementId: "G-80KXBB9YB9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;