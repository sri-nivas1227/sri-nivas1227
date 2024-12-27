"use client";
import About from "./About";
import RevealComp from "@/components/RevealComp";

import { Knewave } from "next/font/google";
import Work from "./work";
import Projects from "./Projects";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="bg-[#252525]">
      <div className=" relative min-w-screen min-h-screen flex flex-col justify-center items-center  text-white">
        <h1 className={`text-9xl ${knewave.className}`}>
          <span className="text-yellow-400">S</span>rinivas{" "}
          <span className="text-yellow-400">M</span>ekala
        </h1>
        <RevealComp
          className={"w-full flex justify-center"}
          thresholdValue={0.8}
          duration="1s"
          x={0}
          y={90}
        >
          <p className="text-4xl text-center text-gray-600 hover:text-gray-400 cursor-default w-3/4 m-4">
            A passionate developer. Curious about distributed systems and clean
            architecture. Love to chat over a cup of hot chocolate and a donut.
          </p>
        </RevealComp>
      </div>
      <div className="w-full flex fex-col justify-center">
        <div className="w-11/12 flex flex-col justify-center">
          <About />
          <Work />
          <Projects />
        </div>
      </div>
    </div>
  );
}
