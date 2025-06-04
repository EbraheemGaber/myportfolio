import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#121212] min-h-screen ">
      <div className="container mx-auto px-12 py-4">
        <NavBar />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}
