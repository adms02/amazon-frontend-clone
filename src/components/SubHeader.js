import React, { useState } from "react";
import * as S from "../assets/styles/index";
import burgericon from "../assets/images/burger-icon.svg";

function SubHeader() {
  return (
    <S.SubHeaderContainer>
      <div className="submenu-item">
        <div className="main-menu">
          <img src={burgericon} alt="" />
          <p>All</p>
        </div>
      </div>
      <div className="submenu-item">
        <p>Best Sellers</p>
      </div>
      <div className="submenu-item">
        <p>Gift Ideas</p>
      </div>
      <div className="submenu-item">
        <p>New Releases</p>
      </div>
      <div className="submenu-item">
        <p>Customer Service</p>
      </div>
      <div className="submenu-item">
        <p>Prime</p>
      </div>
      <div className="submenu-item">
        <p>Vouchers</p>
      </div>
      <div className="submenu-item">
        <p>Books</p>
      </div>
      <div className="submenu-item">
        <p>Fashion</p>
      </div>
      <div className="submenu-item">
        <p>Home & Garden</p>
      </div>
      <div className="submenu-item">
        <p>PC & Video Games</p>
      </div>
      <div className="submenu-item">
        <p>PC</p>
      </div>
      <div className="submenu-item">
        <p>Gift Cards & Top Up</p>
      </div>
      <div className="submenu-item">
        <p>Electronics</p>
      </div>
    </S.SubHeaderContainer>
  );
}

export default SubHeader;
