"use client";
import { Knewave } from "next/font/google";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
  };
  return (
    <div className="bg-[#252525]">
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center  text-white">
        <h1 className={`text-9xl ${knewave.className}`}>
          <span className="text-yellow-400">S</span>rinivas{" "}
          <span className="text-yellow-400">M</span>ekala
        </h1>
        <p className="text-4xl text-center text-gray-600 hover:text-gray-400 cursor-default w-2/3 m-4">
          A passionate developer. Curious about distributed systems and clean
          architecture. Love to chat over a cup of hot chocolate and a donut🍩.
        </p>
        <nav className="w-full flex justify-center gap-10 items-center p-2">
          <Link href="/about" className="p-3 text-slate-800 hover:text-slate-200 hover:shadow-xl hover:shadow-yellow-400 hover:border hover:bg-[#252525] hover:border-white rounded-2xl font-bold text-2xl bg-yellow-400">About Me!</Link>
          <Link href="/work" className="p-3 text-slate-800 hover:text-slate-200 hover:shadow-xl hover:shadow-yellow-400 hover:border hover:bg-[#252525] hover:border-white rounded-2xl font-bold text-2xl bg-yellow-400">My Work</Link>
        </nav>
      </div>
    </div>
  );
}
