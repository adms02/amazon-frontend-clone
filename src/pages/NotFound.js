import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import notfounddog from "../assets/images/notfound-dog.jpg";
import { Link } from "react-router-dom";
import MobileSearchBar from "../components/MobileSearchBar";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet title="Page Not Found" />

      <Header />
      <MobileSearchBar />
      <S.NotFound>
        <div className="NotFound">
          <div className="title">
            <h1>SORRY</h1>
          </div>

          <div className="sub-title">
            <p>we couldn't find that page</p>
          </div>

          <div className="cta">
            <p>
              Try searching or go to{" "}
              <span className="cta-link">
                <Link to="/">Nrazon's home page.</Link>
              </span>
            </p>
          </div>

          <div className="image">
            <img src={notfounddog} alt="" />
          </div>

          <div className="cta">
            <p>
              <span className="cta-link">Meet the dogs of Amazon</span>
            </p>
          </div>
        </div>
      </S.NotFound>
    </>
  );
}

export default NotFound;

const S = {};
S.NotFound = styled.div`
  margin-top: 30px;

  .NotFound {
    width: 60%;
    margin: auto;
    text-align: left;
  }

  .title h1 {
    font-size: 80px;
    color: #6c7778;
    font-weight: 300;
  }

  .title,
  .sub-title {
    margin: 10px 0;
  }

  .sub-title p {
    color: #6c7778;
    font-size: 48px;
    font-weight: 200;
  }

  .cta {
    margin-top: 20px;
  }

  .cta p {
    font-size: 24px;
    color: #6c7778;
    font-weight: 200;
  }

  .cta-link a {
    color: #0099d9;
    cursor: pointer;
    font-size: 24px;
    font-weight: 200;
  }

  .image {
    display: flex;
    justify-content: center;
  }
  .image img {
    margin-top: 15px;
    max-width: 90%;
  }
`;
