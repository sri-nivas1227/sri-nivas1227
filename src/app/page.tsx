"use client";
import Link from "next/link";
import About from "./About";
import RevealComp from "@/components/RevealComp";

import { Knewave } from "next/font/google";
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
        <RevealComp thresholdValue={0.5} duration="1s" x={-200} y={-20}>
          <p className="text-4xl text-center text-gray-600 hover:text-gray-400 cursor-default w-2/3 m-4">
            A passionate developer. Curious about distributed systems and clean
            architecture. Love to chat over a cup of hot chocolate and a donut.
          </p>
        </RevealComp>
        <nav className="w-full flex justify-center gap-10 items-center p-2">
          <Link
            href="#about"
            className="p-3 text-slate-800 hover:text-slate-200 hover:shadow-xl hover:shadow-yellow-400 hover:border hover:bg-[#252525] hover:border-white rounded-2xl font-bold text-2xl bg-yellow-400"
          >
            About Me!
          </Link>
          <Link
            href="#work"
            className="p-3 text-slate-800 hover:text-slate-200 hover:shadow-xl hover:shadow-yellow-400 hover:border hover:bg-[#252525] hover:border-white rounded-2xl font-bold text-2xl bg-yellow-400"
          >
            My Work
          </Link>
        </nav>
      </div>
      <About />
    </div>
  );
}
