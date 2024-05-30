"use client";

import Image from "next/image";
import logo from "@/app/assets/images/logo-dark.png";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DiscordIcon from "./icons/socials/Discord";
import TwitterIcon from "./icons/socials/Twitter";
import LinkedinIcon from "./icons/socials/Linkedin";
import YoutubeIcon from "./icons/socials/Youtube";
import InstagramIcon from "./icons/socials/Instagram";
import EmailIcon from "./icons/socials/Email";

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
          <div className="ifg flex flex-col font-outfit overflow-hidden mt-8 md:mt-12">
            <div className="flex flex-row text-[1.8rem] md:text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] ml-[-65%] md:ml-[-46%] leading-none	">
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
            </div>
            <div className="flex flex-row text-[1.8rem] md:text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] ml-[-83%] md:ml-[-58%] leading-none ">
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
              <span>INNOVATE FOR GOOD</span>
              <span className="text-w-outline">INNOVATE FOR GOOD</span>
            </div>
          </div>

          <div className="container-1200 flex flex-col md:flex-row justify-between items-center mt-[3rem] md:mt-[7rem] mb-[3rem]">
            <Image src={logo} alt="logo" className="w-[70%] md:w-[10rem]" />
            <div className="flex flex-col justify-between items-center md:items-end mt-12 md:mt-0 h-full gap-y-4 w-full">
              <div className="flex flex-row items-center w-full justify-between w-[70%] md:w-unset mx-auto">
                <Link href={"#"}>
                  <DiscordIcon color="white" />
                </Link>
                <Link href={"#"}>
                  <TwitterIcon color="white" />
                </Link>
                <Link href={"#"}>
                  <InstagramIcon color="white" />
                </Link>
                <Link href={"#"}>
                  <YoutubeIcon color="white" />
                </Link>
                <Link href={"#"}>
                  <LinkedinIcon color="white" />
                </Link>
                <Link href={"#"}>
                  <EmailIcon color="white" />
                </Link>
              </div>
              <div className="flex flex-row gap-x-[0.5rem] md:gap-x-[2rem] text-[0.8rem] md:text-[1rem] items-center text-center justify-between w-full">
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
