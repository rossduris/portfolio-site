import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className="bg-white p-10">
        <h2 className="text-gray-300 text-center border-t border-b border-gray-100 sm:my-10 sm:p-10 bg-white w-full">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm bg-white text-gray-700 font-thin p-10">
          <div>
            <h4 className="py-4 font-medium text-black">Online Store</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
              exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
              earum consequatur natus voluptatum.
            </p>
          </div>
          <div>
            <h4 className="py-4 font-medium text-black">Domain Search</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
              exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
              earum consequatur natus voluptatum.
            </p>
          </div>
          <div>
            <h4 className="py-4 font-medium text-black">Road-Trip Forecast</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
              exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
              earum consequatur natus voluptatum.
            </p>
          </div>
          <div>
            <h4 className="py-4 font-medium text-black">Live Code Editor</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
              exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
              earum consequatur natus voluptatum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
