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
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Basketpage() {
  const { mutate, data, isSuccess } = useMutation((val) => api.checkoutSession(val));

  const user = useSelector(getUser);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  let history = useHistory();
  let { pathname } = useLocation();

  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
  const quantityOfItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const updateQuantityHandler = (id, _quantity = 0) => {
    dispatch(updateQuantity({ id, _quantity }));
  };

  const removeItemHandler = (id) => {
    dispatch(removeFromBasket(id));
  };

  const startCheckoutHandler = async () => {
    if (user.isLoggedIn === false) {
      history.push(`/ap/signin?redirectUrl=${pathname}`);
    } else {
      const email = user.email;
      mutate({ items, email });
    }
  };

  const createSession = async () => {
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  if (isSuccess) createSession();

  return (
    <>
      <Helmet title="NotRealAmazon Shopping Basket" />

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
                  {items.map((x) => (
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
