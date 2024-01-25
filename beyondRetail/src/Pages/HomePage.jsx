import React from "react";

import NewArrivals from "../Components/NewArrivals";
import Categories from "../Components/Categories";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";
import SpeechAssBtn from "../Components/SpeechAssBtn";

const HomePage = () => {
  return (
    <div>
      <NewArrivals />
      {/* <Categories /> */}
      <BestSelling />
      <DeliveryDetails />
      <SpeechAssBtn />
    </div>
  );
};

export default HomePage;
