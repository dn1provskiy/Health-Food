"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { NavigationItems } from "@/utils/Navigation";
import { IconMenu } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();

  const handlerMenu = () => {
    console.log(123);
  };

  return (
    <header>
      <div className="flex items-center justify-between max-xl:px-5 min-w-75 max-w-[1200px] mx-auto pt-7.5">
        <div className="flex items-center">
          <div></div>
          <Image src={Logo} alt="Food Network.." priority />
          <div className="flex gap-x-10 pl-8.5 font-roboto max-md:hidden">
            {NavigationItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`transition-colors duration-500 ${
                  pathname === item.path
                    ? "text-primary font-medium"
                    : "opacity-60"
                } hover:text-primary`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <button className="max-md:px-4 max-md:py-2.5 px-7.5 py-3.5 border-2 border-transparent hover:border-button hover:bg-transparent hover:text-primary shadow-lg shadow-black/10 hover:shadow-black/20 bg-primary rounded-md text-white font-roboto transition-colors duration-500">
          Booking Now
        </button>
      </div>
    </header>
  );
}
