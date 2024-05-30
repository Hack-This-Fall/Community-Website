import { useEffect, useState } from "react";
import "../styles.css";
import Image from "next/image";
import btnArrow from "@/app/assets/images/arrow-black.svg";
import randomImg from "@/app/assets/images/random.png";

function Content() {
  return (
    <div className="container-1200 py-24 flex flex-col">
      <span className="font-medium text-4xl md:text-6xl">Hackathons</span>
      <span className="font-regular text-lg md:text-xl mt-8 w-[95%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
        adipisc
      </span>
      <div className="flex flex-row text-black align-center justify-center w-fit mt-6 gap-x-1">
        <span className="text-lg bg-white px-10 py-3 rounded-full flex align-center justify-center">
          Explore Now
        </span>
        <span className="flex bg-white rounded-full h-parent px-5">
          <Image src={btnArrow} alt="Arrow" />
        </span>
      </div>
      <div className="flex flex-row mt-12 gap-x-4 md:gap-x-8">
        <Image
          src={randomImg}
          alt="Random"
          className="h-[8rem] md:h-[15rem] w-auto "
        />
        <Image
          src={randomImg}
          alt="Random"
          className="h-[8rem] md:h-[15rem] w-auto "
        />
        <Image
          src={randomImg}
          alt="Random"
          className="h-[8rem] md:h-[15rem] w-auto "
        />
        <Image
          src={randomImg}
          alt="Random"
          className="h-[8rem] md:h-[15rem] w-auto "
        />
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <div className="flex flex-col w-full justify-center items-center cc pointer-events-none bg-white z-[10] font-outfit text-white">
      <div className="bg-[#FF9933] w-full rounded-t-3xl">
        <div className="container-1200 font-medium text-4xl md:text-6xl py-6">
          What we do
        </div>
      </div>
      <div className="bg-[#FF9933] w-full">
        <div className="bg-[#000000] w-full rounded-t-3xl items-start">
          <Content />
        </div>
      </div>
      <div className="bg-[#000000] w-full">
        <div className="bg-[#9933FF] w-full rounded-t-3xl">
          <Content />
        </div>
      </div>
    </div>
  );
}
