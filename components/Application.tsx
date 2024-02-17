import Image from "next/image";
import Phone from "@/app/assets/phone.png";
import { IconAppStore, IconGooglePlay } from "./icons";

export default function Application() {
  return (
    <div className="max-2lgx:flex-col max-lgx:px-3.5 max-2lgx:py-16 max-mobile:py-10 flex justify-center items-center min-w-75 min-2lgx:h-[518px] bg-application gap-application max-2lgx:mt-28 max-1xMobile:mt-13 mt-[187px] max-3xMobile:mb-12 max-2lgx:mb-20 mb-[140px]">
      <div className="w-[555px] max-1xs:w-full max-2lgx:flex max-2lgx:flex-col max-2lgx:items-center max-2lgx:text-center">
        <h1 className="uppercase font-roboto font-medium text-primary opacity-70 leading-6 tracking-md mb-1.2">
          Take away
        </h1>
        <span className="block font-philosopher font-bold text-appSize leading-application mb-7.1">
          Food Stalls with Persons but to
          <br />
          Product marketing plane.{" "}
        </span>
        <p className="font-roboto leading-6 opacity-70 mb-10">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipmentwith Persons but also Just Food Stalls with Persons.
        </p>
        <div className="flex max-1xMobile:flex-col max-1xMobile:gap-y-4 items-center gap-x-7.5 ">
          <button className="flex gap-x-2 items-center bg-appStore rounded-md max-1xMobile:px-16 py-2.6 px-7 text-white hover:scale-110 transition duration-500 font-roboto font-medium">
            <IconAppStore />
            App Store
          </button>
          <button className="flex items-center gap-x-2 max-1xMobile:px-14 py-2.6 px-7 border-1.5 border-dark bg-transparent rounded-md shadow hover:scale-110 transition duration-500 font-roboto font-medium">
            <IconGooglePlay />
            Google Play
          </button>
        </div>
      </div>
      <Image
        className="2lgx:scale-[1.15]"
        src={Phone}
        alt="Application"
        quality={100}
      />
    </div>
  );
}
