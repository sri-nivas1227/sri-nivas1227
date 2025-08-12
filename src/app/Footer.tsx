import Link from "next/link";
import { Toaster, toast } from "sonner"; // Importing the Toaster component from the sonner library

export default function Footer() {
  const emailToClipboard = () => {
    navigator.clipboard.writeText("srinivasmekala1227@gmail.com");
    toast.info("Email copied to clipboard");
  };
  return (
    <footer className="w-11/12 rounded-b-none rounded-3xl border-[3px] border-black mt-6 bg-[#335c67] text-white  py-6 md:flex-row flex flex-col justify-around items-center">
      <Toaster richColors position="top-center" />

      <div className="text-center">
        <p>
          &copy; 2025 <span className="font-bold text-lg">Srinivas Mekela</span>
          . All rights reserved.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link
          href="https://github.com/sri-nivas1227"
          className="hover:underline"
        >
          GitHub
        </Link>
        <Link href="https://x.com/sri_nivas1227" className="hover:underline">
          Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/in/sri-nivas1227"
          className="hover:underline"
        >
          LinkedIn
        </Link>
        <p
          onClick={emailToClipboard}
          className="cursor-pointer hover:underline"
        >
          Email
        </p>
      </div>
    </footer>
  );
}
