import React, { useEffect } from "react";
import styled from "styled-components";
import warning_box_icon from "../assets/images/warning_box_icon.svg";
import tick_icon from "../assets/images/tick-icon.svg";
import { useDispatch } from "react-redux";
import { deleteAllNotifications } from "../slices/notificationSlice";

function NotificationBox({ successMessage, errorMessage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteAllNotifications());
    }, 5000);
  }, [dispatch]);

  return (
    <>
      {successMessage || errorMessage ? (
        <S.NotificationBox successMessage={!!successMessage} errorMessage={!!errorMessage}>
          <img src={successMessage ? tick_icon : warning_box_icon} alt="" />
          <div className="notification-msg">
            <h3>{successMessage ? "Success" : "There was a problem"}</h3>
            <p>{successMessage ?? errorMessage}</p>
          </div>
        </S.NotificationBox>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default NotificationBox;

const S = {};

S.NotificationBox = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 14px 18px 14px 14px;

  img {
    margin-right: 15px;
    align-self: flex-start;
  }

  .notification-msg h3 {
    font-size: 17px;
    font-weight: 400;
    line-height: 21px;
  }

  .notification-msg p {
    margin-top: 7px;
  }

  ${(props) => {
    if (props.successMessage)
      return `
        box-shadow: inset 0px 0px 4px 4px #dff7df;
        border: 1px solid #7fc87f;
        h3 {
      color: #25a625;
    }
        `;

    if (props.errorMessage)
      return `
      border: 1px solid #c40000;

      h3 {
        color: #c40000;
      }
      `;
  }}
`;
