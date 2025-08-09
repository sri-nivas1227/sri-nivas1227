import resumeData from "@/app/assets/styledResume.json";
import Image from "next/image";
import Link from "next/link";
import github from "@/app/assets/github.png";
import linkIcon from "@/app/assets/link-icon.svg";

const Projects = () => {
  return (
    <div className="w-4/5 text-[#333]">
      <h2 className="text-3xl font-bold m-2">
        <span className="text-[#4169e1]">P</span>
        rojects
      </h2>
      <hr className="md: w-1/3" />
      <div className="p-2 grid md:grid-cols-3 gap-10">
        {resumeData.projects
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <div
              key={index}
              className="bg-[#c5603a]/70 shadow-black border-[3px] border-black rounded-xl p-2 md:p-2 md:py-6 shadow-2xl grid md:grid-cols-[90%_10%] justify-between items-center"
            >
              <div className=" flex justify-around items-center ">
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="rounded-xl p-1 w-20"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-center">
                  <span className="m-1 text-3xl md:text-4xl text-center">
                    {item.title}
                  </span>
                  <span className="h-1/5  text-sm w-full text-center">
                    {item.tagline}
                  </span>
                </div>
              </div>
              <div className=" flex md:flex-col gap-3 items-center justify-center">
                <Link
                  href={item.preview_link}
                  target="_blank"
                  className="flex gap-1 rounded-full p-1 items-center justify-center"
                >
                  <Image
                    src={linkIcon}
                    alt="link"
                    width={30}
                    height={30}
                    title="Preview Project"
                    className="rounded-full w-4 md:w-auto"
                  />
                  <span className="md:hidden">Preview</span>
                </Link>
                <Link
                  href={item.github_link}
                  target="_blank"
                  className="flex gap-1  rounded-xl p-1 items-center justify-center"
                >
                  <Image
                    src={github}
                    alt="github"
                    width={30}
                    height={30}
                    title="Visit Repo"
                    className="rounded-full w-4 md:w-auto"
                  />
                  <span className="md:hidden">Repo</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
