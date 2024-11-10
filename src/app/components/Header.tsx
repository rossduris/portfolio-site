import Link from "next/link";
import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  return (
    <header className=" w-full flex justify-between max-w-7xl py-2 z-10">
      <div className="w-full font-bold poppins-bold text-xl flex">
        <span>ROSS DURIS</span>
      </div>
      <nav className="  p-2 text-gray-800  w-full justify-around flex poppins-regular">
        <div className=" text-[#0274be]">Home</div>
        <div className=" text-black">Services</div>
        <div className=" text-black">Portfolio</div>
        <div className=" text-black">Contact</div>
      </nav>
    </header>
  );
};
