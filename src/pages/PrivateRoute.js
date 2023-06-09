import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  return user ? children : <Navigate to="/" />;

  // return <Route {...rest} render={() => {
  //   return myUser ? children : <Navigate to="/"></Navigate>
  // }}></Route>;
};

export default PrivateRoute;
