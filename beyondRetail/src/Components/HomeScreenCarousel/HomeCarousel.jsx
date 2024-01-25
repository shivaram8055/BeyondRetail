// HomeCarousel.jsx
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Item from "../Item";
import ProductDetails from "../ProductDetails"; // Import your ProductDetails component
import data from "../../Data/gamming_data.json";

const HomeCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        navigation
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <Item
              key={index}
              title={product.title}
              price={product.price}
              itemImg={product.itemImg}
              onClick={() => handleProductClick(product)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProduct && (
        <div className="overlay-container">
          <div className="overlay-bg" onClick={handleCloseProductDetails}></div>
          <ProductDetails
            title={selectedProduct.title}
            price={selectedProduct.price}
            specifications={selectedProduct.specifications}
            itemImg={selectedProduct.itemImg}
            onClose={handleCloseProductDetails}
          />
        </div>
      )}
    </>
  );
};

export default HomeCarousel;
