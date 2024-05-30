import { useEffect } from "react";
import "../styles.css";
import Image from "next/image";
import btnArrow from "@/app/assets/images/arrow-up-right.png";

export default function About() {
  useEffect(() => {
    const aboutBtn = document.getElementById("move-in-btn");
    const aboutBtnMob = document.getElementById("move-in-btn-mob");
    const about = document.getElementById("about");

    const handleScroll = () => {
      let scroll = window.scrollY;
      const windowWidth = window.innerWidth;

      const position = about?.offsetHeight || 0;

      const numberOfPixelsToCompleteAnimation = 400;

      const normalise = (num: number) => {
        const res = num / numberOfPixelsToCompleteAnimation;
        if (res < 0) return 0;
        if (res > 1) return 1;
        return res;
      };

      const startPoint = (position * 2) / 3;

      // if (scroll < startPoint) return;
      // if (scroll > startPoint + numberOfPixelsToCompleteAnimation) return;

      if (windowWidth < 640) {
        if (aboutBtnMob) {
          aboutBtnMob.style.left =
            normalise(scroll - startPoint) * 50 - 50 + "%";
          aboutBtnMob.style.transform =
            "rotate(" + (normalise(scroll - startPoint) * 50 - 50) * 4 + "deg)";
        }
      } else {
        if (aboutBtn) {
          aboutBtn.style.left = normalise(scroll - startPoint) * 50 - 50 + "%";
          aboutBtn.style.transform =
            "rotate(" + (normalise(scroll - startPoint) * 50 - 50) * 8 + "deg)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col w-fit justify-center items-center cc container-1440 pointer-events-none bg-white z-[10]"
    >
      <div className="flex flex-col items-start container-1200 relative font-outfit">
        <div className="font-outfit font-medium md:text-6xl flex flex-col w-full">
          <div className="text-[2rem] md:text-[6.6rem] leading-[7.5rem] tracking-wide flex flex-row align-center font-semibold">
            <span>We are not just a</span>
          </div>
          <div className="tracking-wide leading-[0rem] md:leading-[7.5rem] flex flex-row align-center self-end pr-2 md:pr-36 mt-2 md:mt-8 ">
            <span className="font-againstHistory text-[#FF9933] text-[4rem] md:text-[10rem]">
              Hacker community
            </span>
          </div>
        </div>

        <div className="w-full md:w-[55%] mt-28 text-[1.3rem] md:text-[1.6rem] leading-tight self-end mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
          sit amet, consectetur adipisc
        </div>

        <div
          id="move-in-btn"
          className="absolute bg-[#FF9933] rounded-full w-[16rem] h-[16rem] -left-[50%] bottom-0 z-20 p-3 mb-16 hidden md:block"
        >
          <div className="relative w-full h-full">
            <Image
              src={btnArrow}
              alt="Arrow"
              className="absolute w-full h-full z-30 top-0"
            />
          </div>
        </div>

        <div className="relative w-[12rem] h-[12rem] block md:hidden">
          <div
            id="move-in-btn-mob"
            className="absolute bg-[#FF9933] rounded-full w-[12rem] h-[12rem] left-[0%] bottom-0 z-20 p-3 mb-16 block md:hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={btnArrow}
                alt="Arrow"
                className="absolute w-full h-full z-30 top-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
