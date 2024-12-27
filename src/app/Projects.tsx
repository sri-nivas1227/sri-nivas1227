import resumeData from "@/app/assets/styledResume.json";
import Image from "next/image";
import Link from "next/link";
import github from "@/app/assets/github.png";

const Projects = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold m-2">
        <span className="text-yellow-400">P</span>
        rojects
      </h2>
      <hr className="w-1/3" />
      <div className="m-2 grid grid-cols-3 gap-5">
        {resumeData.projects
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group w-full min-h-60 [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute border border-white inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col items-center justify-center">
                  <div className="w-full h-4/5 flex justify-center items-center ">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="rounded-full w-20"
                    />
                    <div className="flex flex-col">
                      <span className="m-1 text-5xl text-end">
                        {item.title}
                      </span>
                      <span className="h-1/5  text-sm w-full text-end">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Back Face */}
                <div className="absolute border inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="w-full h-3/4 flex items-center text-justify text-slate-200">
                    {item.description}
                  </div>
                  <div className="h-1/4 w-full grid grid-cols-2 gap-2 items-center justify-center">
                    <Link
                      href={item.preview_link}
                      target="_blank"
                      className="p-2 border border-white rounded-xl"
                    >
                      Preview Project
                    </Link>
                    <Link
                      href={item.github_link}
                      target="_blank"
                      className="p-2 border border-white rounded-xl flex gap-2 items-center justify-center"
                    >
                      <Image src={github} alt="github" width={30} height={30} />{" "}
                      <span className="">Visit Repo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
