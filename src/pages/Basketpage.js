import React from "react";
import * as S from "../assets/styles/index";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import adbanner from "../assets/images/advert-banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, updateQuantity } from "../slices/basketSlice.js";
import { removeFromBasket } from "../slices/basketSlice";
import { getUser } from "../slices/userSlice";
import EmptyBasket from "../components/EmptyBasket";
import BasketItem from "../components/BasketItem";
import MobileSearchBar from "../components/MobileSearchBar";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "react-query";
import * as api from "../api";
import { useHistory, useLocation } from "react-router-dom";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

import { Helmet } from "react-helmet-async";

function Basketpage() {
  const user = useSelector(getUser);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  let history = useHistory();
  let { pathname } = useLocation();

  const { mutate, data, error, isError, isSuccess, isLoading } = useMutation((val) => api.checkoutSession(val));

  const updateQuantityHandler = (id, _quantity) => {
    let quantity;
    typeof _quantity === "string" ? (quantity = 0) : (quantity = _quantity);
    dispatch(updateQuantity({ id, quantity }));
  };

  const removeItemHandler = (id) => {
    dispatch(removeFromBasket(id));
  };

  const combinedItems = items.reduce((acc, curr, index) => {
    const firstIndex = acc.findIndex((item) => item.id === curr.id);

    if (firstIndex === -1) {
      // console.log(`no found item`);
      acc.push({
        mainimg: curr.mainimg,
        title: curr.title,
        id: curr.id,
        price: Number(curr.price),
        quantity: Number(curr.quantity),
      });
    } else {
      // console.log(`merging`);
      if (acc[firstIndex] !== undefined) {
        acc[firstIndex].quantity += Number(curr.quantity);
      }
    }
    return acc;
  }, []);

  const subtotal = combinedItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
  const quantityOfItems = combinedItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const startCheckoutHandler = async () => {
    if (user.isLoggedIn === false) {
      history.push(`/ap/signin?redirectUrl=${pathname}`);
    } else {
      const email = user.email;
      const line_items = Object.assign(combinedItems);

      for (const [k, v] of Object.entries(line_items)) {
        delete line_items[k].mainimg;
        delete line_items[k].title;
        delete line_items[k].price;
      }
      mutate({ line_items, email });
    }
  };

  const createSession = async () => {
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      sessionId: data.id,
    });
  };

  if (isSuccess) {
    createSession();
  }

  if (isError) {
    console.log(error);
  }

  return (
    <>
      <Helmet title="Amazon Shopping Basket" />

      <S.Background>
        <Header />
        <MobileSearchBar />
        <SubHeader />

        <S.Basketpage>
          <div className="adbanner">
            <img src={adbanner} alt="" />
          </div>

          {quantityOfItems === 0 && <EmptyBasket />}

          {items.length >= 1 && (
            <div className="top">
              <div className="shopping-basket">
                <div className="basket-header">
                  <h1>Shopping Basket</h1>
                  <p>Deselect all items</p>

                  <div className="price-title">Price</div>
                </div>

                <div className="item-container">
                  {combinedItems.map((x) => (
                    <BasketItem
                      key={x.id}
                      id={x.id}
                      img={x.mainimg}
                      title={x.title}
                      price={x.price}
                      quantity={x.quantity}
                      updateQuantityHandler={updateQuantityHandler}
                      removeItemHandler={removeItemHandler}
                    />
                  ))}
                </div>

                <div className="subtotal">
                  <p>Subtotal {quantityOfItems > 1 ? `(${quantityOfItems} items):` : `(${quantityOfItems} item): `}</p>
                  <span className="bold">£{subtotal}</span>
                </div>
              </div>

              <div className="checkout-box">
                <p>
                  Subtotal {quantityOfItems > 1 ? `(${quantityOfItems} items):` : `(${quantityOfItems} item): `}
                  <span className="bold">£{subtotal}</span>
                </p>

                <button role="link" onClick={startCheckoutHandler}>
                  <p>Proceed to Checkout</p>
                </button>
              </div>
            </div>
          )}
        </S.Basketpage>
      </S.Background>
    </>
  );
}

export default Basketpage;
