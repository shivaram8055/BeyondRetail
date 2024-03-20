import React from "react";

import NewArrivals from "../Components/NewArrivals";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";

import Categories from "../Components/Categories";

const HomePage = () => {
  return (
    <div>
      <NewArrivals />
      <BestSelling />
      <DeliveryDetails />
    </div>
  );
};

export default HomePage;
