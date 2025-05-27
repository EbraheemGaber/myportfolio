import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#121212] min-h-screen ">
      <div className="container mx-auto px-12 py-4">
        <Hero />
      </div>
    </div>
  );
}
