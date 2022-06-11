import React from "react";
import * as S from "../../assets/styles";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import OptionCard from "../../components/private/OptionCard";
import SubHeader from "../../components/SubHeader";
import { useSelector } from "react-redux";
import { getUser } from "../../slices/userSlice";
import { Link, useLocation } from "react-router-dom";
import NotificationBox from "../../components/NotificationBox";
import { getSuccessNotification } from "../../slices/notificationSlice";
import { Helmet } from "react-helmet-async";

function UpdateProfilepage() {
  const user = useSelector(getUser);
  const successNotification = useSelector(getSuccessNotification);
  const location = useLocation();

  const breadcrumbs = [
    { pathName: "Your account", link: "/gp/homepage" },
    { pathName: "Login & Security", link: "/gp/profile" },
  ];

  const options = [
    { title: "Name:", subtitle: `${user.firstname} ${user.lastname}`, link: "/gp/profile/change-name" },
    { title: "E-mail:", subtitle: `${user.email}`, link: "/gp/profile/change-email" },
    { title: "Password", subtitle: `********`, link: "/ap/forgotpassword" },
  ];

  return (
    <>
      <Helmet title="Change Name, E-mail, Password" />

      <Header />
      <SubHeader />

      <S.UpdateProfilepage>
        <div className="profile-header">
          <div className="breadcrumbs-spacing">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>

          {successNotification && <NotificationBox successMessage={successNotification} />}

          <h1>Login & Security</h1>
        </div>

        <div className="options-container">
          {options?.map((x) => (
            <OptionCard key={x.title} title={x.title} subtitle={x.subtitle} link={x.link} />
          ))}
        </div>

        <div className="profile-btn-container">
          <Link to="/gp/homepage">
            <button className="retro-btn retro-btn-orange">Done</button>
          </Link>
        </div>
      </S.UpdateProfilepage>
    </>
  );
}

export default UpdateProfilepage;
