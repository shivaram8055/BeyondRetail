import React from "react";
import p from "../assets/p.svg";
import c from "../assets/c.svg";
import s from "../assets/s.png";
import ca from "../assets/ca.svg";
import h from "../assets/h.svg";
import g from "../assets/g.svg";
const Categories = () => {
  return (
    <div className=" flex h-313px py-10 gap-12 md:px-navbarPadX flex-col">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div
            style={{
              width: "8px",
              height: "28px",
              background: "#26A69A",
            }}
          />
          <div
            className="text-teal-700 text-base"
            style={{
              height: 40,
            }}
          >
            Categories
          </div>
        </div>
        <div className="text-2xl">Browse By Category</div>
      </div>
      <div className="flex justify-evenly">
        <div className=" transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-101 hover:bg-teal-300 duration-300 flex rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14">
            {" "}
            <a href="#">
              <img src={p} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            Phones
          </div>
        </div>
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-101 hover:bg-teal-300 duration-300 flex rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14 ">
            {" "}
            ``
            <a href="#">
              <img src={c} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            Computers
          </div>
        </div>

        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-101 hover:bg-teal-300 duration-300 flex rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14">
            {" "}
            <a href="#">
              <img className="object-scale-down" src={ca} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            Camera
          </div>
        </div>
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-101 hover:bg-teal-300 duration-300 flex rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14">
            {" "}
            <a href="#">
              <img src={h} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            HeadPhones
          </div>
        </div>
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-101 hover:bg-teal-300 duration-300 flex rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14">
            {" "}
            <a href="#">
              <img src={g} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            Gaming
          </div>
        </div>
      </div>
      {/* <div className="container flex justify-evenly">
        <div className="phone w-[170px] h-[145px] border rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          Phone
        </div>
        <div className="computer w-[170px] h-[145px] border rounded-xl flex items-center justify-center">
          Computer
        </div>
        <div className="headphoes w-[170px] h-[145px] border rounded-xl flex items-center justify-center">
          HeadPhones
        </div>
        <div className="gamming w-[170px] h-[145px] border rounded-xl flex items-center justify-center">
          Gamming
        </div>
        <div className="camera w-[170px] h-[145px] border rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
          Camera
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
