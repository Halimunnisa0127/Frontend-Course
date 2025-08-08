import React from "react";
import {  useSelector } from "react-redux";
import Login from "../Login/Login";

//simple component to protect routes

function ProtectedRoute ({children}){
    const {isAuthenticated}=useSelector(state=>state.auth);


    if(!isAuthenticated){
        return <Login/>;
    }

    return children;
}

export default ProtectedRoute;