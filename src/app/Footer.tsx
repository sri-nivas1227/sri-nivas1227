import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-11/12 hover:w-full rounded-b-none rounded-3xl border-[3px] border-black mt-6 bg-[#335c67] text-white  py-6 md:flex-row flex flex-col justify-around items-center">
      <div className="text-center">
        <p>
          &copy; 2025 <span className="font-bold text-lg">Srinivas Mekela</span>
          . All rights reserved.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link href="https://github.com/sri-nivas1227" className="">
          GitHub
        </Link>
        <Link href="https://x.com/sri_nivas1227" className="">
          Twitter
        </Link>
        <Link href="https://www.linkedin.com/in/sri-nivas1227" className="">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
