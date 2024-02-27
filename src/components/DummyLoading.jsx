import React from "react";
import loading from "../assets/Infinity-1s-200px.gif";
const DummyLoading = () => {
  const arr = [loading, loading, loading];
  return (
    <div className="flex flex-wrap items-center gap-[47px] justify-center  w-[100%]">
      {arr.map((element, index) => (
        <img
          src={element}
          alt="loading"
          key={index}
          className="my-[30px]  bg-white rounded-bl-md w-[100px]  cursor-pointer  hover:scale-110 object-cover md:w-[200px] md:h-[210px]"
        />
      ))}
    </div>
  );
};

export default DummyLoading;
