// import { objectTraps } from "immer/dist/internal";
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// This is necessary in order to prevent users who are not logged in to access the content
const UnProtect = ({ auth, children }) => {
  let { user } = useUserAuth();
  return user != null ? <Navigate to='/home' /> : children;

  // if(user == undefined || user == null || Object.keys(user).length == 0) {
  //    return <Navigate to="/login" />
  // }
  // return children;
};

export default UnProtect;
