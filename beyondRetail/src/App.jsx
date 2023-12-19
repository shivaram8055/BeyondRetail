import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Components/Products";
import SignUpPage from "./Pages/SignUpPage";

import Footer from "./Components/footer/Footer";
import Carousel from "./Components/HomeScreenCarousel/HomeCarousel";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<ProductPage />} />
          <Route path="signUp" element={<SignUpPage />} />
          <Route path="products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>

      {/* <div className="min-h-screen w-screen flex justify-center items-center">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </div> */}
    </>
  );
};

export default App;
