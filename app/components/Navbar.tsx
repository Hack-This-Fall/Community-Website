import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Burger from "../assets/images/navbar/burger.svg";
import { useEffect, useRef } from "react";
import { useWindowSize } from "rooks";

export default function Navbar({
  setNavbarHeight,
  setIsNavbarOpen,
}: {
  setNavbarHeight: Function;
  setIsNavbarOpen: Function;
}) {
  const ref = useRef<any>();
  const navbarLogo = useRef<any>();

  useEffect(() => {
    setNavbarHeight(ref.current?.clientHeight);

    // console.log(ref.current?.clientHeight);
  });

  const { innerHeight: height, innerWidth: width } = useWindowSize();

  const handleScroll = () => {
    if (!height) return;

    const position = window.scrollY;

    // console.log(position, height);

    if (position >= height) {
      navbarLogo.current.style.opacity = "0";
    } else if (position <= height / 2) {
      navbarLogo.current.style.opacity = "1";
    } else {
      navbarLogo.current.style.opacity = `${(1 - position / height) * 2}`;
    }

    if (position >= 0) Math.min(Math.floor(position / height), 3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center py-4 md:py-8 z-50 block w-full absolute top-0 md:top-0 sticky container-1200`}
    >
      <Image
        ref={navbarLogo}
        src={Logo}
        className="w-20 md:w-[7.5rem]"
        alt="logo"
      />
      <div className="flex gap-x-12 font-outfit justify-between items-center font-regular text-xl mix-blend-exclusion	">
        <span className="text-black pointer-events-auto cursor-pointer hidden md:inline-block">
          Home
        </span>
        <span className="text-black pointer-events-auto cursor-pointer hidden md:inline-block">
          About
        </span>
        <span className="text-black pointer-events-auto cursor-pointer hidden md:inline-block">
          Events
        </span>
        <span className="text-black pointer-events-auto cursor-pointer hidden md:inline-block">
          Blog
        </span>

        {/* <span
          className="bg-black ml-0 md:ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          <Image src={Burger} className="w-5 md:w-10" alt="logo" />
        </span> */}
      </div>
    </div>
  );
}
