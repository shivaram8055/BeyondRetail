import React from "react";
import NavBar from "../Components/NavBar";
import NewArrivals from "../Components/NewArrivals";
import Categories from "../Components/Categories";
import BestSelling from "../Components/BestSelling";
import DeliveryDetails from "../Components/DeliveryDetails";
import Footer from "../Components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <NewArrivals />
      <Categories />
      <BestSelling />
      <DeliveryDetails />
      <Footer />
    </div>
  );
};

export default HomePage;
