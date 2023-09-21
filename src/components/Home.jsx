import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { useId } from "react";
const Home = () => {
  

  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The mobile phone"
            price={11.96}
            rating={5}
            image="data:image/webp;base64,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"
          />
          <Product
            id="2"
            title="Huwawi Laptop"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51AU3uqZUrL._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Headphones, Active Noise Cancelling, Bluetooth"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61nuJiJelML.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
          <Product
            id="4"
            title="Apple AirPods (3rd generation) with Lightning Charging Case, Wireless"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51wJyyfrVXL._AC_SX679_.jpg"
          />
          <Product
            id="5"
            title="AirPods 3 Case Cover with Keychain Full Body Protective"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/610hyDTEZXL._AC_UL160_SR160,160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="UGREEN iPhone 15 Pro Max Clear Case 6.7"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jz46o9tkL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
