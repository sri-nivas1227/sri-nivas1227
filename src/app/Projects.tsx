import resumeData from "@/app/assets/styledResume.json";
import Image from "next/image";
import Link from "next/link";
import github from "@/app/assets/github.png";
import linkIcon from "@/app/assets/link-icon.svg";

const Projects = () => {
  return (
    <div className="w-4/5 text-black bg-[#94d2bd] py-3 border-[3px] border-black rounded-3xl shadow-2xl shadow-black/80 my-4">
      <h2 className="text-4xl text-center font-bold m-2">Projects</h2>
      <div className="p-2 md:w-4/5 m-auto flex flex-col odd:justify-start even:justify-end ">
        {resumeData.projects
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <div
              key={index}
              className="w-full flex odd:justify-start even:justify-end"
            >
              <div
                key={index}
                className="w-full lg:w-1/2 transition-all my-2 bg-[#d75514] shadow-black border-[3px] border-black rounded-xl p-2 md:p-2 md:py-6 shadow-2xl grid md:grid-cols-[90%_10%] justify-between items-center"
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
