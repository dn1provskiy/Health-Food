"use client";

import { useState } from "react";
import './Testimonial.css';
import { SliderList } from "@/utils/Slider";
import { IconArrowLeft, IconArrowRight } from "./icons";
import Image from "next/image";
import { Stars } from "./Stars";

const Testimonial = () => {
  const [isPage, setIsPage] = useState(0);
  const prevPage = () => {
    if(isPage === 0) return false;
    if(document.querySelector('.slider')?.classList.contains('animation__slider')) return false;

    setIsPage(isPage - 1);
    document.querySelector('.slider')?.classList.add('animation__slider');

    setTimeout(() => {
      document.querySelector('.slider')?.classList.remove('animation__slider');
    }, 2000);
  }

  const nextPage = () => {
    if(SliderList.length - 1 === isPage) return false;
    if(document.querySelector('.slider')?.classList.contains('animation__slider')) return false;

    setIsPage(isPage + 1);
    document.querySelector('.slider')?.classList.add('animation__slider');

    setTimeout(() => {
      document.querySelector('.slider')?.classList.remove('animation__slider');
    }, 2000);
  }
  
  return (
    <div className="flex flex-col gap-y-18.5 max-lgx:w-full max-lgx:px-5 min-w-75 w-[804px] mx-auto max-3xMobile:mb-12 mb-30">
      <div className="text-center max-2xs:px-3.5">
        <h1 className="uppercase text-primary opacity-70 font-roboto font-medium leading-6 tracking-md mb-3">
          Testimonial
        </h1>
        <span className="block font-bold font-philosopher text-testimonial leading-6 mb-6">
          Making Food great again and again
        </span>
        <p className="font-roboto leading-6 opacity-70">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage
          <br />
          Customers, Effective Product catlogues etc to make your.
        </p>
      </div>
      <div className="flex max-3xMobile:flex-col max-3xMobile:gap-y-7.5 items-center 3xMobile:justify-between px-5">
        <button className="max-3xMobile:hidden" onClick={prevPage}>
          <IconArrowLeft type={isPage === 0 ? 0 : 1} />
        </button>

        <div className="flex max-3xMobile:w-full w-[506px] overflow-hidden text-center slider">
          <div
            className="flex-[1_0_100%] flex flex-col items-center justify-center"
          >
            <Image className="mb-10.5" src={SliderList[isPage].img} alt={SliderList[isPage].name} />
            <div className="w-[506px] max-3xMobile:w-full max-3xMobile:px-2">
              <p className="font-roboto text-black leading-6 mb-5">
                {SliderList[isPage].description}
              </p>
            </div>
            <Stars star={SliderList[isPage].stars} />
            <div className="flex flex-col gap-1.5 mt-8 font-roboto text-black">
              <h1 className="leading-4.5">{SliderList[isPage].name}</h1>
              <span className="text-xs leading-3.5">{SliderList[isPage].profession}</span>
            </div>
          </div>
        </div>

        <button className="max-3xMobile:hidden" onClick={nextPage}>
          <IconArrowRight type={isPage === SliderList.length - 1 ? 0 : 1} />
        </button>

        <div className="flex flex-wrap justify-center items-center gap-y-1.5 gap-x-10 3xMobile:hidden max-mobile:px-3.5">
          <button className={`flex items-center gap-3 text-black ${isPage === 0 ? 'opacity-50' : 'opacity-100'}`} onClick={prevPage}>
            <IconArrowLeft type={isPage === 0 ? 0 : 1} />
            Предыдущее
          </button>
          <button className={`flex items-center gap-3 text-black ${isPage === SliderList.length - 1 ? 'opacity-50' : 'opacity-100'}`} onClick={nextPage}>
            Следующее
            <IconArrowRight type={isPage === SliderList.length - 1 ? 0 : 1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
