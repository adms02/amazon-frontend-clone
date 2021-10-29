import ReactModal from "react-modal";
import React, { useEffect } from "react";
import styled from "styled-components";
import close_icon from "../assets/images/pop-up-close.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    maxWidth: "610px",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    padding: "0px 18px 0px 0px",
    fontWeight: "500",
    zIndex: "500",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    zIndex: "500",
  },
};

function InfoModal({ isOpen, setOpen }) {
  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const acceptDisclaimerHandler = () => {
    localStorage.setItem("disclaimer", "true");
    setOpen(!isOpen);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClick}
      contentLabel="Modal Here"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <S.PopupContent>
        <div className="popClose" onClick={handleClick} />

        <div className="content">
          <h1>Disclaimer</h1>

          <div className="line" />

          <div className="block">
            This website is a personal project called "Not Real Amazon", designed to replicate the frontend buying experience.
          </div>
          <div className="block">This website is not affiliated with Amazon and is only for showcase purposes.</div>

          <button className="flat-btn" onClick={acceptDisclaimerHandler}>
            I understand the disclaimer
          </button>
        </div>
      </S.PopupContent>
    </ReactModal>
  );
}

export default InfoModal;

const S = {};

S.PopupContent = styled.div`
  .popClose {
    float: right;
    height: 15px;
    width: 15px;
    background-repeat: no-repeat;
    content: "";
    cursor: pointer;
    margin-top: 21px;
    background-image: url(${close_icon});
  }

  p {
    font-family: "Noto Serif", Arial;
    font-size: 16px;
  }
  h1 {
    width: 100%;
    font-family: "Montserrat", Arial;
    font-size: 28px;
    font-weight: 800;
  }
  h2 {
    width: 100%;
    font-family: "Montserrat", Arial;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 5px;
  }

  .line {
    border-bottom: 0.5px solid #d9d9d9;
    margin: 20px 0;
  }

  .content {
    padding: 40px 0px 40px 40px;

    .summary {
      max-width: 85%;
      margin-top: 15px;
    }

    .block {
      margin: 30px 0;
    }

    ul {
      margin-left: 20px;
    }

    .block-subtitle {
      margin-top: 12px;
      font-weight: 700;
    }
  }

  .live-btn {
    margin-right: 10px;
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  button {
    width: 100%;
    height: 40px;
  }
`;
