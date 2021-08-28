import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.black};
  height: 60px;
  align-items: center;
  justify-content: space-between;

  /**
  * //*Nav Left
  */
  .nav-left {
    display: flex;
    position: static;
    align-items: center;
    /* width: 100%; */
  }

  .mobile-menu-icon {
    margin-left: 15px;
    display: none;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .logo {
    padding: 7px 8px 0px 6px;
    margin-left: 19px;
    border: 1px solid transparent;
    height: 40px;
  }
  .logo img {
    object-fit: contain;
    height: 32px;
    cursor: pointer;
  }
  .logo:hover {
    border-color: white;
    border-radius: 2px;
  }

  .location-slot {
    margin-left: 2px;
    padding: 0px 9px;
    /* height: 45px; */
    /* margin: 5px 2px 5px 0; */
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 148px;
  }

  .deliver-to {
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.lightgray};
  }

  .postcode {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    color: ${(props) => props.theme.colors.white};
  }

  /**
  * //*Nav Center
  */

  .nav-center {
    display: flex;
    width: 100%;
    margin: 0 18px;
  }

  .search-bar-form {
    display: flex;
    width: 100%;
    /* border: 1px solid transparent; */
    border-radius: 5px;
  }

  .search-bar-form:focus-within,
  .search-bar-form:active {
    box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgb(225 153 0 / 50%);
  }

  .search-select {
    width: 100%;
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }

  .search-select p {
    color: #555555;
    margin-right: 8px;
    font-size: 11px;
  }

  .search {
    background-color: white;
    width: 100%;
  }

  .search input {
    width: 100%;
    line-height: 15px;
    padding: 7px 10px 10px 0;
    margin: 0;
    border: 0;
    height: 38px;
    font-family: inherit;
    font-size: 15px;
    background: 0 0;
    color: #0f1111;
    outline: 0;
    -webkit-appearance: none;
    box-shadow: none;
    text-indent: 8px;
    direction: ltr;
  }

  .search-btn {
    max-width: 100%;
    background-color: #febd69;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
  }

  .search-btn img {
    height: 19px;
    object-fit: contain;
  }

  /**
  * //*Nav Right
  */

  .nav-right {
    display: flex;
  }

  .location-selector {
    cursor: pointer;
    height: 40px;
    display: flex;
    border: 1px solid transparent;
    padding: 0 7px;
    align-items: center;
  }

  .basket:hover,
  .returns-orders:hover,
  .location-slot:hover,
  .location-selector:hover,
  .sign-in:hover {
    border-color: white;
    border-radius: 2px;
  }

  .location-flag {
    margin-right: 5px;
  }

  .location-flag img {
    height: 18px;
    object-fit: contain;
  }

  .sign-in {
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    white-space: nowrap;
  }

  .nav-title p {
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};
  }
  .nav-subtitle {
    display: flex;
  }

  .nav-subtitle p {
    margin-right: 5px;
    line-height: 12px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
  }

  .nav-title {
    position: relative;
  }

  .returns-orders {
    margin-left: 6px;
    height: 40px;
    border: 1px solid transparent;
    padding: 0 9px 10px;
    cursor: pointer;
    white-space: nowrap;
  }

  .basket {
    height: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0 9px 0px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .basket-icon {
    position: relative;
    display: flex;
    align-items: flex-end;
    display: flex;
    padding-bottom: 1px;
  }

  .number-of-items {
    position: absolute;
    left: 18px;
    bottom: 16px;
    /* top: 6px; */
    justify-content: center;
  }

  .number-of-items p {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #f08804;
  }

  .basket-icon img {
    object-fit: contain;
    height: 27px;
  }

  .basket-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .basket-title p {
    font-size: 14px;
    line-height: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
  }

  .remove-underline {
    text-decoration: none;
  }

  @media ${device.laptop} {
    .basket-title p {
      display: none;
    }
  }

  @media ${device.tablet} {
    .location-slot,
    .nav-center,
    .search-bar-form,
    .location-selector,
    .sign-in,
    .returns-orders {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
    }
  }

  @media ${device.mobileS} {
    .logo img {
      width: 80%;
    }
  }
`;

// https://medium.com/inturn-eng/naming-styled-components-d7097950a245

export const SubHeaderContainer = styled.div`
  background-color: #232f3e;
  /* height: 39px; */
  display: flex;
  justify-content: flex-start;
  padding-left: 19px;
  flex-wrap: wrap;
  height: 40px;
  overflow: hidden;

  .submenu-item {
    border: 1px solid transparent;
    cursor: pointer;
    text-align: center;
    margin: 5px 0px 5px;
    padding: 5px 12px;
    min-width: fit-content;
  }

  .submenu-item p {
    color: ${(props) => props.theme.colors.white};
  }

  .submenu-item:hover {
    border-color: white;
    border-radius: 2px;
  }

  .main-menu {
    display: flex;
  }

  .main-menu p {
    margin-left: 6px;
  }

  @media ${device.tablet} {
    .submenu-item:first-child {
      display: none;
    }

    .submenu-item p {
      font-size: 13px;
    }
  }
`;

/**
 * //*Product page
 */

export const Productpage = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  .image-gallery {
    /* width: 50%; */
  }

  .product-main {
    display: flex;
    margin-top: 70px;
    justify-content: center;
    margin-right: 20px;
  }

  .information {
    margin-left: 22px;
    max-width: 513.25px;
    min-width: 220px;
  }

  .title p {
    font-size: 19px;
    color: #0f1111;
    line-height: 32px;
  }

  .visit-store p {
    font-size: 14px;
    font-weight: 400;
    color: #007185;
    line-height: 20px;
    cursor: pointer;
    width: fit-content;
  }

  .store-link {
    font-size: 14px;
    font-weight: 400;
    color: #007185;
    line-height: 20px;
  }

  .delivery-location p:hover,
  .visit-store p:hover,
  .highlight:hover {
    color: #c7511f;
    text-decoration: underline;
    cursor: pointer;
  }

  hr {
    background-color: transparent;
    display: block;
    height: 1px;
    border-width: 0;
    border-top: 1px solid #e7e7e7;
    line-height: 19px;
    margin-top: 0;
    margin-bottom: 14px;
  }

  .pricing {
    display: flex;
    align-items: center;
  }

  .price-title p {
    color: #565959;
    font-size: 14px;
    font-weight: 400;
  }

  .price p {
    font-size: 18px;
    color: #b12704;
    line-height: 24px;
    font-weight: 400;
    margin-left: 5px;
  }

  .notice {
    margin-top: 12px;
  }

  .notice span {
    font-weight: 700;
  }
  .notice p {
    color: #0f1111;
    line-height: 20px;
  }

  .a-spacing-micro {
    margin-bottom: 4px;
  }

  .a-spacing-small {
    margin-bottom: 8px;
  }

  .product-table {
    margin-top: 8px;
  }

  .table-title {
    width: 26%;
  }

  .table-title span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }

  .table-value {
    width: 74%;
  }

  .table-value span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  table {
    margin-bottom: 18px;
    border-collapse: collapse;
    width: 100%;
    text-indent: initial;
    border-spacing: 2px;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  .summary-title {
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;
  }
  .summary-list {
    padding-left: 20px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
  }

  @media ${device.laptop} {
    .product-main {
      flex-direction: column;
      margin-top: 25px;
    }

    .top-information,
    .reviews {
      display: none;
    }

    .information {
      max-width: 100%;
    }
  }
`;

export const Background = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
`;

/**
 * //*Basket page
 */

export const Basketpage = styled.div`
  /* max-width: 1500px;
  margin: 0 auto; */

  .adbanner {
    margin-top: 14px;
    margin-bottom: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 20%;
    padding: 0 20px;
  }

  .adbanner img {
    max-width: 100%;
    height: auto;
  }

  .top {
    display: flex;
    margin: 40px 20px;
    justify-content: space-between;
    max-width: 100%;
  }

  .shopping-basket {
    /* margin-top: 50px; */
    background-color: white;
    padding: 20px 20px 40px 20px;
    width: 100%;
  }

  .basket-header {
    border-bottom: 1px solid #ddd;
  }

  .basket-header h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
  }

  .basket-header p {
    color: black;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }

  .checkout-box {
    margin-bottom: 20px;
    background-color: white;
    overflow: auto;
    padding: 20px 20px 15px 20px;
    margin-left: 20px;
    width: 20%;
    height: 212px;
    margin-top: -90px;
  }

  .price-title {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: #565959;
    line-height: 20px;
  }

  .subtotal {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .subtotal p {
    font-size: 18px;
    font-weight: 400;
    color: black;
    margin-right: 5px;
  }

  .bold {
    font-weight: 700;
  }

  .checkout-box p {
    font-size: 18px;
    line-height: 24px;
    color: #0f1111;
    margin-bottom: 19px;
  }

  .checkout-box button {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    background: #ffd814;
    border-color: #fcd200;
    height: 31px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    display: inline-block;
    white-space: nowrap;
  }

  .checkout-box button p {
    font-size: 13px;
    color: #0f1111;
    line-height: 29px;
  }

  @media ${device.laptop} {
    .top {
      flex-direction: column-reverse;
    }

    .adbanner {
      display: none;
    }

    .checkout-box {
      margin: 0;
      width: 100%;
      height: fit-content;
      overflow: hidden;
    }

    .shopping-basket {
      margin-top: 10px;
    }
  }

  @media ${device.tablet} {
    .price-title {
      display: none;
    }
  }
`;

/**
 * //*NewItempage
 */

export const NewItempage = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  .new-item-widget-cont {
    margin-top: 26px;
  }
`;

/**
 * //*Account page (private)
 */
export const Accountpage = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .title {
    margin-top: 20px;
  }

  .title h1 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
  }

  .cards-row {
    display: flex;
    margin-top: 20px;
  }

  .spacing {
    margin: 32px 0;
  }

  hr {
    background-color: transparent;
    display: block;
    height: 1px;
    border-width: 0;
    border-top: 1px solid #e7e7e7;
    line-height: 19px;
  }

  @media ${device.laptop} {
    margin-left: 20px;
    margin-right: 20px;

    .cards-row {
      flex-direction: column;
    }
  }
`;

/**
 * //*Orders page (private)
 */
export const Orderspage = styled.div`
  max-width: 917px;
  margin: 0 auto;

  .orders-header {
    margin-top: 13px;
    margin-bottom: 60px;
  }

  .orders-header h1 {
    margin-top: 27px;
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
  }

  .line {
    border-bottom: 1px solid #dddddd;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
  }

  @media ${device.laptop} {
    padding: 0 20px;
  }
`;

/**
 * //*Update Profile page
 * Login and Security
 */

export const UpdateProfilepage = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;

  .profile-header {
    margin-top: 13px;
    margin-bottom: 15px;
  }

  .profile-header h1 {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
  }
  .options-container {
    border: 1px solid #dddddd;
    border-radius: 5px;
  }

  .profile-btn-container {
    width: 54px;
  }

  .breadcrumbs-spacing {
    margin-bottom: 10px;
  }
`;
