"use client";

import Image from "next/image";
import logo from "@/app/assets/images/logo-dark.png";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function StickyFooter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = ref.current?.clientHeight;

    try {
      (
        document.getElementById("footer-transparent") as HTMLDivElement
      ).style.height = `${h}px`;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div
        id="footer-transparent"
        className="bg-transparent container-1200"
      ></div>
      <footer className="flex flex-col bg-black text-white fixed bottom-0 w-full">
        <div ref={ref} className="mt-[3rem]">
          <div className="ifg flex flex-col font-outfit overflow-hidden mt-12">
            <div className="flex flex-row text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] ml-[-46%] leading-none	">
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
            </div>
            <div className="flex flex-row text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] leading-none	 ml-[-58%]">
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
            </div>
          </div>

          <div className="max-w-[1200px] w-[100%] flex flex-row justify-between mt-[7rem] mb-[3rem] mx-auto">
            <Image src={logo} alt="logo" className="w-[10rem]" />
            <div className="flex flex-col justify-between items-end ">
              <div className="flex flex-row gap-x-[2rem]">
                <Link href={"#"}>D</Link>
                <Link href={"#"}>X</Link>
                <Link href={"#"}>I</Link>
                <Link href={"#"}>Y</Link>
                <Link href={"#"}>L</Link>
                <Link href={"#"}>M</Link>
              </div>
              <div className="flex flex-row gap-x-[2rem]">
                <Link href="/sponsorship">Sponsorship</Link>
                <Link href={"#"}>Data Policy</Link>
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>Code of Conduct</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
