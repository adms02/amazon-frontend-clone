import React from "react";
import styled from "styled-components";
import gift_icon from "../assets/images/gifts_icon._CB480856104_.png";
import tick_icon from "../assets/images/tick-icon.svg";
import { useHistory } from "react-router-dom";
import { device } from "../assets/styles/breakpoints";

function NewItemWidget({ image, quantity, subtotal }) {
  const history = useHistory();

  const editBasketHandler = () => {
    history.push("/basket");
  };

  return (
    <>
      <S.NewItemWidget>
        <div className="item-left-block">
          <div className="items-one">
            <img className="item-tick" src={tick_icon} />
            <img className="item-product-img" src={image} alt="" />
          </div>

          <div className="items-two">
            <p>Added To Basket</p>
          </div>
        </div>

        <div className="item-right-block">
          <div className="items-three">
            <p className="subtotal-title">
              Basket subtotal{" "}
              <span className="number-of-items">({quantity <= 1 ? `${quantity} item` : `${quantity} items`}): </span>
              <span className="subtotal">£{subtotal}</span>
            </p>
            <p className="message">Your order qualifies for FREE UK Delivery! Select this option at checkout.</p>

            <input type="checkbox" id="isGift" name="isGift" />
            <img className="gift_icon" src={gift_icon} />
            <label htmlFor="isGift">This is a gift</label>
          </div>

          <div className="buttons">
            <button className="edit-basket-btn" onClick={editBasketHandler}>
              Edit basket
            </button>

            <button className="checkout-btn" onClick={editBasketHandler}>
              View Basket
            </button>
          </div>
        </div>
      </S.NewItemWidget>
    </>
  );
}

export default NewItemWidget;

const S = {};

S.NewItemWidget = styled.div`
  display: flex;
  border: 1px solid #d8d8d8;

  .item-left-block {
    background-color: #fafafa;
    display: flex;
    align-items: center;
    /* width: 40%; */
  }

  .items-one {
    padding: 13px 10px;
    display: flex;
  }

  .item-tick {
    margin-right: 10px;
  }

  .item-product-img {
    border: 1px solid #099700;
    cursor: pointer;
    height: 52px;
    width: 52px;
    object-fit: contain;
  }

  .items-two p {
    color: #099700;
    font-size: 17px;
    line-height: 21px;
    font-weight: 700;
  }

  .items-two {
    padding-right: 15px;
  }

  .item-right-block {
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-right: 20px;
  }

  .items-three {
    padding-left: 14px;
    padding-top: 10px;
    padding-right: 58px;
  }

  .subtotal-title {
    color: #0f1111;
    font-size: 17px;
    font-weight: 700;
  }

  .number-of-items {
    font-weight: 400;
  }

  .subtotal {
    color: #b12704;
  }

  .message {
    font-size: 12px;
    line-height: 18px;
    color: #0f1111;
    margin: 3px 0;
  }

  .gift_icon {
    margin: 0 3px;
  }

  label {
    font-size: 12px;
  }

  .items-four {
    margin-right: 13px;
  }

  .edit-basket-btn {
    display: inline-block;
    font-size: 14px;
    line-height: 38px;
    background: #e7e9ec;
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    padding: 0 13px;
    white-space: nowrap;
    margin-right: 10px;
  }

  .checkout-btn {
    display: inline-block;
    font-size: 14px;
    line-height: 38px;
    white-space: nowrap;
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    padding: 0 36px;
    background: #f3cf75;
    margin-right: 10px;
  }

  .buttons {
    display: flex;

    justify-self: flex-end;
    flex-wrap: wrap-reverse;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin: 0 20px;

    .item-right-block {
      flex-direction: column;
      padding: 0;
      align-items: flex-start;
      padding: 10px 14px;
    }

    .items-three {
      padding: 0;
      margin: 10px 0;
    }

    .buttons {
      margin-top: 10px;
    }

    .checkout-btn,
    .edit-basket-btn {
      margin-right: 0;
    }

    .edit-basket-btn {
      margin-top: 10px;
    }
  }

  @media ${device.mobileL} {
    .items-four {
      margin-right: 0;
    }

    .edit-basket-btn {
      margin-bottom: 10px;
    }

    .buttons,
    .edit-basket-btn,
    .checkout-btn {
      width: 100%;
    }
  }
`;
