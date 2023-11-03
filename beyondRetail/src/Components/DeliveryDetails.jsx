import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const DeliveryDetails = () => {
  return (
    <div className="py-16">
      <div className="flex items-baseline justify-around md:px-navbarPadX md:py-20px px-4 py-4">
        <div className="flex flex-col justify-around items-center gap-1 p-2">
          <LocalShippingOutlinedIcon fontSize="large" />
          <h1 className="font-bold md:pt-3 text-12px md:text-xl">
            FREE AND FAST DELHIVERY
          </h1>
          <h6 className="text-10px md:text-sm">
            Free delivery for all orders over $140
          </h6>
        </div>
        <div className="flex flex-col justify-around items-center gap-1 p-2">
          <SupportAgentOutlinedIcon fontSize="large" />
          <h1 className="font-bold md:pt-3 text-12px md:text-xl">
            24/7 SUPPORT
          </h1>
          <h6 className="text-10px md:text-sm">
            Friendly 24/7 customer support
          </h6>
        </div>
        <div className="flex flex-col justify-around items-center gap-1 p-2">
          <CheckOutlinedIcon fontSize="large" />
          <h1 className="font-bold md:pt-3 text-12px md:text-xl">
            MONEY BACK GUARANTEE
          </h1>
          <h6 className="text-10px md:text-sm">
            We reurn money within 30 days
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
