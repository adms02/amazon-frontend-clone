import React, { useState } from "react";
import styled from "styled-components";
import securedsslicon from "../assets/images/secured-ssl._CB485936991_.png";
import locationicon from "../assets/images/location-icon.png";
import dataFormat from "dateformat";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useHistory } from "react-router-dom";
import { device } from "../assets/styles/breakpoints";

function Buybox({ id, mainimg, title, price, category, quantity }) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const dateFormatted = dataFormat(tomorrow, "dddd, mmmm dS");

  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [inStock, setInStock] = useState(quantity > 1);

  const quantityHandler = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const availableQuantity = [...Array(quantity > 5 ? 5 : quantity).keys()];

  const addItemToBasketHandler = () => {
    const product = {
      id,
      mainimg,
      title,
      price: Number(price),
      category,
      quantity: Number(selectedQuantity),
    };

    //sending product as an action to redux store
    dispatch(addToBasket(product));
    history.push(`/gp/huc/${id}`);
  };

  return (
    <S.Buybox instock={inStock}>
      <div className="buy-box">
        <div className="buy-box-price">
          <p>£{price}</p>
        </div>

        {inStock && (
          <div>
            <div className="delivey-notice">
              <p>
                <span className="highlight">FREE delivery: </span>
                <span className="bold">{dateFormatted}</span> on your first eligible order to UK or Ireland.
              </p>
            </div>

            <div className="delivey-notice">
              <p>
                Fastest delivery: <span className="bold">Tomorrow</span> Order within 1 hr 21 mins{" "}
                <span className="highlight">Details</span>
              </p>
            </div>
            <div className="delivery-location">
              <img src={locationicon} alt="" />
              <p>Select delivery location</p>
            </div>
          </div>
        )}

        {inStock ? <div className="stock-status">In stock.</div> : <div className="stock-status">Out of stock.</div>}

        {inStock && (
          <div>
            <div className="quantity-selector">
              <p>Quantity:</p>
              <select onClick={quantityHandler}>
                {availableQuantity.map((x, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="cta-buttons">
              <button className="add-to-basket-cta cta" onClick={addItemToBasketHandler}>
                <p>Add to Basket</p>
              </button>
              <button className="buy-now-cta cta">
                <p>Buy Now</p>
              </button>
            </div>
          </div>
        )}

        <div className="trust-badge">
          <img src={securedsslicon} alt="" />
          <p>Secure transaction</p>
        </div>

        <div className="delivey-notice">
          <p>
            Sold by <span className="highlight">Pamila EU</span> and <span className="highlight">Fulfilled by Amazon</span>{" "}
          </p>
        </div>

        <div className="add-gift-option">
          <input type="checkbox" id="gift" name="gift" />
          <label>Add gift options</label>
        </div>

        <hr />

        <button className="add-to-list-btn">Add to List</button>
      </div>
    </S.Buybox>
  );
}

export default Buybox;

const S = {};

S.Buybox = styled.div`
  .buy-box {
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    /* display: block; */
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-left: 14px;
    padding-right: 18px;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 245px;
    max-height: object-fit;
  }

  .buy-box-price p {
    font-size: 18px;
    color: #b12704;
    margin-top: 5px;
    /* margin-bottom: 7px; */
  }

  .delivey-notice {
    margin-top: 14px;
  }

  .delivey-notice p {
    font-size: 14px;
    color: black;
    line-height: 20px;
  }

  .highlight {
    font-size: 14px;
    font-weight: 400;
    color: #007185;
    line-height: 20px;
    cursor: pointer;
  }

  .bold {
    font-weight: 700;
  }

  .stock-status {
    color: ${(props) => (props.instock ? `#058552` : `#b12704`)};
    font-size: 18px;
    margin-top: 10px;
    font-weight: 400;
    line-height: 24px;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    margin-top: 18px;
  }

  .quantity-selector p {
    color: black;
    margin-right: 6px;
    font-size: 14px;
    line-height: 20px;
  }

  select {
    border: 1px solid #ddd;
    border-radius: 4px 4px 4px 4px;
    padding: 3px;
  }

  .cta-buttons {
    margin-top: 12px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .cta {
    cursor: pointer;
    display: block;
    height: 31px;
    border-radius: 20px;
    border: 1px;
    border-style: solid;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    margin-bottom: 8px;
  }

  .cta p {
    font-size: 12px;
    color: black;
    line-height: 19px;
    font-weight: 400;
  }

  .add-to-basket-cta {
    background: #ffd814;
    border-color: #fcd200;
  }

  .buy-now-cta {
    background: #ffa41c;
    border-color: #ff8f00;
  }

  .trust-badge {
    display: flex;
    align-items: center;
    margin-top: 13px;
  }

  .trust-badge img {
    height: 15px;
    object-fit: contain;
    margin-right: 14px;
  }

  .trust-badge p {
    color: #007185;
  }

  .add-gift-option {
    margin-top: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .add-gift-option label {
    font-size: 14px;
    line-height: 20px;
    margin-left: 5px;
  }

  .add-to-list-btn {
    width: 100%;
    /* height: 31px; */
    text-align: left;
    background-color: #f1f2f5;
    border-radius: 3px;
    border-left-width: 1px;
    padding-top: 9px;
    padding-bottom: 10px;
    padding-left: 10px;
    border: 1px solid #8d9096;
    line-height: 19px;
    font-weight: 400;
    cursor: pointer;
  }

  .delivery-location {
    display: flex;
    align-items: center;
    margin-top: 27px;
    cursor: pointer;
  }

  .delivery-location p {
    font-size: 12px;
    line-height: 18px;
    color: #007185;
  }

  .delivery-location img {
    margin-right: 7px;
  }

  @media ${device.laptop} {
    padding: 0 0 0 20px;

    .buy-box {
      margin-top: 20px;
      width: 100%;
      margin-left: 0;
    }
  }
`;
