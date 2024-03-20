import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Components/Products";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";

import Footer from "./Components/footer/Footer";

import { Provider } from "react-redux";
import Store from "./Redux/Store";
import CheckOut from "./Pages/Checkout";
import SpeechBtn from "./Components/BackendComponents/SpeechBtn";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <NavBar />
          {/* <SpeechBtn /> */}
          <Routes>
            <Route path="/" element={<SpeechBtn />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="/signin" element={<SignUpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>

      {/* <div className="min-h-screen w-screen flex justify-center items-center">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </div> */}
      {/* <ProductDetails /> */}
    </>
  );
};

export default App;
