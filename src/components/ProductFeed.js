import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

function ProductFeed({ products }) {
  return (
    <S.ProductFeed>
      {products?.slice(0, 4).map((x) => (
        <ProductCard key={x.id} id={x.id} title={x.title} price={x.price} images={x.images} rating={x.rating} />
      ))}
    </S.ProductFeed>
  );
}

export default ProductFeed;

const S = {};

S.ProductFeed = styled.div`
  display: flex;
  margin: 0 10px;
  margin-top: -18%;
  flex-wrap: wrap;
  justify-content: center;
`;
