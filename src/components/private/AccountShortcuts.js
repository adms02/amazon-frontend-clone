import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../assets/styles/breakpoints";

function AccountShortcuts() {
  return (
    <S.AccountShortcuts>
      <div className="big-cards-row">
        <div className="big-card">
          <h2>Digital content and devices</h2>

          <ul>
            <li>
              <Link>Amazon Drive</Link>
            </li>
            <li>
              <Link>Apps and more</Link>
            </li>
            <li>
              <Link>Audible settings</Link>
            </li>
            <li>
              <Link>Content and devices</Link>
            </li>
            <li>
              <Link>Video settings</Link>
            </li>
            <li>
              <Link>Digital and device forum</Link>
            </li>
          </ul>
        </div>

        <div className="big-card">
          <h2>Email alerts, messages, ads and cookies</h2>

          <ul>
            <li>
              <Link>Cookie preferences</Link>
            </li>
            <li>
              <Link>Advertising preferences</Link>
            </li>
            <li>
              <Link>Communication preferences</Link>
            </li>
            <li>
              <Link>Message centre</Link>
            </li>
            <li>
              <Link>Alexa shopping notifications</Link>
            </li>
            <li>
              <Link>Deals Notifications</Link>
            </li>
          </ul>
        </div>

        <div className="big-card">
          <h2> More ways to pay</h2>

          <ul>
            <li>
              <Link>Your purchase preferences</Link>
            </li>
            <li>
              <Link>Amazon money store</Link>
            </li>
            <li>
              <Link>Amazon Pay</Link>
            </li>
            <li>
              <Link>Amazon Coins</Link>
            </li>
            <li>
              <Link>Coupons</Link>
            </li>
            <li>
              <Link>Shop with Points</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="big-cards-row">
        <div className="big-card">
          <h2>Ordering and shopping preferences</h2>

          <ul>
            <li>
              <Link>Your transactions</Link>
            </li>
            <li>
              <Link>Amazon currency converter</Link>
            </li>
            <li>
              <Link>Change Currency Settings</Link>
            </li>
            <li>
              <Link>Archived Orders</Link>
            </li>
            <li>
              <Link>Lists</Link>
            </li>
            <li>
              <Link>Manage saved IDs</Link>
            </li>
            <li>
              <Link> Profile VAT registration number</Link>
            </li>
          </ul>
        </div>

        <div className="big-card">
          <h2>Other accounts</h2>

          <ul>
            <li>
              <Link>Account linking</Link>
            </li>
            <li>
              <Link>Amazon Business registration</Link>
            </li>
            <li>
              <Link>Sell on Amazon</Link>
            </li>
            <li>
              <Link>Amazon Web Services</Link>
            </li>
            <li>
              <Link>Audible membership</Link>
            </li>
            <li>
              <Link>Login with Amazon</Link>
            </li>
            <li>
              <Link>Twitch account settings</Link>
            </li>
          </ul>
        </div>

        <div className="big-card">
          <h2>Shopping programmes</h2>

          <ul>
            <li>
              <Link>Manage your profiles</Link>
            </li>
            <li>
              <Link>Amazon Business registration</Link>
            </li>
            <li>
              <Link>Amazon Household</Link>
            </li>
            <li>
              <Link>Your virtual Dash Buttons</Link>
            </li>
            <li>
              <Link>Subscribe & Save</Link>
            </li>
            <li>
              <Link>Manage Amazon Family Settings</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="big-cards-row">
        <div className="big-card">
          <h2>Memberships and subscriptions</h2>

          <ul>
            <li>
              <Link>Email</Link>
            </li>
            <li>
              <Link>Prime Video Channels</Link>
            </li>
            <li>
              <Link>Memberships & Subscriptions</Link>
            </li>
          </ul>
        </div>
      </div>
    </S.AccountShortcuts>
  );
}

export default AccountShortcuts;

const S = {};

S.AccountShortcuts = styled.div`
  .big-cards-row {
    display: flex;
    margin-top: 20px;
  }

  .big-card {
    padding: 14px 18px;
    border-radius: 8px;
    border: 1px #d5d9d9 solid;
    width: 320px;
  }

  .big-card:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }

  .big-card h2 {
    font-size: 17px;
    line-height: 32px;
    margin-bottom: 5px;
  }

  li {
    list-style: none;
    word-wrap: break-word;
    margin-bottom: 7px;
  }

  a {
    font-size: 14px;
    line-height: 20px;
    color: #007185;
  }

  a:hover {
    color: #c7511f;
    text-decoration: underline;
  }

  @media ${device.laptop} {
    .big-cards-row {
      flex-direction: column;
    }

    .big-card {
      width: 100%;
      margin-bottom: 20px;
    }

    .big-card:nth-child(2) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
