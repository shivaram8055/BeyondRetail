import React from "react";

import NewArrivals from "../Components/NewArrivals";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";

const HomePage = () => {
  return (
    <div>
      <NewArrivals />
      {/* <Categories /> */}
      <BestSelling />
      <DeliveryDetails />
      {/* <SpeechAssBtn /> */}
    </div>
  );
};

export default HomePage;
