import React, { useEffect } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import * as S from "../assets/styles/index";
import { useParams, Redirect } from "react-router";
import "pro-gallery/dist/statics/main.css";
import ProductGallery from "../components/ProductGallery";
import Buybox from "../components/Buybox";
import { useQuery } from "react-query";
import * as api from "../api";
import MobileProductHeader from "../components/MobileProductHeader";
import ReviewsBadge from "../components/ReviewsBadge";
import MobileSearchBar from "../components/MobileSearchBar";
import { Helmet } from "react-helmet-async";

function Productpage() {
  const params = useParams();
  const productId = params.productId;

  const { data, isLoading, isError, error } = useQuery(["product", productId], () => api.getProduct(productId), {
    staleTime: 60 * 2000,
  });

  if (isLoading) {
    return "";
  }

  if (isError) {
    return <Redirect to="/" />;
  }

  if (error) {
    return "Something went wrong";
  }

  let items = [];
  let rating = 0;

  if (data) {
    items = [
      ...Object.values(data.images).map((x) => {
        return {
          original: `${x}`,
          thumbnail: `${x}`,
        };
      }),
    ];
    rating = Number(data.rating);
  }

  return (
    <>
      <Helmet title={data && data.title} />

      <Header />
      <MobileSearchBar />
      <SubHeader />

      <S.Productpage>
        <div className="product-main">
          <MobileProductHeader title={data.title} rating={rating} reviews={data.reviews} />

          {data && <ProductGallery items={items} />}

          <div className="information">
            <div className="top-information">
              <div className="title">
                <p>{data.title}</p>
              </div>
              <div className="visit-store">
                <p>Visit the Store</p>
              </div>

              <ReviewsBadge rating={rating} reviews={data?.reviews} />

              <hr />
            </div>

            <div className="middle-information">
              <div className="pricing">
                <div className="price-title">
                  <p>Price:</p>
                </div>
                <div className="price">
                  <p>£{data.price}</p>
                </div>
              </div>

              <div className="notice">
                <p>
                  <span>Note: </span>This item is eligible for FREE Click and Collect without a minimum order subject to
                  availability.
                </p>
              </div>

              <div className="product-table">
                <table className="a-spacing-micro">
                  <tbody>
                    {data.table &&
                      Object.entries(data.table).map((x, i) => (
                        <tr className="a-spacing-small" key={i}>
                          <td className="table-title">
                            <span>{x[0]}</span>
                          </td>

                          <td className="table-value">
                            <span>{x[1]}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <hr />

            <div className="bottom-information">
              <div className="summary-title">About this item</div>

              <ul className="summary-list">
                {Object.values(data.bullet_points).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <Buybox
            mainimg={data.images.id1}
            id={data.id}
            title={data.title}
            price={data.price}
            category={data.category_id}
            quantity={data.quantity}
          />
        </div>
      </S.Productpage>
    </>
  );
}

export default Productpage;
