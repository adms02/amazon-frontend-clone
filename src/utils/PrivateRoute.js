import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../slices/userSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/ap/signin" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
