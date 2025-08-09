import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  return (
    <div className="fixed w-full top-0 z-30">
      <div className="w-11/12 m-auto p-2 bg-[#001524] text-white py-4 rounded-b-3xl">
        <nav className="">
          <div className="w-4/5 m-auto flex justify-between items-center">
            <Link
              href={"/"}
              className={`text-3xl ${knewave.className} flex items-baseline`}
              // data-aos="fade-up"
            >
              <span className="">S</span>
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="w-8" />
              <span className="">M</span>
            </Link>
            <div className="flex gap-5 font-semibold text-xl">
              <Link
                href={"/#about"}
                className="hover:text-[#ffa] cursor-pointer"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-[#ffa] cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
