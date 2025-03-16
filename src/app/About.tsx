"use client";
import Image from "next/image";
import srinivas from "@/app/assets/srinivas.jpg";
import resumeData from "@/app/assets/styledResume.json";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="w-4/5 my-4 text-[#333]">
      <h2 className="text-3xl font-bold">
        <span className="text-[#4169E1]">A</span>
        <span className="">bout </span>
        <span className="text-[#4169E1]">M</span>
        <span className="">e</span>
      </h2>
      <hr className="w-1/3 text-[#333]" />
      <div className="flex flex-col md:flex-row ">
        <div className=" order-2 md:order-1">
          {resumeData.introduction.map((item, index) => (
            <div key={index} className=" my-2 font-medium md:text-xl">
              {item}
            </div>
          ))}
          <div className="flex justify-evenly items-center my-2">
            <Link
              href={"/contact"}
              className="p-2 border border-[#333] rounded-xl font-semibold cursor-pointer"
            >
              Get in touch!
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          <Image
            src={srinivas}
            width={1500}
            className="w-3/4 md:w-full rounded-full"
            alt="image of Srinivas Mekala"
          />
        </div>
      </div>
    </div>
  );
}
