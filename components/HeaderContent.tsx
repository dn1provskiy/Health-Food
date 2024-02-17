import Image from "next/image";
import HealthFood from "../app/assets/health-food.png";

export default function HeaderContent() {
  return (
    <div className="max-xl:px-3.5 flex max-lg:flex-wrap items-center max-lg:justify-center justify-between min-w-75 max-w-[1200px] mx-auto max-lg:mb-0 mb-[223px]">
      <div className="flex flex-col max-w-[555px] pt-[160px] max-lg:pt-20 max-mobile:pt-14 max-lg:w-full max-lg:mb-20 max-lg:text-center max-lg:items-center">
        <h1 className="font-philosopher font-bold text-5xl mb-10.5">
          Making time a good time by making food the good food.
        </h1>
        <p className="font-roboto font-medium mb-13 opacity-70">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div className="flex gap-x-7.5 font-roboto font-medium max-mobile:flex-col max-mobile:gap-y-5 max-mobile:w-full max-mobile:px-5">
          <button
            className="bg-primary bord1er-1.5 border-primary rounded-md py-4.5 px-10 text-white
                  hover:bg-transparent hover:text-primary shadow-lg shadow-black/20 hover:shadow-black/10 transition-colors duration-500"
          >
            Order Now
          </button>
          <button
            className="
                  border-1.5 border-primary rounded-md py-4.5 px-10
                  text-primary hover:bg-primary hover:text-white shadow-lg shadow-black/10 hover:shadow-black/20 transition-colors duration-500"
          >
            Food Details
          </button>
        </div>
      </div>
      <Image className="max-lg:hidden" src={HealthFood} alt="Health Food.." priority />
    </div>
  );
}
