import { FeaturesList } from "@/utils/Features";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col items-center min-w-75 max-lgx:mb-20 max-mobile:mb-15 mb-[124px]">
      <div className="max-lgx:mb-16 mb-10 text-center max-mobile:px-2.5">
        <h1 className="uppercase font-roboto font-medium text-primary tracking-lt mb-2">
          Features
        </h1>
        <span className="font-philosopher text-features leading-features">
          Food with a New Passion
        </span>
      </div>
      <div className="max:mobilew-full flex flex-wrap max-lgx:justify-center gap-x-[90px] max-lgx:gap-y-20 max-mobile:gap-y-16">
        {FeaturesList.map((item, index) => (
          <div
            key={index}
            className="max-mobile:w-full w-[300px] flex flex-col items-center text-center max-mobile:px-3.5"
          >
            <div
              className={`flex justify-center w-[88px] h-[88px] max-mobile:mb-3 mb-8.5 rounded-full ${item.bg}`}
            >
              <Image className="w-full h-auto" src={item.image} alt={item.title} />
            </div>
            <h1 className="max-mobile:mb-2 mb-3.5 font-philosopher font-bold text-featuresItem">
              {item.title}
            </h1>
            <p className="font-roboto leading-6 opacity-70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
