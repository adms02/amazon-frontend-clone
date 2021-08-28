import React from "react";
import styled from "styled-components";
import kettle_img from "../assets/images/kettle-desaturated._CB424695504_.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../slices/userSlice";
import { device } from "../assets/styles/breakpoints";

function EmptyBasket() {
  const history = useHistory();

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <S.EmptyBasket>
      <img src={kettle_img} alt="" />

      <div className="basket-msg">
        <p>Your Amazon basket is empty</p>

        {!isLoggedIn && (
          <div className="basket-btns">
            <button className="flat-btn yellow-btn" onClick={() => history.push("/ap/signin")}>
              Sign in to your account
            </button>
            <button className="flat-btn outline-btn" onClick={() => history.push("/ap/register")}>
              Sign up now
            </button>
          </div>
        )}
      </div>
    </S.EmptyBasket>
  );
}

export default EmptyBasket;

const S = {};

S.EmptyBasket = styled.div`
  background-color: white;
  width: 80%;
  margin-left: 20px;
  padding: 40px 20px 20px 20px;
  display: flex;
  justify-content: flex-start;
  /* flex-wrap: wrap; */

  img {
    max-width: 481px;
    width: 100%;
    object-fit: contain;
  }

  .basket-msg {
    margin-left: 40px;
  }

  .basket-msg p {
    font-size: 24px;
    line-height: 32px;
  }

  .basket-btns {
    margin-top: 20px;
    display: flex;
  }

  .yellow-btn {
    background: #ffd814;
    border-color: #fcd200;
    margin-right: 10px;
  }

  .outline-btn {
    background-color: #fff;
    border-color: #d5d9d9;
  }

  @media ${device.laptop} {
    flex-direction: column;
    padding: 40px 20px 10px 20px;
    width: 100%;

    margin: 0;

    .basket-msg {
      margin: 0;
    }

    img {
      order: 2;
      margin-top: 10px;
    }
  }
`;
