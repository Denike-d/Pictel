import React from "react";
import Banner from "../component/banner/Banner";
import Footer from "../component/footer/Footer";
import StockPhotos from "../component/stockPhotos/StockPhotos";

export default function Home() {
  return (
    <div>
      <Banner />
      <StockPhotos />
      <Footer />
    </div>
  );
}
