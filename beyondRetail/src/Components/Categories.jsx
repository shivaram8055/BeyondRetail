import React from "react";
import p from "../assets/p.svg";
import c from "../assets/c.svg";
import s from "../assets/s.png";
import ca from "../assets/ca.svg";
import h from "../assets/h.svg";
import g from "../assets/g.svg";
const Categories = () => {
  return (
    <div className=" flex h-313px py-10 gap-12 flex-col">
      <div className="flex flex-col pl-16">
        <div className="flex gap-4">
          <div
            style={{
              width: 20,
              height: 30,
              background: "#115e59",
              borderRadius: 4,
            }}
          />
          <div
            className="text-teal-800 text-lg font-extrabold"
            style={{
              height: 40,
            }}
          >
            Categories
          </div>
        </div>
        <div className="font-extrabold text-4xl">Browse By Category</div>
      </div>
      <div className="flex justify-evenly">
        <div className=" transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
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
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
          <div className="flex pt-4 pl-14 ">
            {" "}
            <a href="#">
              <img src={c} alt="amb"></img>
            </a>
          </div>
          <div className="absolute bottom-[24px] left-[calc(50%_-_30px)] leading-[24px]">
            Computers
          </div>
        </div>

        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
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
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
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
        <div className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 relative rounded box-border w-[170px] h-[145px] overflow-hidden shrink-0 text-left text-base text-button font-title-16px-regular border-[1px] border-solid border-gray-300">
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
    </div>
  );
};

export default Categories;
