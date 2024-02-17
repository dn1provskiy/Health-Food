import Image from "next/image";
import Link from "next/link";
import { MenuList } from "@/utils/Menu";
import { Stars } from "./Stars";
import { IconMenuAdd } from "./icons";

export function MenuCards() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center max-mobile:mt-10 mt-14.5 gap-7.5 mb-13 max-mobile:w-full">
        {MenuList.map((item) => (
          <div
            key={item.id}
            className="flex max-mobile:w-full flex-col w-[360px] rounded-tl-[80px] rounded-tr-xl rounded-b-lg border border-black/10 shadow-md shadow-black/10"
          >
            <Image className="w-full mb-5.1" src={item.img} alt={item.name} />
            <div className="flex flex-col gap-5 px-6.5 mb-6.5">
              <div className="flex items-center justify-between font-philosopher font-bold text-cardSize leading-6">
                <span>{item.name}</span>
                <span>{item.price}$</span>
              </div>
              <p className="font-roboto leading-6 opacity-70">
                {item.description}
              </p>
              <div className="flex justify-between">
                <Link
                  href={""}
                  className="bg-primary rounded-lg p-3 hover:shadow-lg hover:shadow-black/50 transition-shadow duration-500"
                >
                  <IconMenuAdd />
                </Link>
                <Stars star={item.stars} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="border border-primary bg-transparent px-7.5 py-3 rounded-md font-roboto font-medium leading-4.5 text-primary
      hover:bg-primary hover:text-white shadow-lg shadow-black/10 hover:shadow-black/20 transition duration-500"
      >
        Learn More
      </button>
    </div>
  );
}
