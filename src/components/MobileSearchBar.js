import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/images/search_icon.svg";
import { device } from "../assets/styles/breakpoints";

function MobileSearchBar() {
  return (
    <S.MobileSearchBar>
      <div className="search-bar-container">
        <form action="" className="search-bar">
          <div className="search-field">
            <input type="text" placeholder="Search Notrealamazon.co.uk" />

            <div className="nav-right">
              <button type="submit">
                <img src={SearchIcon} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </S.MobileSearchBar>
  );
}

export default MobileSearchBar;

const S = {};

S.MobileSearchBar = styled.div`
  //set display none default

  display: none;

  .search-bar-container {
    display: flex;
    background-color: #232f3e;
  }

  .search-bar {
    display: block;
    padding: 2px 10px 5px 10px;
    position: relative;
    height: 50px;
    /* width: 100%; */
    background: #232f3e;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 0;
    flex: 1;
    z-index: inherit;
  }

  .search-field {
    width: 100%;
    border-radius: 8px 8px 8px 8px;
    height: 44px;
    margin: 0;
    position: relative;
    background: #fff;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 95px 0 10px;
    color: #000;
    font-size: 15px;
    font-family: inherit;
    border: 0;
    outline: 0;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 50%), inset 0 1px 0 0 rgb(0 0 0 / 7%);
    border-radius: 8px 8px 8px 8px;
  }

  .nav-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  button {
    position: relative;
    height: 44px;
    width: 50px;
    border-radius: 8px 8px 8px 8px;

    border: 0;
    background: #fcbb6a;
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
