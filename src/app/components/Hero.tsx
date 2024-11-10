import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full bg-white flex-col min-h-screen items-center justify-center  relative max-w-7xl">
      <div className="p-10 sm:h-[1750px] sm:w-[1750px] h-[1250px] w-[1250px] bg-gradient-to-br from-[#e0f2f9] to-[#fff] rounded-full absolute sm:-right-[800px] sm:-top-[800px] -right-[700px] -top-[700px] z-0 overflow-hidden"></div>

      <div className="flex w-full justify-center z-10 relative">
        <div className="p-10 min-h-[350px] w-full py-0 flex items-left flex-col justify-center gap-10 mt-0 text-gray-600">
          <h2 className="text-black sm:text-7xl text-6xl pt-4 merriweather-bold">
            Ross Duris
          </h2>
          <h3 className=" text-4xl font-bold merriweather-regular">
            Web Developer
          </h3>
          <div>
            <p>Contact</p>
            <div>Email</div>
            <div>Phone</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
