import { useEffect, useState } from "react";
import "../styles.css";
import Image from "next/image";
import btnTxt from "@/app/assets/images/button-text.svg";
import btnArrow from "@/app/assets/images/arrow-up-right.png";

export default function Hero({ navbarHeight }: { navbarHeight: number }) {
  useEffect(() => {
    const joinBtn = document.getElementById("join-btn");
    const bannerText = document.getElementById("banner-text");

    const handleScroll = () => {
      let scroll = window.scrollY;
      const heightToKickOut = window.innerHeight / 2;

      if (joinBtn) {
        joinBtn.style.right = `${10 - (scroll / heightToKickOut) * 30}%`;
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
      className="flex flex-col w-fit justify-center items-center cc container-1440 pointer-events-none bg-white z-[10]"
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

        <div className="w-[80%] md:w-[58%] mt-12 text-[1.6rem] leading-tight hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </div>

        <div
          id="banner-text"
          className="text-[3rem] md:text-[10rem] leading-tight text-[#0000000A] whitespace-nowrap font-bold pb-[2rem] md:pb-auto"
        >
          INNOVATE FOR GOOD
        </div>

        <div
          id="join-btn"
          className="absolute bg-[#FF9933] rounded-full w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] right-[10%] bottom-[10%] md:right-0 md:bottom-0 z-20 p-3 cursor-pointer pointer-events-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src={btnTxt}
              alt="Join the community"
              className="w-full h-full hidden md:block"
            />
            <Image
              src={btnArrow}
              alt="Arrow"
              className="absolute w-full h-full z-30 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
