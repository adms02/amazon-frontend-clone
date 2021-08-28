import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../assets/styles/breakpoints";

function AuthFooter() {
  return (
    <S.AuthFooter>
      <div className="divider-inner" />

      <div className="footer-list">
        <div className="item">
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=1040616">
            <p>Conditions of Use</p>
          </a>
        </div>
        <div className="item">
          <a href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=502584">
            <p>Privacy Notice</p>
          </a>
        </div>
        <div className="item">
          <a href="">
            <p>Help</p>
          </a>
        </div>
        <div className="item">
          <a href="">
            <p>Cookies Notice</p>
          </a>
        </div>
        <div className="item">
          <a href="">
            <p>Interest-Based Ads Notice</p>
          </a>
        </div>
      </div>

      <div className="copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</div>
    </S.AuthFooter>
  );
}

export default AuthFooter;

const S = {};

S.AuthFooter = styled.div`
  margin-top: 30px;
  width: 100%;

  .divider-inner {
    height: 44px;
    margin-bottom: -18px;
    background: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.03) 3px, transparent);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.03) 3px, transparent);
    z-index: 0;
    zoom: 1;
  }

  .divider-inner::after {
    display: block;
    width: 100%;
    height: 44px;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
    z-index: 1;
    content: "";
  }

  .footer-list {
    display: flex;
    justify-content: center;
  }

  .footer-list p {
    color: #0066c0;
    line-height: 16px;
    font-size: 11px;
  }

  .item {
    margin-right: 26px;
  }

  .copyright {
    font-size: 11px;
    line-height: 16px;
    color: #555555;
    text-align: center;
    margin-top: 16px;
  }

  @media ${device.tablet} {
    .item {
      display: none;
    }
  }
`;
