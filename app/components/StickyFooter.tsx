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
        document.getElementById("root-html") as HTMLDivElement
      ).style.paddingBottom = `${h}px`;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {/* <div
        id="footer-transparent"
        className="bg-transparent container-1200 pointer-events-none"
      ></div> */}
      <footer className="flex flex-col bg-black text-white fixed bottom-0 w-full z-60">
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
            <div className="flex flex-col justify-between items-center md:items-end mt-12 md:mt-0 h-full gap-y-4 w-full md:w-auto">
              <div className="flex flex-row items-center w-full justify-between md:justify-end gap-x-auto md:gap-x-6 w-[70%] md:w-unset mx-auto">
                <a href="https://twitter.com/hackthisfall/" target="_blank">
                  <TwitterIcon color="white" />
                </a>
                <Link href="https://discord.hackthisfall.tech/" target="_blank">
                  <DiscordIcon color="white" />
                </Link>
                <Link href="https://instagram.com/hackthisfall" target="_blank">
                  <InstagramIcon color="white" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
                  target="_blank"
                >
                  <YoutubeIcon color="white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hackthisfall/"
                  target="_blank"
                >
                  <LinkedinIcon color="white" />
                </Link>
                <Link href="mailto:hackthisfall@gmail.com" target="_blank">
                  <EmailIcon color="white" />
                </Link>
              </div>
              <div className="flex flex-row gap-x-[0.5rem] md:gap-x-[2rem] text-[0.8rem] md:text-[1rem] items-center text-center  justify-between w-full md:w-unset">
                <Link
                  className="hover:underline hover:underline-offset-2	"
                  href="mailto:sponsorships@hackthisfall.tech"
                  target="_blank"
                >
                  Partner with us
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2	"
                  href="https://bit.ly/htf-brand"
                  target="_blank"
                >
                  Brand Guidelines
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2	"
                  href="/coc"
                >
                  Code of Conduct
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
