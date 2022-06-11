import React from "react";
import styled from "styled-components";
import AuthFooter from "./AuthFooter";
import dark_logo from "../assets/images/nrazon_dark_logo.svg";
import warning_box_icon from "../assets/images/warning_box_icon.svg";
import { device } from "../assets/styles/breakpoints";
import { Link } from "react-router-dom";
import NotificationBox from "./NotificationBox";

function AuthContainer({ children, showError, errorMessage, showSuccess, successMessage }) {
  return (
    <S.AuthContainer>
      <div className="auth-container">
        <div className="logo">
          <Link to="/">
            <img src={dark_logo} alt="" />
          </Link>
        </div>
        {/* 
        {showSuccess && (
          <div className="error-box">
            <img src={warning_box_icon} alt="" />
            <div className="error-message">
              <h3>Success</h3>
              <p>{successMessage}</p>
            </div>
          </div>
        )} */}

        {showError && (
          <div className="spacing">
            <NotificationBox errorMessage={errorMessage} />
          </div>
        )}

        {children}
      </div>
      <AuthFooter />
    </S.AuthContainer>
  );
}

export default AuthContainer;

const S = {};

S.AuthContainer = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    margin-top: 13px;
    margin-bottom: 18px;
  }

  .logo img {
    height: auto;
    width: 103px;
  }

  .auth-container {
    width: 350px;
    margin: 0 auto;
  }

  .spacing {
    margin-bottom: 15px;
  }

  @media (max-width: 719px) {
    .center-section {
      width: 400px;
      /* width: 0;
      margin: 0; */
      /* display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column; */
    }
  }
`;
