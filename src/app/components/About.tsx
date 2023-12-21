import React from "react";
import {
  FaAws,
  FaBeer,
  FaBolt,
  FaBoxes,
  FaCodepen,
  FaCss3,
  FaGit,
  FaGithub,
  FaGrin,
  FaHtml5,
  FaImage,
  FaJs,
  FaLaptop,
  FaReact,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col gap-10 h-80 ">
      <div className="flex flex-col gap-10 bg-white border-t border-gray-100 p-20 justify-center text-center">
        <h2 className="text-gray-300 text-center">My Skills</h2>
        <div className="grid grid-cols-4 text-2xl text-[#cfcfcf] gap-10 w-full  skills">
          <div>
            <FaJs />
          </div>
          <div>
            <FaReact />
          </div>
          <div>
            <FaHtml5 />
          </div>
          <div>
            <FaCss3 />
          </div>
          <div>
            <FaCodepen />
          </div>
          <div>
            <FaGithub />
          </div>
          <div>
            <FaAws />
          </div>
          <div>
            <FaBolt />
          </div>
          <div>
            <FaBoxes />
          </div>
          <div>
            <FaImage />
          </div>
          <div>
            <FaGrin />
          </div>
          <div>
            <FaLaptop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
