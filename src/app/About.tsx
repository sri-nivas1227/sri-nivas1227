"use client";
import Image from "next/image";
import srinivas from "@/app/assets/srinivas.jpg";
import file from "@/app/assets/file.svg";
import resumeData from "@/app/assets/styledResume.json";

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
        </div>
      <div className="">
        <Image
          src={srinivas}
          width={1500}
          className="rounded-full"
          alt="image of Srinivas Mekala"
        />
        <div
          onClick={handleDownloadResume}
          className="text-center flex justify-center my-2 cursor-pointer hover:text-blue-400 hover:shadow-lg  p-2 font-semibold"
        >
          <div className="hover:shadow-yellow-200 flex gap-2">
            <Image
              src={file}
              color="#60af5a"
              className="text-blue-400"
              alt="file icon"
            />
            My Resume
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
