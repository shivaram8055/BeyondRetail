import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer/Footer";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const AboutPage = () => {
  return (
    <div>
      <div className="text-sm px-navbarPadX pt-10 ">
        Home {<ChevronRightTwoToneIcon />} {location.pathname.slice(1)}
      </div>
    </div>
  );
};

export default AboutPage;
