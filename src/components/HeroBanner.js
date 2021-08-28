import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import heroimg1 from "../assets/images/1500x600_desktop_hero._CB663787989_.jpg";
import heroimg2 from "../assets/images/GUAK_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB664761625_.jpg";
import heroimg3 from "../assets/images/UK-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB661789484_.jpg";
import styled from "styled-components";

function HeroBanner() {
  return (
    <S.HeroBanner>
      <div className="gradient" />
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
        <div>
          <img src={heroimg1} alt="" />
        </div>

        <div>
          <img src={heroimg2} alt="" />
        </div>

        <div>
          <img src={heroimg3} alt="" />
        </div>
      </Carousel>
    </S.HeroBanner>
  );
}

export default HeroBanner;

const S = {};

S.HeroBanner = styled.div`
  position: relative;

  .gradient {
    position: absolute;
    /* height: 10rem; */
    height: 40%;
    width: 100%;
    bottom: 0;
    z-index: 20;
    bottom: 0;

    /* background-image: linear-gradient(to top, #eaeded, transparent);*/
    background: rgb(234, 237, 237);
    background: linear-gradient(180deg, rgba(234, 237, 237, 0) 0%, rgba(229, 229, 229, 1) 78%);
  }
`;
