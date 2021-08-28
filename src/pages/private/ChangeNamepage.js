import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Breadcrumbs from "../../components/Breadcrumbs";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../slices/userSlice";
import { setSuccessNotification, setErrorNotification } from "../../slices/notificationSlice";
import { Formik, Form, Field } from "formik";
import { setNameSchema } from "../../schemas/schemas";
import warning_icon from "../../assets/images/warning-icon.svg";
import { useMutation } from "react-query";
import * as api from "../../api";
import { Redirect } from "react-router-dom";
import { useQueryClient } from "react-query";
import { Helmet } from "react-helmet-async";

function ChangeNamepage() {
  const { mutate, data, error, isError, isSuccess } = useMutation((val) => api.updateCustomerName(val));

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const breadcrumbs = [
    { pathName: "Your account", link: "/gp/homepage" },
    { pathName: "Login & Security", link: "/gp/profile" },
    { pathName: "Change Your Name", link: "/gp/profile/change-name" },
  ];

  const user = useSelector(getUser);

  const setNameHandler = ({ name }) => {
    mutate(name);
  };

  if (isSuccess) {
    dispatch(setSuccessNotification("You successfully changed your account!"));
    queryClient.invalidateQueries("checkIdValid");

    return <Redirect to={{ pathname: "/gp/profile", state: { alert: "You successfully changed your account!" } }} />;
  }

  return (
    <>
      <Helmet title="Amazon Change Name" />

      <Header />
      <SubHeader />

      <S.ChangeNamepage>
        <div className="change-name-header">
          <Breadcrumbs breadcrumbs={breadcrumbs} />

          <h1>Change Your Name</h1>
        </div>

        <div className="change-name-container">
          <span className="description">
            If you want to change the name associated with your Amazon customer account, you may do so below. Make sure that you
            click the <span className="bold">Save Changes</span> button when you have finished.
          </span>

          <Formik
            initialValues={{
              name: `${user.firstname} ${user.lastname}`,
            }}
            validationSchema={setNameSchema}
            onSubmit={setNameHandler}
            validateOnChange={true}
            validateOnBlur={false}
          >
            {({ errors, touched }) => (
              <Form className="change-name-form-container">
                <label htmlFor="name" className="retro-label">
                  New name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder=""
                  className={errors.name && touched.name ? "retro-input retro-input-error" : "retro-input"}
                />
                {errors.name && touched.name ? (
                  <div className="formErrors">
                    <img src={warning_icon} alt="error" />
                    {errors.name}
                  </div>
                ) : null}

                <div className="cn-btn-container">
                  <button className="retro-btn retro-btn-orange" type="submit">
                    Save changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </S.ChangeNamepage>
    </>
  );
}

export default ChangeNamepage;

const S = {};

S.ChangeNamepage = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;

  .change-name-header {
    margin-top: 13px;
    margin-bottom: 15px;
  }
  .change-name-header h1 {
    margin-top: 27px;
    /* margin-bottom: 20px; */
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
  }

  .change-name-container {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 19px 19px 35px 19px;
  }

  .description {
    font-size: 13px;
    line-height: 19px;
  }

  .cn-btn-container {
    width: 110px;
  }

  .change-name-form-container {
    margin-top: 20px;
  }
`;
