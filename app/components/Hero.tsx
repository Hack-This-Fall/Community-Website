import { useEffect, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import "../styles.css";
import Image from "next/image";
import btnTxt from "@/app/assets/images/button-text.svg";
import btnArrow from "@/app/assets/images/arrow-up-right.png";

export default function Hero({ navbarHeight }: { navbarHeight: number }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  useEffect(() => {
    const joinBtn = document.getElementById("join-btn");
    const bannerText = document.getElementById("banner-text");

    const handleScroll = () => {
      let scroll = window.scrollY;
      const heightToKickOut = window.innerHeight / 2;
      const windowWidth = window.innerWidth;

      if (joinBtn) {
        if (windowWidth < 600) {
          joinBtn.style.right = `${10 - (scroll / heightToKickOut) * 30}%`;
        } else {
          joinBtn.style.right = `${0 - (scroll / heightToKickOut) * 30}%`;
        }
        joinBtn.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
      }

      if (bannerText) {
        bannerText.style.marginLeft = `-${(scroll / heightToKickOut) * 40}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div
      className="flex flex-col w-fit justify-center items-center cc container-1440 bg-white z-[10]"
      style={{
        maxHeight: `calc(100vh - ${navbarHeight}px)`,
        height: `calc(100vh - ${navbarHeight}px)`,
        zIndex: 1000000000,
      }}
    >
      <div
        className="font-outfit flex flex-col items-start container-1200 w-full relative h-full md:h-auto justify-between"
        style={{ maxWidth: "min(100vw, 1200px)" }}
      >
        <div className="font-outfit font-medium md:text-6xl w-full">
          <div className="text-[3rem] md:text-[5.5rem] leading-[5rem] md:leading-[7.5rem] flex flex-col md:flex-row items-center gap-x-6">
            <span className="self-start md:self-center">Empowering </span>
            <span className="font-againstHistory text-[#A64DFF] text-[7rem] md:text-[10rem] self-end md:self-center">
              Builders
            </span>
          </div>
          <div className="text-[3rem] md:text-[5.5rem] tracking-wide leading-[5rem] md:leading-[7.5rem] flex flex-col md:flex-row items-center gap-x-6">
            <span className="self-start md:self-center">Enabling </span>
            <span className="font-againstHistory text-[#FF9933] text-[7rem] md:text-[10rem] self-end md:self-center">
              Innovation
            </span>
          </div>
        </div>

        <div className="w-[80%] md:w-[58%] mt-12 text-[1.6rem] leading-tight md:block mt-[-2rem] md:mt-12 pb-[1.5rem] md:pb-0">
          {!isMobile
            ? `Welcome to Hack This Fall! Join one of India's most thriving
          hacker communities to build groundbreaking solutions, inspire
          problem-solvers, and grow together in a diverse, supportive
          environment.`
            : `Welcome to Hack This Fall! Join one of India's most thriving
          hacker communities.`}
        </div>

        <div
          id="banner-text"
          className="text-[3rem] md:text-[10rem] leading-tight text-[#0000000A] whitespace-nowrap font-bold pb-2 md:pb-auto"
        >
          INNOVATE FOR GOOD
        </div>

        <a
          href="https://discord.hackthisfall.tech"
          target="_blank"
          id="join-btn"
          className="absolute bg-[#FF9933] rounded-full w-[8rem] h-[8rem] md:w-[16rem] md:h-[16rem] right-[6%] bottom-[6%] md:right-0 md:bottom-0 z-20 p-3 cursor-pointer pointer-events-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src={btnTxt}
              alt="Join the community"
              className="w-full h-full md:block rotate-90"
            />
            <Image
              src={btnArrow}
              alt="Arrow"
              className="absolute w-full h-full z-30 top-0 "
            />
          </div>
        </a>
      </div>
    </div>
  );
}
