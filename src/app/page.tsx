"use client";
import About from "./About";
import "aos/dist/aos.css";
import { Knewave } from "next/font/google";
import Work from "./work";
import Projects from "./Projects";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-white h-screen flex justify-center items-center flex-col">
        <div
          className={`text-[#333] md:text-8xl sm:flex md:flex-row sm:justify-center w-full flex flex-col justify-center items-center text-6xl ${knewave.className}`}
        >
          <div className="">
            <span className="text-[#4169E1]">S</span>rinivas{" "}
          </div>
          <div className="">
            <span className="text-[#4169E1]">M</span>ekala
          </div>
        </div>
        <div className={"w-full flex justify-center"}>
          <p className="md:text-4xl text-xl text-center md:hover:text-[#333] text-[#333] md:text-gray-400 cursor-default w-3/4 m-4">
            A passionate developer. Curious about distributed systems and clean
            architecture. Love to chat over a cup of hot chocolate and a donut.
          </p>
        </div>
      </div>
      <div id="about" className="flex flex-col items-center justify-center">
        <About />
        <Work />

        <Projects />
      </div>
    </div>
  );
}
