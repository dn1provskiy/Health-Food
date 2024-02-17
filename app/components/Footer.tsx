import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import data from "@/utils/data.json";
import Link from "next/link";

import {
  IconViber,
  IconFacebook,
  IconTwitter,
  IconYouTube,
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center min-w-75 w-full bg-footer max-1lgx:pt-16 pt-[137px] pb-[104px]">
      <div className="flex items-center max-1mdx:gap-y-14 gap-x-28 max-1lgx:flex-wrap max-1lgx:px-5">
        <div className="flex max-1mdx:mx-auto max-1mdx:items-center max-1mdx:text-center flex-col gap-[25px]">
          <Image src={Logo} alt="Food Network.." />
          <div className="flex flex-col gap-[17px] font-roboto text-white opacity-70 text-sm leading-4">
            <span>{data.site}</span>
            <span>{data.email}</span>
            <span>Phone: {data.phone}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 max-xsm:grid-cols-2 items-center max-xsm:gap-y-14 gap-28 max-1lgx:mx-auto">
          <div className="flex flex-col">
            <h1 className="font-philosopher font-bold text-white text-lg leading-5 mb-6.8">
              Home
            </h1>
            <ul className="flex flex-col gap-5 font-roboto">
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/landing-page"}>Landingpage</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/documentation"}>Documentation</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/referral-program"}>Referral Program</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/design"}>UI & UX Design</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/web-design"}>Web Design</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-philosopher font-bold text-white text-lg leading-5 mb-6.8">
              Menu
            </h1>
            <ul className="flex flex-col gap-5 font-roboto">
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/landing-page"}>Landingpage</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/documentation"}>Documentation</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/referral-program"}>Referral Program</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/design"}>UI & UX Design</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/web-design"}>Web Design</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-philosopher font-bold text-white text-lg leading-5 mb-6.8">
              Company
            </h1>
            <ul className="flex flex-col gap-5 font-roboto">
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/landing-page"}>Landingpage</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/documentation"}>Documentation</Link>
              </li>
              <li className="text-white hover:opacity-100 opacity-70 text-sm leading-4 transition duration-500">
                <Link href={"/referral-program"}>Referral Program</Link>
              </li>
            </ul>
            <div className="flex items-center gap-2.5 mt-[25px] svg:cursor-pointer">
              <Link
                className="hover:scale-125 transition-transform duration-300"
                href={"#"}
              >
                <IconViber />
              </Link>
              <Link
                className="hover:scale-125 transition-transform duration-300"
                href={"#"}
              >
                <IconFacebook />
              </Link>
              <Link
                className="hover:scale-125 transition-transform duration-300"
                href={"#"}
              >
                <IconTwitter />
              </Link>
              <Link
                className="hover:scale-125 transition-transform duration-300"
                href={"#"}
              >
                <IconYouTube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
