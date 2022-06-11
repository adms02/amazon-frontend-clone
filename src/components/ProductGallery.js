import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import { device } from "../assets/styles/breakpoints";

const properties = {
  thumbnailPosition: "bottom",
  useBrowserFullscreen: false,
  showPlayButton: false,
  autoPlay: false,
  showNav: false,
  showFullscreenButton: false,
  lazyLoad: true,
};

function ProductGallery({ items }) {
  return (
    <S.ProductGallery>
      <ImageGallery {...properties} items={items} thumbnailClass={S.Thumbnail} />
    </S.ProductGallery>
  );
}

export default ProductGallery;

const S = {};

S.ProductGallery = styled.div`
  max-width: 650px;
  width: 100%;

  .image-gallery-content:not(.fullscreen) .image-gallery-slide div {
    width: 100%;
    height: 0;
    padding-top: 79%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    height: 40px;
    width: 40px;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 1px solid #e77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
  }

  @media ${device.laptop} {
    padding: 0 20px;
    margin-bottom: 20px;
  }
`;
