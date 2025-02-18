import React from "react";
import style from "./ProtectedRoute.module.css";
import { Navigate } from "react-router-dom";

React;
style;

function ProtectedRoute(props) {
  if (localStorage.getItem("userToken")) { 
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
export default ProtectedRoute;
