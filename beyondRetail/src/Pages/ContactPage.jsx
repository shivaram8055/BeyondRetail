import React from "react";
import { Link } from "react-router-dom";

import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

const ContactPage = () => {
  return (
    <div>
      <div className="text-sm md:px-navbarPadX pt-10 ml-10 md:ml-0">
        <Link to="/">Home</Link> {<ChevronRightTwoToneIcon />}{" "}
        {location.pathname.slice(1)}
      </div>
      <div className="md:px-navbarPadX flex justif-around p-10 gap-2 flex-col-reverse md:flex-row">
        <div className="details border shadow-sm flex flex-col justify-around">
          <div className="call-us p-8 flex flex-col gap-4">
            <div className="title flex gap-2 ">
              <div className="div">{<PhoneInTalkRoundedIcon />}</div>
              <div className="text-teal-700">Call To Us</div>
            </div>
            <div className="info flex flex-col gap-2 text-sm">
              <h1>We are available 24/7 days a week</h1>
              <h1>Phone: +8801611112222</h1>
            </div>
          </div>
          <div className="write-us p-8 flex flex-col gap-4 flex-wrap">
            <div className="title flex gap-2">
              <div className="">{<MailOutlineTwoToneIcon />}</div>
              <div className="text-lg text-teal-700">Write To Us</div>
            </div>
            <div className="info flex flex-col gap-2 text-sm">
              <h1>
                Fill out our form and we will contact you within 24 hours.
              </h1>
              <h1>Emails: customer@exclusive.com support@exclusive.com</h1>
            </div>
          </div>
        </div>
        <div className="user-input border p-10 shadow-sm flex flex-col gap-2 w-fit flex-wrap">
          <div className="user-details flex gap-2 flex-wrap md:flex-nowrap">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-100 placeholder:text-sm p-3 md:w-1/3 w-full"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="bg-gray-100 placeholder:text-sm p-3 md:w-1/3 w-full"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-gray-100 placeholder:text-sm p-3 md:w-1/3 w-full"
            />
          </div>
          <div className="message">
            <textarea
              type="text"
              placeholder="Your Message"
              className="h-32 w-full bg-gray-100 placeholder:text-sm p-3"
            />
          </div>
          <div className="sendMessage bg-teal-400 p-2 px-2 text-md w-fit rounded-lg text-center cursor-pointer hover:bg-teal-500 text-white">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
