"use client";
import Image from "next/image";
import srinivas from "@/app/assets/srinivas.jpg";
import emailIcon from "@/app/assets/email.svg";
import github from "@/app/assets/github.svg";
import linkedin from "@/app/assets/linkedin.svg";
import file from "@/app/assets/file.svg";
import Link from "next/link";
import { Toaster, toast } from "sonner"; // Importing the Toaster component from the sonner library
import { useState } from "react";
import SubmitButton from "./SubmitButton";

const Page = () => {
  const emailToClipboard = () => {
    navigator.clipboard.writeText("srinivasmekala1227@gmail.com");
    toast.info("Email copied to clipboard");
  };
  const handleDownloadResume = () => {
    window.open("./srinivas-mekala-resume.pdf", "_blank");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="bg-[#ffecd1] pt-24 min-h-screen w-full md:flex md:justify-center md:items-center">
      <div className="w-full md:grid md:grid-cols-2 md:p-4">
        <div className="">
          <div className="flex justify-center items-center">
            <Image
              src={srinivas}
              width={300}
              alt="Srinivas Mekala"
              className="rounded-full hidden md:block"
            />
          </div>
          <div className="p-2 flex justify-center items-center gap-4">
            <Link href="https://github.com/sri-nivas1227">
              <Image
                src={github}
                width={48}
                alt="Srinivas Mekala"
                className="rounded-full invert"
              />
            </Link>
            <Link href={`https://www.linkedin.com/in/sri-nivas1227/`}>
              <Image
                src={linkedin}
                width={48}
                alt="Srinivas Mekala"
                className="rounded-full invert"
              />
              <Toaster richColors position="top-center" />
            </Link>
            <Image
              onClick={emailToClipboard}
              src={emailIcon}
              width={48}
              alt="Srinivas Mekala"
              title="Click to copy email"
              className="rounded-full invert cursor-pointer"
            />
          </div>
          <div className="m-1 w-full flex justify-center items-center font-semibold">
            <div
              onClick={handleDownloadResume}
              className="p-2 bg-black text-[#fff] hover:text-black rounded-xl flex justify-center items-center gap-3 border w-fit cursor-pointer border-[#ff7d00] hover:bg-[#ff7d00]"
            >
              <Image src={file} alt="file icon" className="" />
              My Resume
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="px-2 text-3xl font-bold text-[#333]">Get In Touch</h2>
          <p className="px-2 text-gray-500">
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me.
          </p>
          <div className="w-full py-4">
            <div className="w-3/4 m-auto flex flex-col gap-2 border-[3px] border-black p-3 rounded-3xl bg-[#ff7d00]">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-black text-lg font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-[#333]   font-semibold p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-black text-lg font-semibold "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[#333]   font-semibold p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-black text-lg font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-[#333]   font-semibold p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-black text-lg font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-[#333]   font-semibold p-2 rounded-md"
                />
              </div>
              <SubmitButton
                connectionName={name}
                email={email}
                subject={subject}
                message={message}
                resetForm={resetForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
