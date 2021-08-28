import { createGlobalStyle, css } from "styled-components";
import AmazonEmberDisplay_W_BdEOT from "../fonts/AmazonEmberDisplay_W_Bd.eot";
import AmazonEmberDisplay_W_BdWOFF from "../fonts/AmazonEmberDisplay_W_Bd.woff";
import AmazonEmberDisplay_W_BdWOFF2 from "../fonts/AmazonEmberDisplay_W_Bd.woff2";
import AmazonEmberDisplay_W_HeEOT from "../fonts/AmazonEmberDisplay_W_He.eot";
import AmazonEmberDisplay_W_HeWOFF from "../fonts/AmazonEmberDisplay_W_Bd.woff";
import AmazonEmberDisplay_W_HeWOFF2 from "../fonts/AmazonEmberDisplay_W_He.woff2";
import AmazonEmberDisplay_W_LtEOT from "../fonts/AmazonEmberDisplay_W_Lt.eot";
import AmazonEmberDisplay_W_LtWoff from "../fonts/AmazonEmberDisplay_W_Lt.woff";
import AmazonEmberDisplay_W_LtWoff2 from "../fonts/AmazonEmberDisplay_W_Lt.woff2";
import AmazonEmberDisplay_W_MdEot from "../fonts/AmazonEmberDisplay_W_Md.eot";
import AmazonEmberDisplay_W_MdWoff from "../fonts/AmazonEmberDisplay_W_Md.woff";
import AmazonEmberDisplay_W_MdWoff2 from "../fonts/AmazonEmberDisplay_W_Md.woff2";
import AmazonEmberDisplay_W_RgEot from "../fonts/AmazonEmberDisplay_W_Rg.eot";
import AmazonEmberDisplay_W_RgWoff from "../fonts/AmazonEmberDisplay_W_Rg.woff";
import AmazonEmberDisplay_W_RgWoff2 from "../fonts/AmazonEmberDisplay_W_Rg.woff2";

const imageGalleryCss = css`
  ${import("react-image-gallery/styles/css/image-gallery.css")}
`;

const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }


    body{
        
        font-family: 'Amazon Ember', Arial, sans-serif;
        color: #0f1111;

    }

    @font-face {
        font-family: 'Amazon Ember';
        src: local('Amazon Ember'), local('Amazon Ember'),
        url(${AmazonEmberDisplay_W_HeEOT}) format('eot'),
        url(${AmazonEmberDisplay_W_HeWOFF}) format('woff'),
        url(${AmazonEmberDisplay_W_HeWOFF2}) format('woff');
        font-weight: 800;
        font-style: normal;
    }


    @font-face {
        font-family: 'Amazon Ember';
        src: local('Amazon Ember'), local('Amazon Ember'),
        url(${AmazonEmberDisplay_W_BdEOT}) format('eot'),
        url(${AmazonEmberDisplay_W_BdWOFF}) format('woff'),
        url(${AmazonEmberDisplay_W_BdWOFF2}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Amazon Ember';
        src: local('Amazon Ember'), local('Amazon Ember'),
        url(${AmazonEmberDisplay_W_MdEot}) format('eot'),
        url(${AmazonEmberDisplay_W_MdWoff}) format('woff'),
        url(${AmazonEmberDisplay_W_MdWoff2}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Amazon Ember';
        src: local('Amazon Ember'), local('Amazon Ember'),
        url(${AmazonEmberDisplay_W_RgEot}) format('eot'),
        url(${AmazonEmberDisplay_W_RgWoff}) format('woff'),
        url(${AmazonEmberDisplay_W_RgWoff2}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
 
   
    @font-face {
        font-family: 'Amazon Ember';
        src: local('Amazon Ember'), local('Amazon Ember'),
        url(${AmazonEmberDisplay_W_LtEOT}) format('eot'),
        url(${AmazonEmberDisplay_W_LtWoff}) format('woff'),
        url(${AmazonEmberDisplay_W_LtWoff2}) format('woff');
        font-weight: 200;
        font-style: normal;
    }

   

    h1{
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 21px;
        /* line-height: 27px; */
    }

    p{
        margin:0;
        padding:0;
        font-size: 14px;
        /* line-height: 19px; */
        color: #0f1111;
    }

    a, a:link, a:visited {
    text-decoration: none;
    color: #0066c0;
    line-height: 19px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    }

    a:hover{
        color: #C7511f;
    text-decoration: underline;

    }

    .link{
      color: #0066c0;
    }

    .bold{
      font-weight: 700;
    }


    .formErrors {
    margin-top: 3px;
    font-size: 12px;
    color: #c40000;
    display: flex;
    align-items: center;
  }

  .formErrors img {
    height: 14px;
    object-fit: contain;
    margin-right: 4px;
  }

  .retro-input-error{
    border-color: #d00 !important;
    box-shadow: 0 0 0 3px rgb(221 0 0 / 10%) inset !important;
  }

  .retro-input{
    background-color: #fff;
    height: 31px;
    padding: 3px 7px;
    line-height: normal;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
    outline: 0;
  }


  .retro-input:focus{
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgb(288, 121, 17, 50%);
  }

  .retro-label{
    display: block;
    padding-left: 2px;
    padding-bottom: 2px;
    font-weight: 700;
    font-size: 13px;
    margin-top: 10px;
  }

  .retro-btn{
  border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;
    margin-top: 20px;
    font-size: 13px;
    line-height: 29px;
    padding: 0 10px 0 11px;
    text-align: center;
    color: black;
    width: 100%;
  }

  .retro-btn-orange{
    border-color: #a88734 #9c7e31 #846a29;
    background: #f3d078;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  }

  .retro-btn:active{
    box-shadow: 0 0 3px 2px rgb(288, 121, 17, 50%);
  }

 
  .flat-btn{

    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    background: #FFD814;
    border-color: #FCD200;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;
    font-size: 13px;
    line-height: 29px;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
  
 
  }

  .flat-btn:hover{
    background: #F7CA00;
    border-color: #F2C200;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }


    ${imageGalleryCss};


 
  






`;

export default GlobalStyle;

// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
// https://scalablecss.com/setup-custom-fonts-with-font-face/
