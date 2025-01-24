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
    <div className="grid grid-cols-2">
      <div className="">
        <div className="flex justify-center items-center">
          <Image
            src={srinivas}
            width={300}
            alt="Srinivas Mekala"
            className="rounded-full"
          />
        </div>
        <div className="p-2 flex justify-center items-center gap-4">
          <Link href="https://github.com/sri-nivas1227">
            <Image
              src={github}
              width={48}
              alt="Srinivas Mekala"
              className="rounded-full"
            />
          </Link>
          <Link href={`https://www.linkedin.com/in/sri-nivas1227/`}>
            <Image
              src={linkedin}
              width={48}
              alt="Srinivas Mekala"
              className="rounded-full"
            />
            <Toaster richColors position="top-center" />
          </Link>

          <Image
            onClick={emailToClipboard}
            src={emailIcon}
            width={48}
            alt="Srinivas Mekala"
            className="rounded-full"
          />
        </div>
        <div className="m-1 w-full flex justify-center items-center font-semibold ">
          <div
            onClick={handleDownloadResume}
            className="p-2 rounded-xl flex justify-center items-center gap-3 border w-fit cursor-pointer border-white"
          >
            <Image src={file} alt="file icon" />
            My Resume
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-gray-400">
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
        <div className="py-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-400 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#333] text-white p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-400 font-semibold ">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#333] text-white p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-400 font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#333] text-white p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-400 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#333] text-white p-2 rounded-md"
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
  );
};

export default Page;
