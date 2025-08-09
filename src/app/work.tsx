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
    <div className="w-4/5 text-white bg-[#d7371b] p-3 rounded-3xl border-[3px] border-black shadow-2xl shadow-black/50">
      <h2 className="text-3xl font-bold mx-2">Professional Experience</h2>
      <hr className="md:w-1/3" />
      <div className="w-full md:grid md:grid-cols-[80%_20%] md:gap-5 p-6">
        <div className="py-2">
          <ol className="relative my-3 md:border-s dark:border-[#94d2bd]">
            {resumeData.workExperience
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
                <li key={index} className="mb-10 md:ms-6">
                  <span className="hidden md:flex absolute  items-center justify-center w-10 h-10 rounded-full -start-5 ring-2 ring-transparent bg-[#ffc] md:p">
                    <Image
                      className="rounded-full shadow-lg"
                      src={item.companyIcon}
                      alt="Company image"
                      width={50}
                      height={50}
                    />
                  </span>
                  <div className="w-full items-center justify-between p-2 md:p-4 bg-[#94d2bd] text-black   rounded-lg shadow-black shadow-2xl">
                    <time className="mb-1 text-xs font-semibold text-[#333] sm:mb-0">
                      {item.startDate} - {item.endDate}
                    </time>
                    <div className="text-sm ">
                      <h4 className="font-bold  text-2xl">{item.position}</h4>
                      <p className="font-semibold text-sm">{item.company}</p>
                      <ul className="px-3  text-xs md:text-base">
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
