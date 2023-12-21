import React from "react";

const Hero = () => {
  return (
    <div className=" flex w-full bg-white p-10 pb-24">
      <div className="flex w-full h-80 justify-center">
        <div className=" w-[380px] h-[380px] flex items-left flex-col justify-center gap-10">
          <h2 className="text-3xl">Ross Duris</h2>
          <p className="text-xs leading-7 pr-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus ad facilis cumque architecto. Harum ab, ratione
            laboriosam, tenetur rem, facilis dolor iste laudantium soluta nemo
            nihil vel sunt animi!
          </p>
          <h3>Frontend Web Developer</h3>
        </div>
        <div className="bg-gradient-to-tr from-[#cdcdcd] to-[#fff] w-[380px] h-[380px]"></div>
      </div>
    </div>
  );
};

export default Hero;
