import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import OrderPlacedWidget from "../../components/OrderPlacedWidget";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyBasketHandler } from "../../slices/basketSlice";
import { Helmet } from "react-helmet-async";

function Thankyoupage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyBasketHandler());
  }, [dispatch]);

  // dispatch(emptyBasketHandler());

  return (
    <>
      <Helmet title="Order placed" />

      <Header />

      <S.Thankyoupage>
        <div className="order-widget-container">
          <OrderPlacedWidget />
        </div>

        <div className="cta">
          <Link to="/">
            <button className="flat-btn">Continue Shopping</button>
          </Link>
        </div>
      </S.Thankyoupage>
    </>
  );
}

export default Thankyoupage;

const S = {};

S.Thankyoupage = styled.div`
  .order-widget-container {
    padding: 20px;
  }

  .cta {
    text-align: center;
  }
`;
