import React from "react";
import styled from "styled-components";
import staricon from "../assets/images/star-icon.svg";
import { device } from "../assets/styles/breakpoints";

function ReviewsBadge({ rating, reviews }) {
  const rev = Math.round(reviews);

  return (
    <S.ReviewsBadge>
      {Array(rating)
        .fill()
        .map((_, i) => (
          <img src={staricon} key={i} className="star" />
        ))}

      <div className="rating">{rev} ratings</div>
    </S.ReviewsBadge>
  );
}

export default ReviewsBadge;

const S = {};

S.ReviewsBadge = styled.div`
  display: flex;
  align-items: center;

  .rating {
    margin-left: 15px;
    padding-bottom: 2px;
    font-size: 14px;
    font-weight: 400;
    color: #007185;
    line-height: 20px;
  }

  .rating:hover {
    color: #c7511f;
    text-decoration: underline;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    .rating {
      font-size: 13px;
      line-height: 18px;
    }
  }
`;
