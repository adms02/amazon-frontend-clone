import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { device } from "../../assets/styles/breakpoints";

function OptionCard({ title, subtitle, link }) {
  const history = useHistory();

  const linkHandler = () => {
    history.push(link);
  };

  return (
    <S.OptionCard>
      <div className="option-content">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="btn-container">
        {link && (
          <button className="retro-btn" onClick={linkHandler}>
            Edit
          </button>
        )}
      </div>
    </S.OptionCard>
  );
}

export default OptionCard;

const S = {};

S.OptionCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 19px 35px 19px;
  border-bottom: 1px solid #dddddd;

  .option-container:last-child {
    border-bottom: none;
  }

  .title {
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
  }

  .subtitle {
    font-size: 13px;
    line-height: 19px;
  }

  .btn-container {
    width: 70px;
  }

  @media ${device.mobileS} {
    flex-direction: column;
  }
`;
