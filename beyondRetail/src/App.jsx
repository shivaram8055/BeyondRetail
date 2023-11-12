import React from "react";
import BestSelling from "./Components/BestSelling";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import SignUpPage from "./Pages/SignUpPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
