import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import success_icon from "../assets/images/success_icon.svg";
import { device } from "../assets/styles/breakpoints";

function OrderPlacedWidget() {
  return (
    <S.OrderPlacedWidget>
      <div className="order-placed-widget-inner">
        <div className="left">
          <div className="left-top">
            <div className="widget-title">
              <img src={success_icon} alt="" />
              <h1>Order placed, thanks!</h1>
            </div>

            <p>Confirmation will be sent to your email</p>
            {/* <div className="deliver-to"></div> */}
          </div>

          <div className="line" />

          <div className="left-bottom">
            <Link to="/gp/homepage">Review or edit your recent orders</Link>
          </div>
        </div>

        {/* <div className="right">
          <div className="right-ad">
            <span className="ad-header">
              Do you purchase online for work? Register for a FREE Amazon Business account to access features including
              downloadable VAT invoices, business-only prices, bulk savings and more.
            </span>

            <Link>Go to Amazon Business</Link>
          </div>
        </div> */}
      </div>
    </S.OrderPlacedWidget>
  );
}

export default OrderPlacedWidget;

const S = {};

S.OrderPlacedWidget = styled.div`
  background-color: #f0f2f2;
  width: 100%;
  padding: 19px;
  border-radius: 10px;

  .order-placed-widget-inner {
    background-color: #fff;
    border: 1px solid #d5d9d9;
    border-radius: 10px;
    padding: 26px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 60%;
  }

  .left-top {
    padding-bottom: 10px;
  }

  .line {
    border-bottom: 1px solid #d5d9d9;
    width: 100%;
  }

  .widget-title {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  .widget-title h1 {
    font-size: 18px;
    color: #067d62;
    line-height: 24px;
    margin-left: 5px;
  }

  .deliver-to {
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
  }

  .left-bottom {
    padding-top: 20px;
  }

  .right-ad {
    display: flex;
    flex-direction: column;
  }

  @media ${device.tablet} {
    .left {
      width: 100%;
    }
  }
`;
