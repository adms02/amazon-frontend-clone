import React from "react";
import styled from "styled-components";
import AuthContainer from "../../components/AuthContainer";
import warning_icon from "../../assets/images/warning-icon.svg";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { getUser } from "../../slices/userSlice";
import { useMutation } from "react-query";
import * as api from "../../api";
import { useQueryClient } from "react-query";
import { Redirect } from "react-router-dom";
import { setEmailSchema } from "../../schemas/schemas";
import { Helmet } from "react-helmet-async";

function ChangeEmailpage() {
  const currentEmail = useSelector(getUser).email;
  const queryClient = useQueryClient();

  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.updateCustomerEmail(val));

  const changeEmailHandler = ({ email }) => {
    mutate(email);
  };

  if (isSuccess) {
    queryClient.invalidateQueries("checkIdValid");
    return <Redirect to="/gp/profile" />;
  }

  if (isError) {
    console.log(error.response.data.error);
  }

  return (
    <AuthContainer>
      <Helmet title="Change E-mail" />

      <S.ChangeEmailpage>
        <div className="change-email-box">
          <div className="inner">
            <h1>Change your email address</h1>

            <p className="subtitle">Current email address: {currentEmail}</p>

            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={setEmailSchema}
              onSubmit={changeEmailHandler}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ errors, touched }) => (
                <Form className="change-email-form-container">
                  <label htmlFor="email" className="retro-label">
                    New email address
                  </label>
                  <Field
                    name="email"
                    type="text"
                    placeholder=""
                    className={errors.email && touched.email ? "retro-input retro-input-error" : "retro-input"}
                  />
                  {errors.email && touched.email ? (
                    <div className="formErrors">
                      <img src={warning_icon} alt="error" />
                      {errors.email}
                    </div>
                  ) : null}

                  <button type="submit" className="retro-btn retro-btn-orange">
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </S.ChangeEmailpage>
    </AuthContainer>
  );
}

export default ChangeEmailpage;

const S = {};

S.ChangeEmailpage = styled.div`
  .change-email-box {
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

  .inner h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    margin-bottom: 12px;
  }

  .change-email-form-container {
    display: flex;
    flex-direction: column;
  }
`;
