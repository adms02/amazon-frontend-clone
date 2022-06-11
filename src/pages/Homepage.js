import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import ProductFeed from "../components/ProductFeed";
import { Background } from "../assets/styles";
import { useQuery } from "react-query";
import * as api from "../api";
import MobileSearchBar from "../components/MobileSearchBar";
import { Helmet } from "react-helmet-async";
import InfoModal from "../components/InfoModal";

function Homepage() {
  const [isOpen, setOpen] = useState(() => {
    if (localStorage.getItem("disclaimer")) {
      return false;
    }
    return true;
  });

  const { data, isLoading, isError, error } = useQuery("getAllProducts", api.getAllProducts, {
    staleTime: 60 * 2000,
  });

  if (isError) {
    return "Something went wrong";
  }

  return (
    <>
      <Helmet title="NotRealAmazon: Low Prices in Electronics, Books, Sports & more" />
      <InfoModal isOpen={isOpen} setOpen={setOpen} />
      <Header />
      <MobileSearchBar />
      <SubHeader />

      <Background>
        <S.Homepage>
          <HeroBanner />
          <ProductFeed products={data} />
        </S.Homepage>
      </Background>
    </>
  );
}

export default Homepage;

const S = {};

S.Homepage = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
