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
  return (
    <div className="w-4/5 text-white">
      <h2 className="text-3xl font-bold m-2">
        <span className="text-[#4169e1]">P</span>
        <span className="text-[#333]">rofessional </span>
        <span className="text-[#4169e1]">E</span>
        <span className="text-[#333]">xperience</span>
      </h2>
      <hr className="md:w-1/3" />
      <div className="w-full md:grid md:grid-cols-2 md:gap-5 p-8">
        <div className="py-2">
          <ol className="relative my-3 border-s dark:border-[#333]">
            {resumeData.workExperience
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
                <li key={index} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 ring-2 ring-transparent">
                    <Image
                      className="rounded-full shadow-lg"
                      src={item.companyIcon}
                      alt="Bonnie image"
                      width={50}
                      height={50}
                    />
                  </span>
                  <div className="w-full cursor-[url('/tetris.png')] items-center justify-between p-4 bg-[#e1b941]/50 text-white border-gray-700 border-[2.5px] rounded-lg shadow-black shadow-2xl">
                    <time className="mb-1 text-xs font-semibold text-[#444] sm:mb-0">
                      {item.startDate} - {item.endDate}
                    </time>
                    <div className="text-sm text-gray-500 dark:text-gray-300">
                      <h4 className="font-bold text-[#333] text-2xl">
                        {item.position}
                      </h4>
                      <p className="font-semibold text-[#444] text-sm">
                        {item.company}
                      </p>
                      <ul className="px-3 text-[#333] text-xs md:text-base">
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
