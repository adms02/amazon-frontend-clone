import React, { useState } from "react";
import light_logo from "../assets/images/light_logo.svg";
import SearchIcon from "../assets/images/search_icon.svg";
import DownIcon from "../assets/images/downarrow_icon.svg";
import locationflagicon from "../assets/images/location-flag-icon.svg";
import basketicon from "../assets/images/basket-icon.svg";
import * as S from "../assets/styles/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems, selectQuantity } from "../slices/basketSlice";
import AccountSubMenu from "./AccountSubMenu";
import { getUser } from "../slices/userSlice";
import burgericon from "../assets/images/burger-icon.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const user = useSelector(getUser);
  const quantity = useSelector(selectQuantity);

  return (
    <S.HeaderContainer>
      <div className="nav-left">
        <div className="mobile-menu-icon">
          <img src={burgericon} alt="" />
        </div>

        <div className="logo">
          <Link to="/">
            <img src={light_logo} alt="Nrazon Logo" />
          </Link>
        </div>

        <div className="location-slot">
          <p className="deliver-to">Hello{user.firstname && `, ${user.firstname}`}</p>
          <p className="postcode">Select your address</p>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-bar-form">
          <div className="search-select">
            <p>All</p>
            <img src={DownIcon} alt="" />
          </div>

          <div className="search">
            <input type="text" />
          </div>
          <button type="submit" className="search-btn">
            {" "}
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="nav-right">
        <div className="location-selector">
          <div className="location-flag">
            <img src={locationflagicon} alt="" />
          </div>

          <div className="down-icon">
            <img src={DownIcon} alt="" />
          </div>
        </div>

        <div className="sign-in" onMouseEnter={() => setIsShown(true)} onClick={() => setIsShown(!isShown)}>
          <div className="nav-title">
            <p>Hello, {user.firstname ? user.firstname : "Sign in"}</p>
          </div>

          <div className="nav-subtitle">
            <p>Account & Lists</p>
            <img src={DownIcon} alt="" />
          </div>

          {isShown && <AccountSubMenu isShown={isShown} setIsShown={setIsShown} />}
        </div>

        <Link to="/gp/orders" className="remove-underline">
          <div className="returns-orders">
            <div className="nav-title">
              <p>Returns</p>
            </div>

            <div className="nav-subtitle">
              <p>& Orders</p>
            </div>
          </div>
        </Link>
        <Link to="/basket" className="remove-underline">
          <div className="basket">
            <div className="basket-icon">
              <img src={basketicon} alt="" />
              <div className="number-of-items">
                <p>{quantity}</p>
              </div>
            </div>

            <div className="basket-title">
              <p>Basket</p>
            </div>
          </div>
        </Link>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
