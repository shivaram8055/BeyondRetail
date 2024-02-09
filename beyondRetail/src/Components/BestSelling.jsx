import React from "react";

import gammingData from "../Data/gamming_data.json";

import { Link } from "react-router-dom";
import Item from "./Item";
import Carousel from "react-multi-carousel";
import HomeCarousel from "./HomeScreenCarousel/HomeCarousel";

const BestSelling = () => {
  const responsiveProp = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container w-fit md:ml-navbarMarX md:pr-navbarPadX">
      <div className="flex flex-col ">
        <div className="flex flex-col md:gap-3 gap-3">
          <div className="flex items-center md:gap-2">
            <div className=" h-5 md:h-7 w-2 bg-teal-300"></div>
            <div className="md:text-base text-xs">This Month</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="md:text-2xl text-base">Best Selling Products</div>
            <div className="md:text-sm text-xs  bg-teal-300 text-teal-900 hover:text-teal-50 hover:bg-teal-400 p-1 md:p-2 rounded">
              <Link to="/products">View All</Link>
            </div>
          </div>
        </div>
        <div className="contAiner snap-x snap-mandatory flex justify-around my-5 flex-col md:flex-row gap-4 ">
          {gammingData.map((product, index) => (
            <Item
              title={product.title}
              price={product.price}
              itemImg={product.itemImg}
              specifications={product.specifications}
              key={index}
            />
          ))}
          {/* <HomeCarousel /> */}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
