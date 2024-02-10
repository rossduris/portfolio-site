import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-white p-10">
      <h2 className="text-gray-300 text-center  sm:my-10 sm:p-10 bg-white w-full">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm bg-white text-gray-700 pb-10 projects">
        <div>
          <h2>Printify Stripe Store</h2>
          <Image
            alt="printify stripe store"
            src="/pc.png"
            width={300}
            height={200}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://printify-store.vercel.app/"
          >
            <button className=" border border-gray-100  rounded-lg m-4 p-4 my-2 font-medium text-black">
              Printify + Stripe Shop
            </button>
          </Link>
        </div>

        <div>
          <h2>Road Trip Forecast</h2>
          <Image
            alt="road trip forecast"
            src="/road-trip-forecast.png"
            width={300}
            height={200}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://road-trip-forecast.vercel.app/"
          >
            <button className=" border border-gray-100  rounded-lg m-4 p-4 my-2 font-medium text-black">
              Road Trip Forecast
            </button>
          </Link>
        </div>

        <div>
          <h2>HTML & CSS Code Challenge</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://csschallenge.vercel.app"
          >
            <button className=" border border-gray-100  rounded-lg m-4 p-4 my-2 font-medium text-black">
              HTML & CSS Code Challenge
            </button>
          </Link>
        </div>
        <div>
          <h2>Domain Availability Search</h2>
          <Image
            alt="domain availability tool"
            src="/domain-search.png"
            width={300}
            height={200}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <Link href="https://domain-search-tool.vercel.app/">
            <button className=" border border-gray-100  rounded-lg m-4 p-4 my-2 font-medium text-black">
              Domain Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
