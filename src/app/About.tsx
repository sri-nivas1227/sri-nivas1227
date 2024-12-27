"use client";
import Image from "next/image";
import srinivas from "@/app/assets/srinivas.jpg";
import file from "@/app/assets/file.svg";
import resumeData from "@/app/assets/styledResume.json";
import Link from "next/link";

export default function About() {
  const handleDownloadResume = () => {
    window.open("./srinivas-mekala-resume.pdf", "_blank");
  };
  return (
    <div id="about" className="bg-[#252525] my-4 text-white">
      <h2 className="text-3xl font-bold m-2">
        <span className="text-yellow-400">A</span>bout{" "}
        <span className="text-yellow-400">M</span>e
      </h2>
      <hr className="w-1/3" />
      <div className="flex">
        <div className="">
          {resumeData.introduction.map((item, index) => (
            <div key={index} className=" my-2 font-medium text-xl">
              {item}
            </div>
          ))}
          <div className="w-full flex justify-evenly items-center my-2">
            <div
              onClick={handleDownloadResume}
              className="p-2 rounde-xl border border-white flex justify-center items-center gap-3 rounded-xl font-semibold cursor-pointer"
            >
              <Image src={file} alt="file icon" />
              My Resume
            </div>
            <Link
              href={"/contact"}
              className="p-2 rounded-xl border border-white rounded-xl font-semibold cursor-pointer"
            >
              Get in touch!
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src={srinivas}
            width={1500}
            className="rounded-full"
            alt="image of Srinivas Mekala"
          />
        </div>
      </div>
    </div>
  );
}
