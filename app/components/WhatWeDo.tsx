import { useEffect, useState } from "react";
import "../styles.css";
import btnArrow from "@/app/assets/images/arrow-black.svg";
import randomImg from "@/app/assets/images/random.png";
import { Image } from "@chakra-ui/react";

const card1Images = [
  "/images/home/card1/1.png",
  "/images/home/card1/2.png",
  "/images/home/card1/3.png",
  "/images/home/card1/4.png",
  "/images/home/card1/5.png",
  "/images/home/card1/6.png",
  "/images/home/card1/7.png",
];

const card2Images = [
  "/images/home/card2/1.png",
  "/images/home/card2/2.png",
  "/images/home/card2/3.png",
  "/images/home/card2/4.png",
  "/images/home/card2/5.png",
  "/images/home/card2/6.png",
  "/images/home/card2/7.png",
  "/images/home/card2/8.png",
  "/images/home/card2/9.png",
  "/images/home/card2/10.png",
];

export default function WhatWeDo() {
  return (
    <div className="flex flex-col w-full justify-center items-center cc bg-white z-[10] font-outfit text-white">
      {/* <div className="bg-[#FF9933] w-full rounded-t-3xl">
        <div className="container-1200 font-medium text-4xl md:text-6xl py-6">
          What we do
        </div>
      </div> */}
      <div className="bg-[#000000] container-1200 px-4 md:px-12 rounded-3xl items-start overflow-hidden">
        <div className=" py-16 flex flex-col">
          <span className="font-medium text-lg md:text-2xl">What we do</span>
          <span className="font-medium text-4xl md:text-6xl mt-4">
            Hackathons
          </span>
          <span className="font-regular text-lg md:text-xl mt-8 w-[95%]">
            Since 2020, Hack This Fall has hosted four successful hackathons,
            bringing together innovators worldwide with the shared aim of
            &quot;Innovate For Good.&quot; These events propel transformative
            projects, tackling varied challenges and sparking positive change.
            More than just coding sessions, our hackathons cultivate a dynamic
            space for learning, networking, and mentorship, empowering
            participants to express their creativity, hone technical skills, and
            solve problems in an environment conducive to innovation.
          </span>
          <a
            href="http://hackathon.hackthisfall.tech/"
            target="_blank"
            className="explore-button flex flex-row text-black align-center justify-center w-fit mt-6 gap-x-1"
          >
            <span className="text-lg bg-white px-10 py-3 rounded-full flex align-center justify-center">
              Explore Now
            </span>
            <span className="arrow flex bg-white rounded-full h-parent px-5 items-center justify-center">
              <Image src={btnArrow} alt="Arrow" />
            </span>
          </a>
          <div className="flex flex-row mt-12 gap-x-4 md:gap-x-8 moving-animation">
            {card1Images.map((image) => (
              <Image
                key={image}
                src={image}
                // width={200}
                // height={200}
                alt="Random"
                className="h-[8rem] md:h-[15rem] w-auto rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#9933FF] container-1200 px-12 rounded-3xl mt-12 ">
        <div className=" py-16 flex flex-col">
          <span className="font-medium text-4xl md:text-6xl">
            Beyond Hackathons
          </span>
          <span className="font-regular text-lg md:text-xl mt-8 w-[95%]">
            We host a range of events beyond hackathons, uniting community,
            developers, and industry pros for hands-on learning and networking.
            &quot;Build With Events,&quot; our flagship gatherings in
            partnership with product-based organizations, offer workshops, panel
            discussions, and tech talks, fostering innovation and collaboration.
            These events provide invaluable opportunities for learning,
            building, and networking, enriching the experiences of our diverse
            community members.
          </span>
          <a
            href="https://hackthisfall.tech/events"
            target="_blank"
            className="explore-button flex flex-row text-black align-center justify-center w-fit mt-6 gap-x-1"
          >
            <span className="text-lg bg-white px-10 py-3 rounded-full flex align-center justify-center">
              Explore Now
            </span>
            <span className="arrow flex bg-white rounded-full h-parent px-5 items-center justify-center">
              <Image src={btnArrow} alt="Arrow" />
            </span>
          </a>
          <div className="flex flex-row mt-12 gap-x-4 md:gap-x-8 w-fit moving-animation">
            {card2Images.map((image) => (
              <Image
                key={image}
                src={image}
                // width={256}
                // height={256}
                alt="Random"
                className="h-[8rem] md:h-[15rem] w-[auto] rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
