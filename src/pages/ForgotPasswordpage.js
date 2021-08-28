import React from "react";
// import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import amazon_dark_logo from "../assets/images/amazon_dark_logo.svg";
import warning_icon from "../assets/images/warning-icon.svg";
import { useMutation } from "react-query";
import * as api from "../api";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthFooter from "../components/AuthFooter";
import AuthContainer from "../components/AuthContainer";
import { setPasswordSchema } from "../schemas/schemas";
import { Helmet } from "react-helmet-async";

function ForgotPasswordpage() {
  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.requestPasswordReset(val));

  const submitHandler = (email) => {
    mutate(email);
  };

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet title="Amazon Password Assistance" />

      <AuthContainer showError={isError} errorMessage={isError ? error.response.data.error : null}>
        <S.ForgotPasswordPage>
          <div className="forgot-password-box">
            <div className="forgot-password-box-inner">
              <h1>Password assistance</h1>

              <p className="notice">Enter the email address or mobile phone number associated with your Amazon account.</p>

              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={setPasswordSchema}
                onSubmit={submitHandler}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors, touched }) => (
                  <Form className="forgot-password-form-container">
                    <label htmlFor="email" className="retro-label">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="text"
                      placeholder="Email"
                      className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                    />
                    {errors.email && touched.email ? (
                      <div className="formErrors">
                        <img src={warning_icon} alt="error" />
                        {errors.email}
                      </div>
                    ) : null}

                    <button type="submit" className="retro-btn">
                      <p>Request password reset</p>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </S.ForgotPasswordPage>
      </AuthContainer>
    </>
  );
}

export default ForgotPasswordpage;

const S = {};

S.ForgotPasswordPage = styled.div`
  .forgot-password-box {
    border: 1px #ddd solid;
    background-color: #fff;
    display: block;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 25px 27px;
  }

  .forgot-password-box-inner h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    margin-bottom: 12px;
  }

  .notice {
    color: #111111;
    line-height: 19px;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .forgot-password-form-container {
    display: flex;
    flex-direction: column;
  }

  .forgot-password-form-container button {
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;

    background: linear-gradient(to bottom, #f5d78e, #eeb933);
    margin-top: 20px;
  }

  .forgot-password-form-container button p {
    display: block;
    font-size: 13px;
    line-height: 29px;
    padding: 0 10px 0 11px;
    text-align: center;
    color: black;
  }
`;
