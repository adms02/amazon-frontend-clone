import React, { useEffect, useState } from "react";
import { Route, Redirect, withRouter, useLocation } from "react-router-dom";
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

// const PrivateRoute = ({ Component, hideFromLoggedIn, ...rest }) => {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   const state = useLocation().state;

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isLoggedIn) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: `${!hideFromLoggedIn ? "/ap/signin" : "/"}`,
//                 state: { referrer: currentLocation },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };
// export default withRouter(PrivateRoute);
