import React from "react";
import * as S from "../../assets/styles/index";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import CardCell from "../../components/private/CardCell";
import AccountShortcuts from "../../components/private/AccountShortcuts";
import MobileSearchBar from "../../components/MobileSearchBar";
import { Helmet } from "react-helmet-async";

function Accountpage() {
  return (
    <>
      <Helmet title="Your Account" />

      <Header />
      <MobileSearchBar />
      <SubHeader />

      <S.Accountpage>
        <div className="title">
          <h1>Your Account</h1>
        </div>

        <div className="cards-row">
          {Object.values(menuItems)
            .splice(0, 3)
            .map((x, i) => (
              <CardCell key={i} icon={x.icon} title={x.title} desc={x.description} link={x.link} />
            ))}
        </div>

        <div className="cards-row">
          {Object.values(menuItems)
            .splice(3, 3)
            .map((x, i) => (
              <CardCell key={i} icon={x.icon} title={x.title} desc={x.description} link={x.link} />
            ))}
        </div>
        <div className="cards-row">
          {Object.values(menuItems)
            .splice(6, 3)
            .map((x, i) => (
              <CardCell key={i} icon={x.icon} title={x.title} desc={x.description} link={x.link} />
            ))}
        </div>

        <div className="spacing">
          <hr />
        </div>

        <AccountShortcuts />
      </S.Accountpage>
    </>
  );
}

export default Accountpage;

const menuItems = {
  orders: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/order._CB660692193_.png",
    title: "Your Orders",
    description: "Track, return, or buy things again",
    link: "/gp/orders",
  },
  login: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/security._CB657827121_.png",
    title: "Login & Security",
    description: "Edit login, name, and mobile number",
    link: "/gp/profile",
  },
  prime: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/prime-ss-modified_Sep4._CB657827121_.png",
    title: "Prime",
    description: "View benefits and payment settings",
    link: "",
  },
  addresses: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/YA_icon_address_01._CB657827121_.png",
    title: "Your Addresses",
    description: "Edit addresses and delivery preferences for orders and gifts",
    link: "",
  },
  payments: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/payment._CB660692193_.png",
    title: "Your payments",
    description: "Manage payment methods and settings, view balances and offers",
    link: "",
  },
  giftcard: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/gift_card._CB659956472_.png",
    title: "Gift Cards & Top Up",
    description: "View balance or redeem a card",
    link: "",
  },
  messagecentre: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/YA_icon_Message_3._CB657827121_.png",
    title: "Message Centre",
    description: "View your Amazon and Marketplace Seller Messages",
    link: "",
  },
  help: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/help/images/gateway/self-service/YA_icon_Help_1._CB657827121_.png",
    title: "Help",
    description: "Browse available help topics",
    link: "",
  },
  amazonmobile: {
    icon: "https://images-na.ssl-images-amazon.com/images/G/02/x-locale/cs/ya/images/amazon_app._CB423622050_.png",
    title: "Amazon Mobile App",
    description: "Download the Amazon App",
    link: "",
  },
};
