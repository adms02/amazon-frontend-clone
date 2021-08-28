import React from "react";
import styled from "styled-components";
import staricon from "../assets/images/star-icon.svg";
import ReviewsBadge from "./ReviewsBadge";
import { device } from "../assets/styles/breakpoints";
import { Link } from "react-router-dom";

function MobileProductHeader({ title, rating, reviews }) {
  return (
    <S.MobileProductHeader>
      <h1>{title}</h1>

      <div className="store-and-ratings">
        <div className="left">
          <Link to="#">Visit the Store</Link>
        </div>

        <div className="right">
          <ReviewsBadge rating={rating} reviews={reviews} />
        </div>
      </div>
    </S.MobileProductHeader>
  );
}

export default MobileProductHeader;

const S = {};

S.MobileProductHeader = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  display: none;

  h1 {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
  }

  .rating-container {
    margin-top: 10px;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    h1 {
      font-size: 13px;
      line-height: 18px;
      color: #565959;
      font-weight: 400;
      order: 2;
      margin-top: 4px;
    }

    .store-and-ratings {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
