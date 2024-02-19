import React from "react";
import { Link } from "react-router-dom";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const AboutPage = () => {
  return (
    <div className="px-4 md:py-8 md:mx-navbarMarX my-10">
      <div className="text-sm p-4 mb-10">
        <Link to="/">Home</Link> {<ChevronRightTwoToneIcon />}{" "}
        {location.pathname.slice(1)}
      </div>
      <h1 className="text-3xl font-bold mb-4">About Beyond Retail</h1>
      <p className="text-lg mb-4">
        Beyond Retail is your premier destination for cutting-edge electronics
        and gadgets. With a focus on quality, innovation, and customer
        satisfaction, we strive to bring you the latest technology at affordable
        prices.
      </p>
      <p className="text-lg mb-4">
        Our team of experts carefully selects each product, ensuring that only
        the best and most reliable devices make it to our shelves. Whether
        you're in search of smartphones, laptops, cameras, or gaming
        accessories, Beyond Retail has you covered.
      </p>
      <p className="text-lg mb-4">
        At Beyond Retail, we believe in going beyond the ordinary, providing you
        with an exceptional shopping experience from start to finish. With fast
        shipping, secure payments, and knowledgeable customer support, we make
        it easy for you to find the perfect electronics for your needs.
      </p>
      <p className="text-lg">
        Explore our wide range of products today and discover the future of
        technology with Beyond Retail.
      </p>
      <div className="mt-8 text-center">
        <Link to="/products">
          <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
