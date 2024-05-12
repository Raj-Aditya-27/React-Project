import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaComment, FaShare } from "react-icons/fa";

function Content() {
  const images = [
    {
      pic: "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_640.jpg",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_1280.jpg",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2023/10/13/19/54/meadows-8313453_1280.jpg",
    },
    {
      pic: "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_640.jpg",
    },
  ];

  return (
    <div className="bg-white text-black p-2 rounded flex flex-col gap-5 justify-center items-start select-none ">
      {images.map((image, index) => {
        return (
          <>
            <div className="flex gap-2 h-12  justify-center items-center">
              <div className="border-10 border-gray cursor-pointer overflow-hidden border-2 h-full  rounded-full">
                <img
                  className="object-cover  w-full h-full"
                  src="https://avatars.githubusercontent.com/u/138434890?s=400&u=41435013da8aeefd93257b0e4e2c9d0631a1f40d&v=4"
                  alt=""
                />
              </div>
              <div className="font-bold">Dubai</div>
            </div>
            <div>
              <img className="rounded" src={image.pic} alt="" />
            </div>
            <div className="flex justify-between px-1 gap-4">
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <BiSolidLike /> 10.2k
              </div>
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaComment />
                20.6k
              </div>
              <div className="flex justify-center items-center gap-1 cursor-pointer">
                <FaShare />
                1.6k
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Content;
