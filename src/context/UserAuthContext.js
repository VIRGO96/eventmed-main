import { useEffect, useState, useContext, createContext } from "react";
import React from "react";

// necessary imports from Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // function for logging in with EMAIL & PASSWORD
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // function for logging in with GOOGLE
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  // function for loggin out
  function logOut() {
    return signOut(auth);
  }

  // function for signing up 
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //function for recovering the password via email!!! de facut
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
