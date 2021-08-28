import React from "react";
import GlobalStyle from "./assets/styles/globalStyles";
import Theme from "./assets/styles/Theme";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Basketpage from "./pages/Basketpage";
import NewItempage from "./pages/NewItempage";
import ForgotPasswordpage from "./pages/ForgotPasswordpage";
import SignInpage from "./pages/SignInpage";
import CreateAccountpage from "./pages/CreateAccountpage";
import { getIsLoggedIn } from "../src/slices/userSlice";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getCustomerInfo } from "./api";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../src/slices/userSlice";
import Accountpage from "./pages/private/Accountpage";
import ResetPasswordpage from "./pages/ResetPasswordpage";
import Thankyoupage from "./pages/private/Thankyoupage";
import Orderspage from "./pages/private/Orderspage";
import UpdateProfilepage from "./pages/private/UpdateProfilepage";
import ChangeNamepage from "./pages/private/ChangeNamepage";
import ChangeEmailpage from "./pages/private/ChangeEmailpage";
import PrivateRoute from "./utils/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const token = `Bearer ${localStorage.getItem("token")}`;

  const { data, isLoading, isError, error, isSuccess } = useQuery(["checkIdValid", token], () => getCustomerInfo(token), {
    enabled: localStorage.hasOwnProperty("token"),
  });
  const dispatch = useDispatch();

  if (isLoading) {
    return <p></p>;
  }

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    dispatch(updateCustomer(data));
  }

  return (
    <HelmetProvider>
      <Theme>
        <GlobalStyle />

        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/:productTitle/dp/:productId" component={Productpage} exact />
          <Route path="/gp/huc/:newItems" component={NewItempage} exact />
          <Route path="/basket" component={Basketpage} exact />
          <Route path="/ap/signin" component={SignInpage} exact />
          <Route path="/ap/register" component={CreateAccountpage} exact />
          <Route path="/ap/forgotpassword" component={ForgotPasswordpage} exact />
          <Route path="/ap/resetpassword/:token" component={ResetPasswordpage} exact />

          <PrivateRoute path="/gp/orders" component={Orderspage} exact />
          <PrivateRoute path="/gp/buy/thankyou" component={Thankyoupage} exact />
          <PrivateRoute path="/gp/homepage" component={Accountpage} exact />
          <PrivateRoute path="/gp/orders" component={Orderspage} exact />
          <PrivateRoute path="/gp/profile" component={UpdateProfilepage} exact />
          <PrivateRoute path="/gp/profile/change-name" component={ChangeNamepage} exact />
          <PrivateRoute path="/gp/profile/change-email" component={ChangeEmailpage} exact />

          <Route path="*" component={NotFound} />
        </Switch>
      </Theme>
    </HelmetProvider>
  );
}

export default App;
