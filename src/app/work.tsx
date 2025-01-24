import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import resumeData from "@/app/assets/styledResume.json";
import Image from "next/image";

const Work = () => {
  const formatDescription = (description: string) => {
    return description.split("--").map((item, index) => {
      if (item === "") return null;

      return (
        <li key={index} className="mb-1 list-disc text-justify">
          {item}
        </li>
      );
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full text-white">
      <h2 className="text-3xl font-bold m-2">
        <span className="text-yellow-400">P</span>rofessional{" "}
        <span className="text-yellow-400">E</span>xperience
      </h2>
      <hr className="w-1/3" />
      <div className="w-full grid grid-cols-2 gap-5">
        <div className="py-2">
          <ol className="relative my-3 border-s border-gray-200 dark:border-gray-700">
            {resumeData.workExperience
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
                <li key={index} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <Image
                      className="rounded-full shadow-lg"
                      src={item.companyIcon}
                      alt="Bonnie image"
                    />
                  </span>
                  <div
                    data-aos="fade-right"
                    data-aos-once="true"
                    className="w-full items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"
                  >
                    <time className="mb-1 text-xs font-semibold text-gray-700 sm:order-last sm:mb-0">
                      {item.startDate} - {item.endDate}
                    </time>
                    <div className="text-sm w-3/4 font-normal text-gray-500 dark:text-gray-300">
                      <h4 className="font-semibold text-gray-900 text-xl">
                        {item.position}
                      </h4>
                      <p className="font-semibold text-gray-700">
                        {item.company}
                      </p>
                      <ul className="px-3">
                        {formatDescription(item.description)}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
        <div className="">{/* Some photos or something */}</div>
      </div>
    </div>
  );
};

export default Work;
