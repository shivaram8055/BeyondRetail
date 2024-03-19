// ProductPage.jsx
import React from "react";
import ProductDetails from "./ProductDetails";

const ProductsNav = ({ match }) => {
  const { title, price, itemImg } = match.params;
  const decodedTitle = decodeURIComponent(title);
  const decodedPrice = decodeURIComponent(price);
  const decodedItemImg = decodeURIComponent(itemImg);

  const specifications = [
    "Galaxy S23 Ultra's striking symmetrical design returns with one major difference, recycled and eco-conscious materials. From the metal frame to the glass finish, it's polished with fresh new colors inspired by nature.",
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <ProductDetails
        title={decodedTitle}
        price={decodedPrice}
        specifications={specifications}
        image={decodedItemImg}
      />
    </div>
  );
};

export default ProductsNav;
