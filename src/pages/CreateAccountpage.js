import React from "react";
import { Helmet } from "react-helmet-async";

import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import warning_icon from "../assets/images/warning-icon.svg";
import AuthContainer from "../components/AuthContainer";
import { useMutation } from "react-query";
import * as api from "../api";
import { useDispatch } from "react-redux";
import { loginHandler } from "../slices/userSlice";

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Enter your name").min(2, "Too short").max(20, "Too long"),
  email: Yup.string().email().required("Enter your email"),
  password: Yup.string().min(6, "Enter a longer password").max(40, "Enter a shorter password").required("Enter your password"),
  confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match"),
});

function CreateAccountpage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.signUp(val));

  const submitHandler = ({ name, email, password }) => {
    mutate({ name, password, email });
  };

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    dispatch(loginHandler(data));
    history.replace("/gp/homepage");
  }

  return (
    <>
      <Helmet title="Amazon Registration" />

      <AuthContainer showError={isError} errorMessage={isError ? error.response.data.error : null}>
        <S.CreateAccountpage>
          <div className="signup-box">
            <div className="signup-box-inner">
              <h1>Create account</h1>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmpassword: "",
                }}
                validationSchema={signupSchema}
                onSubmit={submitHandler}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors, touched }) => (
                  <Form className="signup-form-container">
                    <label htmlFor="name" className="retro-label">
                      Your name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                    />
                    {errors.name && touched.name ? (
                      <div className="formErrors">
                        <img src={warning_icon} alt="error" />
                        {errors.name}
                      </div>
                    ) : null}

                    <label htmlFor="email" className="retro-label">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                    />
                    {errors.email && touched.email ? (
                      <div className="formErrors">
                        <img src={warning_icon} />
                        {errors.email}
                      </div>
                    ) : null}

                    <label htmlFor="password" className="retro-label">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="At least six characters"
                      className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                    />
                    {errors.password && touched.password ? (
                      <div className="formErrors">
                        <img src={warning_icon} />
                        {errors.password}
                      </div>
                    ) : null}

                    <label htmlFor="confirmpassword" className="retro-label">
                      Re-enter Password
                    </label>
                    <Field
                      name="confirmpassword"
                      type="password"
                      className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (
                      <div className="formErrors">
                        <img src={warning_icon} />
                        {errors.confirmpassword}
                      </div>
                    ) : null}

                    <button type="submit" className="retro-btn">
                      Create your Amazon account
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="message">
                <p>
                  By creating an account you agree to Amazon's <Link>Conditions of Use & Sale</Link>. Please see our{" "}
                  <Link>Privacy Notice</Link>, our <Link>Cookies Notice</Link> and our <Link>Interest-Based Ads Notice</Link>.
                </p>
              </div>

              <div className="divider-inner" />

              <div className="other-options">
                <p>
                  Already have an account? <Link to="/ap/signin">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </S.CreateAccountpage>
      </AuthContainer>
    </>
  );
}

export default CreateAccountpage;

const S = {};

S.CreateAccountpage = styled.div`
  .signup-box {
    border: 1px #ddd solid;
    background-color: #fff;
    display: block;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 25px 20px;
  }

  .signup-box-inner h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    margin-bottom: 12px;
  }

  .signup-form-container {
    display: flex;
    flex-direction: column;
  }

  .retro-btn {
    border-color: #adb1b8 #a2a6ac #8d9096;
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
  }

  .message {
    margin-top: 20px;
    margin-bottom: 26px;
  }

  .message p {
    color: #111111;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }

  .message a {
    font-size: 12px;
    color: #0066c0;
  }

  .divider-inner {
    height: 44px;
    margin-bottom: -18px;
    background: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.03) 3px, transparent);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.03) 3px, transparent);
    z-index: 0;
    zoom: 1;
  }

  .divider-inner::after {
    display: block;
    width: 100%;
    height: 44px;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
    z-index: 1;
    content: "";
  }

  .other-options p {
    font-size: 13px;
    line-height: 19px;
  }
`;
