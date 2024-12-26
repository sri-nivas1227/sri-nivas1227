import { Knewave } from "next/font/google";
import RevealComp from "@/components/RevealComp";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  return (
    <div className="w-full fixed p-2 bg-[#252525] z-10">
      <nav className="">
        <div className="flex justify-between items-center">
          <RevealComp thresholdValue={0.5} duration="1s" x={-100} y={0}>
            <h1 className={`text-3xl text-white ${knewave.className}`}>
              <span className="text-yellow-400">S</span>rinivas{" "}
              <span className="text-yellow-400">M</span>ekala
            </h1>
          </RevealComp>
          <div className="flex gap-2 font-semibold text-xl text-zinc-400">
            <div className="hover:text-zinc-200 cursor-pointer">About</div>
            <div className="hover:text-zinc-200 cursor-pointer">Contact</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
