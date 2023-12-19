import React from "react";

import Item from "../Item";

import data from "../../Data/gamming_data.json";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      navigation
    >
      {data.map((product) => (
        <SwiperSlide>
          <Item
            key={product.title}
            title={product.title}
            price={product.price}
            itemImg={product.itemImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
