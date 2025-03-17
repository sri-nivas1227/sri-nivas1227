import { Knewave } from "next/font/google";
import Link from "next/link";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  return (
    <div className="w-full fixed p-2 z-10 bg-[#FAF3E0]">
      <nav className="">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className={`text-3xl text-[#333] ${knewave.className} flex`}
            // data-aos="fade-up"
          >
            <span className="text-[#4169E1]">S</span>
            <span className="sm:block hidden">rinivas </span>
            <span className="text-[#4169E1]">M</span>
            <span className="sm:block hidden">ekala</span>
          </Link>
          <div className="flex gap-2 font-semibold text-xl text-[#444]">
            <Link href={"/#about"} className="hover:text-[#333] cursor-pointer">
              About
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-[#333] cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
