"use client";
import About from "./About";
import "aos/dist/aos.css";
import { Knewave } from "next/font/google";
import Work from "./work";
import Projects from "./Projects";
import Footer from "./Footer";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="bg-[#ffecd1] min-h-screen flex flex-col justify-center items-center">
      <div className=" text-[#12555f] h-screen flex justify-center items-center flex-col">
        <div
          className={`text-[#f5a75f] hover:text-[#ff7d00] border-[0px] border-black/90 shadow-b-2xl shadow-black p-2 rounded- md:text-8xl sm:flex md:flex-row sm:justify-center w-fit flex flex-col justify-center items-center text-6xl ${knewave.className}`}
        >
          <div className="">
            <span className="text-[#ff7d00]">S</span>rinivas{" "}
          </div>
          <div className="">
            <span className="text-[#ff7d00]">M</span>ekala
          </div>
        </div>
        <div className={"w-full flex justify-center"}>
          <p className="md:text-4xl text-xl text-center  cursor-default w-3/4 m-4">
            A passionate developer. Curious about distributed systems and clean
            architecture. Love to chat over a cup of hot chocolate and a donut.
          </p>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center mb-6"
      >
        <About />
        <Work />

        <Projects />
      </div>
      <Footer />
    </div>
  );
}
