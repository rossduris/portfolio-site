import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Link from "next/link";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
