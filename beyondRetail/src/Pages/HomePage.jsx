import React from "react";

import NewArrivals from "../Components/NewArrivals";
import Categories from "../Components/Categories";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";

const HomePage = () => {
  return (
    <div>
      <NewArrivals />
      <Categories />
      <BestSelling />
      <DeliveryDetails />
    </div>
  );
};

export default HomePage;
