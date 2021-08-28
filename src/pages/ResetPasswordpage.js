import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
import warning_icon from "../assets/images/warning-icon.svg";
import AuthContainer from "../components/AuthContainer";
import { useMutation } from "react-query";
import * as api from "../api";
import { useParams } from "react-router";
import { requestResetPasswordSchema } from "../schemas/schemas";
import { useDispatch } from "react-redux";
import { setSuccessNotification } from "../slices/notificationSlice";
import { Helmet } from "react-helmet-async";

function ResetPasswordpage() {
  const { token } = useParams();
  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.checkResetPassTokenValid(val));

  const setNewPassword = useMutation((val) => api.setNewPassword(val));

  const dispatch = useDispatch();

  useEffect(() => {
    mutate({ token });
  }, [token, mutate]);

  if (isError) {
    return <Redirect to="/" />;
  }

  if (isSuccess) {
    // dispatch(setSuccessNotification(""));
    //TODO Cleanup Notification system
    return <Redirect to="/ap/signin" />;
  }

  const resetPassHandler = ({ password }) => {
    setNewPassword.mutate({ password, token });
  };

  return (
    <AuthContainer>
      <Helmet title="Amazon Reset Password" />

      <S.ResetPasswordpage>
        <div className="resetpass-box">
          <div className="resetpass-inner">
            <h1>Create new password</h1>
            <p className="subtitle">We'll ask for this password whenever you sign in.</p>

            <Formik
              initialValues={{
                password: "",
                confirmpassword: "",
              }}
              validationSchema={requestResetPasswordSchema}
              onSubmit={resetPassHandler}
              validateOnChange={true}
              validateOnBlur={false}
            >
              {({ errors, touched }) => (
                <Form className="resetpass-form-container">
                  <label htmlFor="password" className="retro-label">
                    New password
                  </label>
                  <Field
                    name="password"
                    type="text"
                    placeholder=""
                    className={errors.password && touched.password ? "retro-input retro-input-error" : "retro-input"}
                  />
                  {errors.password && touched.password ? (
                    <div className="formErrors">
                      <img src={warning_icon} alt="error" />
                      {errors.password}
                    </div>
                  ) : null}

                  <label htmlFor="Password" className="retro-label">
                    Re-enter password
                  </label>

                  <Field
                    name="confirmpassword"
                    type="confirmpassword"
                    placeholder=""
                    className={
                      errors.confirmpassword && touched.confirmpassword ? "retro-input retro-input-error" : "retro-input"
                    }
                    autoComplete="on"
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <div className="formErrors">
                      <img src={warning_icon} alt="error" />
                      {errors.confirmpassword}
                    </div>
                  ) : null}
                  <button type="submit" className="retro-btn">
                    Save changes and sign in
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="password-tips">
          <p>Secure password tips:</p>
          <ul>
            <li>Use at least 6 characters, a combination of numbers and letters at best.</li>
            <li>Do not use the same password you have used with us previously.</li>
            <li>
              Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can
              be easily obtained.
            </li>
            <li>Do not use the same password for multiple online accounts.</li>
          </ul>
        </div>
      </S.ResetPasswordpage>
    </AuthContainer>
  );
}

export default ResetPasswordpage;

const S = {};

S.ResetPasswordpage = styled.div`
  .resetpass-box {
    border: 1px #ddd solid;
    background-color: #fff;
    display: block;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 25px 27px;
  }

  .subtitle {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .resetpass-inner h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    margin-bottom: 12px;
  }

  .resetpass-form-container {
    display: flex;
    flex-direction: column;
  }

  .retro-btn {
    border-color: #adb1b8 #a2a6ac #8d9096;
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
  }

  .bottom-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
  }

  .bottom-label p {
    font-size: 13px;
    line-height: 19px;
  }

  .password-tips p {
    font-size: 17px;
  }

  .password-tips ul li {
    font-size: 13px;
    line-height: 19px;
    margin-top: 5px;
  }

  .password-tips {
    margin-left: 10px;
  }
`;
