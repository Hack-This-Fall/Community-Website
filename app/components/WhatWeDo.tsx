import { useEffect, useState } from 'react';
import '../styles.css';
import Image from 'next/image';
import btnArrow from '@/app/assets/images/arrow-black.svg';
import randomImg from '@/app/assets/images/random.png';

export default function WhatWeDo() {
  return (
    <div className="flex flex-col w-full justify-center items-center cc bg-white z-[10] font-outfit text-white">
      <div className="bg-[#FF9933] w-full rounded-t-3xl">
        <div className="container-1200 font-medium text-4xl md:text-6xl py-6">
          What we do
        </div>
      </div>
      <div className="bg-[#FF9933] w-full">
        <div className="bg-[#000000] w-full rounded-t-3xl items-start">
          <div className="container-1200 py-24 flex flex-col">
            <span className="font-medium text-4xl md:text-6xl">Hackathons</span>
            <span className="font-regular text-lg md:text-xl mt-8 w-[95%]">
              Since 2020, Hack This Fall has hosted four successful hackathons,
              bringing together innovators worldwide with the shared aim of
              &quot;Innovate For Good.&quot; These events propel transformative
              projects, tackling varied challenges and sparking positive change.
              More than just coding sessions, our hackathons cultivate a dynamic
              space for learning, networking, and mentorship, empowering
              participants to express their creativity, hone technical skills,
              and solve problems in an environment conducive to innovation.
            </span>
            <a
              href="http://hackathon.hackthisfall.tech/"
              target="_blank"
              className="flex flex-row text-black align-center justify-center w-fit mt-6 gap-x-1"
            >
              <span className="text-lg bg-white px-10 py-3 rounded-full flex align-center justify-center">
                Explore Now
              </span>
              <span className="flex bg-white rounded-full h-parent px-5 align-center justify-center">
                <Image src={btnArrow} alt="Arrow" />
              </span>
            </a>
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
        </div>
      </div>
      <div className="bg-[#000000] w-full">
        <div className="bg-[#9933FF] w-full rounded-t-3xl">
          <div className="container-1200 py-24 flex flex-col">
            <span className="font-medium text-4xl md:text-6xl">
              Beyond Hackathons
            </span>
            <span className="font-regular text-lg md:text-xl mt-8 w-[95%]">
              We host a range of events beyond hackathons, uniting community,
              developers, and industry pros for hands-on learning and
              networking. &quot;Build With Events,&quot; our flagship gatherings
              in partnership with product-based organizations, offer workshops,
              panel discussions, and tech talks, fostering innovation and
              collaboration. These events provide invaluable opportunities for
              learning, building, and networking, enriching the experiences of
              our diverse community members.
            </span>
            <a
              href="https://hackthisfall.tech/events"
              target="_blank"
              className="flex flex-row text-black align-center justify-center w-fit mt-6 gap-x-1"
            >
              <span className="text-lg bg-white px-10 py-3 rounded-full flex align-center justify-center">
                Explore Now
              </span>
              <span className="flex bg-white rounded-full h-parent px-5 align-center justify-center">
                <Image src={btnArrow} alt="Arrow" />
              </span>
            </a>
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
        </div>
      </div>
    </div>
  );
}
