import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer/Footer";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="px-navbarPadX flex justify-between p-10 gap-2">
        <div className="details border shadow-sm">
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
          <div className="write-us p-8 flex flex-col gap-4">
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
        <div className="user-input border p-10 shadow-sm flex flex-col gap-2">
          <div className="user-details flex gap-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-100 placeholder:text-sm p-3"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="bg-gray-100 placeholder:text-sm p-3"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="bg-gray-100 placeholder:text-sm p-3"
            />
          </div>
          <div className="message">
            <textarea
              type="text"
              placeholder="Your Message"
              className="h-32 w-full bg-gray-100 placeholder:text-sm p-3"
            />
          </div>
          <div className="sendMessage bg-teal-400 p-2 px-2 text-md w-1/3 rounded-lg text-center cursor-pointer hover:bg-teal-500 text-white">
            Send Message
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
