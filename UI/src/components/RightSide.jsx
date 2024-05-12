import React from "react";

function RightSide() {
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
    <div className=" bg-white text-black rounded h-[90%] flex flex-col gap-2 px-2 py-3 overflow-y-auto scrollbar-hide">
      {images.map((image,index) => {
        return (
          <div key={index}>
            <img className="rounded cursor-pointer" src={image.pic} alt="pic" />
          </div>
        );
      })}
    </div>
  );
}

export default RightSide;
