import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer/Footer";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="text-sm px-navbarPadX pt-10 ">
        Home {<ChevronRightTwoToneIcon />} {location.pathname.slice(1)}
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;