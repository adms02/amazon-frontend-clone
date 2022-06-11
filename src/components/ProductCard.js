import React, { useState } from "react";
import styled from "styled-components";
import staricon from "../assets/images/star-icon.svg";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import ClampLines from "react-clamp-lines";
import { useHistory } from "react-router-dom";

function ProductCard({ id, title, price, category, images, rating }) {
  const parsedTitle = title.replace(/\s/g, "-");
  const url = `/${parsedTitle}/dp/${id}`;
  const image = Object.values(images);
  const dispatch = useDispatch();
  const history = useHistory();

  const addItemToBasketHandler = () => {
    const product = {
      id,
      mainimg: image,
      title,
      price,
      category,
      quantity: 1,
    };

    //sending product as an action to redux store
    dispatch(addToBasket(product));

    history.push(`/gp/huc/${id}`);
  };

  return (
    <S.ProductCard>
      <div>
        <div className="image">
          <Link to={url}>
            <img src={image[0]} alt="" />
          </Link>
        </div>
        <div className="title">
          <Link to={url}>
            <ClampLines text={title} lines={2} buttons={false} />
          </Link>
        </div>

        <div className="rating">
          {Array(Number(rating))
            .fill()
            .map((_, i) => (
              <img src={staricon} key={i} className="star" />
            ))}
        </div>

        <div className="price">
          <Currency quantity={Number(price)} currency="GBP" />
        </div>
      </div>

      <button onClick={addItemToBasketHandler}>
        <p>Add to Basket</p>
      </button>
    </S.ProductCard>
  );
}

export default ProductCard;

const S = {};

/**
 * //*Product Card UI
 */

S.ProductCard = styled.div`
  background-color: white;
  width: 350px;
  height: 420px;
  padding: 20px;
  margin: 10px 10px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .image {
    height: 200px;
    text-align: center;
  }

  .image img {
    height: 200px;
    width: 200px;
    object-fit: contain;
  }

  .title {
    padding-top: 22px;
  }

  .title p {
    color: black;
    font-size: 16px;
    line-height: 24px;
  }

  .header h2 {
    font-size: 21px;
    line-height: 27px;
    padding: 0 20px;
  }

  .star {
    margin-top: 10px;
  }

  .desc {
    font-size: 14px;
    line-height: 16px;
  }

  button {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    background: #ffd814;
    border-color: #fcd200;
    height: 40px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    display: inline-block;
  }

  button p {
    font-size: 13px;
    color: #0f1111;
    line-height: 29px;
  }
`;
