import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Components/Products";
import SignUpPage from "./Pages/SignUpPage";

import Footer from "./Components/footer/Footer";

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
    </>
  );
};

export default App;
