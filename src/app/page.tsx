import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Link from "next/link";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col  items-center overflow-hidden">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
