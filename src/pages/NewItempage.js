import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import * as S from "../assets/styles";
import NewItemWidget from "../components/NewItemWidget";
import { useSelector } from "react-redux";
import { selectQuantity, selectSubtotal } from "../slices/basketSlice";
import MobileSearchBar from "../components/MobileSearchBar";
import { Helmet } from "react-helmet-async";

function NewItempage() {
  const lastItem = useSelector((state) => state.basket.items[state.basket.items.length - 1]);
  const quantity = useSelector(selectQuantity);
  const subtotal = useSelector(selectSubtotal).toFixed(2);

  return (
    <>
      <Helmet title="Amazon Shopping Basket" />

      <Header />
      <MobileSearchBar />
      <SubHeader />

      <S.NewItempage>
        <div className="new-item-widget-cont">
          <NewItemWidget image={lastItem?.mainimg} quantity={quantity} subtotal={subtotal} />
        </div>
      </S.NewItempage>
    </>
  );
}

export default NewItempage;
