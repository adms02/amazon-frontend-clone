import React from "react";
import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { Link } from "react-router-dom";

function CardCell({ icon, title, desc, link }) {
  return (
    <S.CardCell>
      <Link to={link ? link : "/"} className="remove-underline">
        <div className="card">
          <img src={icon} alt="" />
          <div className="card-content">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    </S.CardCell>
  );
}

export default CardCell;

const S = {};

S.CardCell = styled.div`
  :nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }

  .card {
    display: flex;
    border-radius: 8px;
    position: relative;
    border: 1px #d5d9d9 solid;
    height: 100%;
    cursor: pointer;
    width: 318px;
    padding: 14px 18px;
  }

  .card:hover {
    background-color: #eeeeee;
  }

  .card img {
    width: 66.11px;
    object-fit: contain;
  }

  .card-content {
    margin-left: 4px;
  }

  .card-content h2 {
    font-size: 17px;
    line-height: 32px;
    font-weight: 400;
  }

  .card-content p {
    font-size: 14px;
    line-height: 20px;
    color: #565959;

    margin: 0;
    padding: 0;
  }

  .remove-underline {
    text-decoration: none;
    color: black;
  }

  @media ${device.laptop} {
    :nth-child(2) {
      margin-left: 0;
      margin-right: 0;
    }

    .card {
      width: 100%;
    }

    margin-bottom: 20px;
  }
`;
