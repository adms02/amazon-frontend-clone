import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Link, Redirect } from "react-router-dom";
import warning_icon from "../assets/images/warning-icon.svg";
import AuthContainer from "../components/AuthContainer";
import { useMutation } from "react-query";
import * as api from "../api";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../slices/userSlice";
import { useHistory } from "react-router-dom";
import { device } from "../assets/styles/breakpoints";
import queryString from "query-string";
import { loginSchema } from "../schemas/schemas";
import { Helmet } from "react-helmet-async";
import { addAttempt, clearAttempts } from "../slices/recaptchaSlice";
import { getAttempts } from "../slices/recaptchaSlice";
import ReCAPTCHA from "react-google-recaptcha";

function SignInpage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const attempts = useSelector(getAttempts);

  const queryValues = queryString.parse(history.location.search);
  const redirectUrl = queryValues.redirectUrl;

  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.signIn(val), {
    onError: () => dispatch(addAttempt()),
  });

  if (isSuccess) {
    console.log(`signinpage success`);
    dispatch(loginHandler(data));
    return <Redirect to="/" />;
  }

  const submitHandler = ({ email, password }) => {
    mutate({ email, password });
  };

  const onCaptchaSuccess = () => {
    dispatch(clearAttempts());
  };

  return (
    <>
      <Helmet title="Amazon Sign In" />

      <AuthContainer showError={isError} errorMessage={isError ? error.response.data.error : null}>
        <S.Signuppage>
          {attempts > 2 && <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={onCaptchaSuccess} />}

          {attempts < 3 && (
            <div>
              <div className="signup-box">
                <div className="signup-box-inner">
                  <h1>Sign-In</h1>

                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={submitHandler}
                    validateOnChange={true}
                    validateOnBlur={false}
                  >
                    {({ errors, touched }) => (
                      <Form className="login-form-container">
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

                        {/* {failedAttempts === 3 && <p>Hiiiii</p>} */}

                        <div className="bottom-label">
                          <label htmlFor="Password" className="retro-label">
                            Password
                          </label>
                          <Link to={`/ap/forgotpassword`}>
                            <p className="link">Forgot your password?</p>
                          </Link>
                        </div>

                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                          autoComplete="on"
                        />
                        {errors.password && touched.password ? (
                          <div className="formErrors">
                            <img src={warning_icon} alt="error" />
                            {errors.password}
                          </div>
                        ) : null}
                        <button type="submit" className="retro-btn">
                          Sign in
                        </button>
                      </Form>
                    )}
                  </Formik>

                  <div className="message">
                    <p>
                      By signing-in you agree to Amazon's <span className="link">Conditions of Use & Sale</span>. Please see our{" "}
                      <span className="link">Privacy Notice</span>, our <span className="link">Cookies Notice</span> and our{" "}
                      <span className="link">Interest-Based Ads Notice</span>.
                    </p>
                    {/* <button onClick={() => dispatch(addAttempt())}>adwdawd</button> */}
                  </div>
                </div>
              </div>

              <div className="divider-container">
                <p>New to Amazon?</p>
              </div>

              <Link to={redirectUrl ? `/ap/register?redirectUrl=${redirectUrl}` : `/ap/register`}>
                <button className="retro-btn create-acc-btn">Create your Amazon account</button>
              </Link>
            </div>
          )}
        </S.Signuppage>
      </AuthContainer>
    </>
  );
}

export default SignInpage;

const S = {};

S.Signuppage = styled.div`
  .signup-box {
    border: 1px #ddd solid;
    background-color: #fff;
    display: block;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 25px 27px;
  }
  .signup-box-inner h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    margin-bottom: 12px;
  }
  .login-form-container {
    display: flex;
    flex-direction: column;
  }
  .retro-btn {
    border-color: #adb1b8 #a2a6ac #8d9096;
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
  }
  .message {
    margin-top: 20px;
  }
  .message p {
    color: #111111;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .bottom-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
  }
  .bottom-label p {
    font-size: 13px;
  }
  .divider-container {
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
  }
  .divider-container::after {
    content: "";
    width: 100%;
    background-color: transparent;
    display: block;
    height: 1px;
    border-top: 1px solid #e7e7e7;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    z-index: 1;
  }
  .divider-container p {
    line-height: 1;
    font-size: 12px;
    color: #767676;
    font-weight: 400;
    z-index: 2;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;
  }
  .create-acc-btn {
    background: #f0f1f4;
  }
`;
