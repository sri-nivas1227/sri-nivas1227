"use client";
import Image from "next/image";
import srinivas from "@/app/about/assets/srinivas.jpg";
import file from "@/app/about/assets/file.svg";
export default function About() {
  const handleDownloadResume = () => {
    window.open("./srinivas-mekala-resume.pdf", "_blank");
  };

  return (
    <div className="bg-[#252525] min-w-screen min-h-screen flex flex-col justify-center items-center text-white">
      <div className="w-4/5">
        <h2 className="text-3xl font-bold m-2">
          <span className="text-yellow-400">A</span>bout{" "}
          <span className="text-yellow-400">M</span>e
        </h2>
        <hr className="w-1/3" />
        <div className="flex">
          <div className="">
            <div className=" my-2 font-medium text-xl">
              Hi, I’m Srinivas Mekala—an aspiring Software Engineer with a
              passion for backend development, distributed systems, and creating
              scalable, reliable solutions. I enjoy diving into complex
              challenges, whether it’s designing efficient microservices,
              optimizing database performance, or building applications that
              make life easier (and sometimes cooler).
            </div>
            <div className=" my-2 font-medium text-xl">
              I’ve honed my skills through hands-on experience working with
              cutting-edge technologies like Python, Flask, MongoDB, Docker,
              Kubernetes, and AWS. My journey has taken me from crafting
              real-time chat systems to integrating APIs from health insurers
              and even leading development for innovative projects like ArtKart
              and Chatopia
            </div>
            <div className=" my-2 font-medium text-xl">
              Beyond the code, I’m all about learning, teaching, and
              collaborating. I’ve been a mentor, community organizer, and even
              dabbled in event management—because life’s too short to only debug
              code! When I’m not coding, you can find me exploring new tech,
              mentoring fellow developers, or trying to perfect the art of
              balancing coffee cups and deadlines. Let’s connect and build
              something amazing together!
            </div>
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
    </div>
  );
}
