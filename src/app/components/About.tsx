import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex flex-col gap-10 bg-white border-t border-gray-100 justify-start text-center">
        <h2 className="text-gray-300 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 text-2xl text-[#cfcfcf] gap-10 w-full  skill justify-center  items-start">
          <div>
            <div className="flex w-full justify-center">
              <FaReact className=" text-blue-300" />
            </div>
            <p className=" text-sm pt-4">
              React Hooks (useState, useEffect, useContext) Next.js (SSR, SSG,
              API Routes) Redux (State Management, Middleware) Zod (Validation)
              Components (Functional, Class-based) Props (Typechecking with
              PropTypes) Context API (State Management) React Router
              (Navigation) Jest (Testing) Styled Components (CSS in JS)
            </p>
          </div>
          <div>
            <div className="flex w-full justify-center">
              <FaJs className=" text-yellow-300" />
            </div>
            <p className=" text-sm pt-4">
              ES6+ (Arrow Functions, Async/Await, Destructuring) DOM
              Manipulation Fetch API/Axios (HTTP Requests) Webpack (Module
              Bundling) Babel (JS Transpiler) Lodash (Utility Library) Jest
              (Testing) Promises and Async Programming Event Handling TypeScript
              (Static Typing)
            </p>
          </div>
          <div>
            <div className="flex w-full justify-center">
              <FaHtml5 className=" text-orange-400" />
            </div>
            <p className=" text-sm pt-4">
              Semantic Elements (header, section, article) Forms and Input Types
              Canvas and SVG for Graphics Video and Audio APIs Local Storage
              Accessibility (ARIA roles) Responsive Images (srcset) Geolocation
              API Drag and Drop API Web Workers
            </p>
          </div>
          <div>
            <div className="flex w-full justify-center">
              <FaCss3 className=" text-blue-500" />
            </div>
            <p className=" text-sm pt-4">
              Flexbox Grid Custom Properties (Variables) Media Queries
              (Responsive Design) Transitions and Animations Pseudo-elements
              (::before, ::after) Pseudo-classes (:hover, :focus) SASS/LESS
              (Preprocessors) BEM Methodology (Naming convention) CSS Modules
              (Scoped CSS)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
