import React from "react";

function Herosection() {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="h-[578px]">
        <div className="w-[595px] pl-28">
          <h1 className="font-extrabold text-7xl leading-2 ">
            YOUR FEET DESERVE <br /> THE BEST
          </h1>
          <p className="font-normal text-sm w-[404px] text-gray-600 mt-3">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="mt-3">
            <button className="w-[85px] h-[31px] bg-[#D01C28] text-white px-[2px] py-[6px]">
              Shop Now
            </button>
            <button className="ml-4 w-[90px] h-[31px] border-2  text-gray-600 px-[2px] py-[6px]">
              Category
            </button>
          </div>
          <div className="flex gap-[16px] items-center mt-4 w-[227px]">
            <p className="text-sm text-gray-600">Also Available on</p>
            <img
              className="h-6"
              src="../../public/images/flipkart.png"
              alt=""
            />
            <img className="h-6" src="../../public/images/amazon.png" alt="" />
          </div>
        </div>
        <div className="w-[530px]">
          <img src="../../public/images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
