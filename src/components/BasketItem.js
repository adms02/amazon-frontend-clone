import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { device } from "../assets/styles/breakpoints";

function BasketItem({ id, img, title, price, quantity, updateQuantityHandler, removeItemHandler }) {
  const history = useHistory();

  const [isQtyDropdownOpen, setIsQtyDropdownOpen] = useState(false);

  const options = [
    {
      option0: "0 (Delete)",
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6,
      option7: 7,
      option8: 8,
      option9: 9,
      option10: 10,
    },
  ];

  return (
    <S.BasketItem>
      <div className="checkbox">
        <input type="checkbox" id="scales" name="scales" />
      </div>

      <div className="item-image" onClick={() => history.push(`/${title}/dp/${id}`)}>
        <img src={img} alt="" />
      </div>

      <div className="item-content">
        <p className="item-title" onClick={() => history.push(`/${title}/dp/${id}`)}>
          {title}
        </p>

        <p className="dispatch-time">Usually dispatched within 1 to 3 weeks.</p>
        <p className="free-shipping">Eligible for FREE shipping</p>
        <div className="gift">
          <input type="checkbox" id="gift" name="gift" />
          <label htmlFor="gift">This will be a gift</label>
        </div>

        <div className="item-options">
          <div className="option">
            <Dropdown
              id={id}
              currentValue={quantity}
              isOpen={isQtyDropdownOpen}
              setIsOpen={setIsQtyDropdownOpen}
              options={options}
              updateValue={updateQuantityHandler}
            />
          </div>

          <div className="option">
            <p onClick={() => removeItemHandler(id)}>Delete</p>
          </div>

          <div className="option">
            <p>Save for later</p>
          </div>

          <div className="option">
            <p>See more like this</p>
          </div>
        </div>
      </div>

      <div className="item-price">
        <p>£{(price * quantity).toFixed(2)}</p>
      </div>
    </S.BasketItem>
  );
}

export default BasketItem;

const S = {};

S.BasketItem = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;

  .basket-item {
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
  }

  .item-image {
    margin-left: 20px;
    margin-right: 13px;
    height: 150px;
    width: 150px;
  }

  .item-image img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .item-title {
    font-size: 18px;
    color: #007185;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
    word-wrap: break-word;
  }

  .dispatch-time {
    font-size: 12px;
    color: #c45500;
    line-height: 16px;
  }

  .free-shipping {
    color: #565959;
    font-size: 12px;
    line-height: 16px;
  }

  .item-content {
    align-self: start;
  }

  .gift {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
  .gift input {
    margin-right: 5px;
  }

  .gift label {
    font-size: 12px;
  }

  .item-options {
    display: flex;
    flex-wrap: wrap;
  }

  .option {
    margin-top: 10px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .option:first-child {
    padding-left: 0;
  }

  .option:last-child {
    border: 0;
  }

  .option p {
    color: #007185;
    line-height: 16px;
    font-size: 12px;
    cursor: pointer;
  }

  .item-price {
    align-self: flex-start;
    margin-left: auto;
  }

  .item-price p {
    color: #0f1111;
    font-size: 18px;
    font-weight: 700;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;

    .item-image img {
      min-width: 20%;
      width: 100%;
    }

    .item-title {
      font-size: 15px;
    }

    .item-price {
      /* display: none; */
    }

    .item-content {
      height: 100%;
    }

    .item-options {
      flex-direction: column;
    }

    /* flex-direction: column; */
  }
`;
