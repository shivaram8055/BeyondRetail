import React from "react";

import NewArrivals from "../Components/NewArrivals";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";
import SpeechBtn from "../Components/BackendComponents/SpeechBtn";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const redirectToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <NewArrivals />
      <BestSelling />
      <DeliveryDetails />
      <SpeechBtn redirectToCheckout={redirectToCheckout} />
    </div>
  );
};

export default HomePage;
