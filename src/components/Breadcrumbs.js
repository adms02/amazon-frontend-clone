import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import breadcrumbs_arrow_icon from "../assets/images/breadcrumbs_arrow_icon.jpg";

function Breadcrumbs({ breadcrumbs }) {
  return (
    <S.Breadcrumbs>
      {breadcrumbs?.map((x, i) => (
        <div className="breadcrumb-container" key={x.pathName}>
          <NavLinkk exact to={x.link} activeClassName>
            {x.pathName}
          </NavLinkk>

          {i === breadcrumbs.length - 1 ? "" : <img className="arrow-icon" src={breadcrumbs_arrow_icon} alt="" />}
        </div>
      ))}
    </S.Breadcrumbs>
  );
}

export default Breadcrumbs;

const S = {};

S.Breadcrumbs = styled.div`
  display: flex;

  breadcrumb-container a {
    font-size: 14px;
    color: #007185;
  }

  .arrow-icon {
    margin: 0 8px;
  }

  .selected {
    color: red;
  }
`;

const NavLinkk = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #c7511f;
  }
`;
