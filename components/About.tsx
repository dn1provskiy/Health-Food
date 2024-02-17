import Image from "next/image";
import AboutUs from "../app/assets/about.png";

export default function About() {
  return (
    <div className="flex max-lgx:flex-col-reverse justify-center items-center max-xs:px-3.5 max-lgx:gap-12 gap-24 mx-auto max-lgx:mb-24 min-w-75 max-[500px]:mb-12 max-mobile:mb-5 mb-[115px]">
      <Image src={AboutUs} alt="About image.." quality={100} />
      <div className="flex flex-col items-start max-xs:w-full w-[475px] max-lgx:items-center max-lgx:text-center">
        <h1 className="uppercase font-roboto font-medium leading-6 tracking-md mb-2.5 text-about">
          About us
        </h1>
        <span className="font-philosopher font-bold text-aboutSize leading-about mb-7.5">
          Food Stalls with Persons but to Product marketing plane catlogues etc
          to.
        </span>
        <p className="font-roboto leading-6 mb-7.1 opacity-70">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also equipment make
          your marketing plane Effective.
        </p>
        <button
          className="max-mobile:w-full px-7.5 max-mobile:py-4 py-3 bg-primary rounded-md font-roboto font-medium leading-4.5 text-white
          shadow-lg shadow-black/20 border-1.5 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-500
          "
        >
          Read More
        </button>
      </div>
    </div>
  );
}
