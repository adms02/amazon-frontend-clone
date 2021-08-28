import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getUser } from "../slices/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../slices/userSlice";

function AccountSubMenu({ isShown, setIsShown }) {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const logout = () => {
    console.log("ran logout handler");
    dispatch(logoutHandler());
  };

  return (
    <>
      <S.Backdrop />
      <S.SubMenu onMouseLeave={() => setIsShown(false)}>
        <div className="sub-menu-cont">
          {!user.isLoggedIn && (
            <div className="top">
              <Link to="/ap/signin">
                <button className="sign-in-cta">Sign in</button>
              </Link>
              <p>
                New customer? <Link to="/ap/register">Start here</Link>
              </p>
            </div>
          )}

          <div className="list">
            <div className="left">
              <h3 className="nav-title">Your lists</h3>
              <ul>
                <li>
                  <Link>Find a Gift</Link>
                </li>
                <li>
                  <Link>Create a List</Link>
                </li>
                <li>
                  <Link>Find a List</Link>
                </li>
                <li>
                  <Link>Save Items from the Web</Link>
                </li>
                <li>
                  <Link>Wedding List</Link>
                </li>
                <li>
                  <Link>Baby Wishlist</Link>
                </li>
                <li>
                  <Link>Kids' Wish List</Link>
                </li>
                <li>
                  <Link>Discover Your Style</Link>
                </li>
                <li>
                  <Link>Explore Showroom</Link>
                </li>
              </ul>
            </div>

            <div className="line" />

            <div className="right">
              <h3 className="nav-title">Your Account</h3>

              <ul>
                <li>
                  <Link to="/gp/homepage">Your Account</Link>
                </li>
                <li>
                  <Link to="/gp/orders">Your Orders</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Find a List</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Lists</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Recommendations</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Subscribe & Save Items</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Pets</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Memberships & Subscriptions</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Prime Membership</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Register for a Business Account</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Manage Your Content and Devices</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Kindle Unlimited</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Music Subscriptions</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Music</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Amazon Drive</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Watchlist</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Video Purchases & Rentals</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Games and Software Library</Link>
                </li>
                <li>
                  <Link to="/gp/homepage">Your Apps & Devices</Link>
                </li>
                {user.isLoggedIn && (
                  <li onClick={logout}>
                    <a>Sign out</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </S.SubMenu>
    </>
  );
}

export default AccountSubMenu;

const S = {};

S.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 500;
`;

S.SubMenu = styled.div`
  display: block;
  background: white;
  height: 602px;
  width: 502px;
  position: absolute;
  z-index: 500;
  border-radius: 5px;
  opacity: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  top: 30px;
  right: 120px;
  border: 1px solid #c4c4c4;

  .sub-menu-cont {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 5px 24px 30px 24px;
    cursor: default;
  }

  .top {
    border-bottom: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .top p {
    color: black;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 12px;
  }

  .sign-in-cta {
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
    margin-top: 20px;
    width: 200px;
    height: 32px;
  }

  .nav-title {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .list {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .list ul {
    text-decoration: none;
    list-style-type: none;
  }

  li {
    margin-top: 1px;
  }

  .list a {
    color: #444;
    font-size: 13px;
    word-wrap: break-word;
  }

  .list a:hover {
    color: #e47911;
    text-decoration: underline;
  }

  .line {
    border-left: 1px solid #eeeeee;
  }
`;
