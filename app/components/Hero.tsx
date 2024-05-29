import { useEffect, useState } from "react";
import "../styles.css";

export default function Hero({ navbarHeight }: { navbarHeight: number }) {
  return (
    <div
      className="flex flex-col w-fit justify-center items-center h-[100vh] cc container-1440 pointer-events-none bg-white z-[10]"
      style={{
        height: `calc(100vh - ${navbarHeight}px)`,
        zIndex: 1000000000,
      }}
    >
      <div className="flex flex-col items-start container-1200">
        <div className="font-outfit font-medium md:text-6xl ">
          <div className="text-[5.6rem] leading-[7.5rem] flex flex-row align-center gap-x-6">
            <span>Empowering </span>
            <span className="font-againstHistory text-[#A64DFF] text-[10rem]">
              Builders
            </span>
          </div>
          <div className="text-[5.5rem] tracking-wide leading-[7.5rem] flex flex-row align-center gap-x-6">
            <span>Enabling </span>
            <span className="font-againstHistory text-[#FF9933] text-[10rem]">
              Innovation
            </span>
          </div>
        </div>

        <div className="w-[80%] md:w-[55%] mt-12 text-[1.6rem] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </div>

        <div className="text-[10rem] leading-tight text-[#0000000A] whitespace-nowrap font-bold">
          INNOVATE FOR GOOD
        </div>
      </div>
    </div>
  );
}
