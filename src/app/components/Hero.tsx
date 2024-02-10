import React from "react";

const Hero = () => {
  return (
    <div className=" flex w-full bg-white flex-col">
      <div className="flex w-full justify-center">
        <div className="p-10 min-h-[350px]  w-full py-0 flex items-left flex-col justify-center gap-10 mt-0 text-gray-600">
          <h2 className="sm:text-3xl text-xl pt-4">Ross Duris</h2>
          <p className="text-sm leading-7 pr-10 hidden sm:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus ad facilis cumque architecto. Harum ab, ratione
            laboriosam, tenetur rem, facilis dolor iste laudantium soluta nemo
            nihil vel sunt animi!
          </p>
          <h3>Web Developer</h3>
        </div>
        <div className="p-10 min-h-[350px] bg-gradient-to-tr from-[#cdcdcd] to-[#fff] w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
