import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className="bg-white p-10">
        <h2 className="text-gray-300 text-center border-t border-b border-gray-100 my-10 p-10 bg-white w-full">
          My Projects
        </h2>
        <div className="grid grid-cols-4 gap-10 text-sm bg-white text-gray-700 font-thin p-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            veritatis eos non velit obcaecati soluta voluptas quisquam quaerat
            exercitationem, dicta alias beatae. Impedit nam nostrum, inventore
            earum consequatur natus voluptatum.
          </p>
        </div>
      </div>
    </main>
  );
}
