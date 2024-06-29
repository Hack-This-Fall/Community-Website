import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Burger from "../assets/images/navbar/burger.svg";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "rooks";

const navbarElementsDefault = ["Home", "About", "Events", "Blog"];

export default function Navbar({
  setNavbarHeight,
  setIsNavbarOpen,
}: {
  setNavbarHeight: Function;
  setIsNavbarOpen: Function;
}) {
  const ref = useRef<any>();
  const navbarLogo = useRef<any>();

  const [navbarElements, setNavbarElements] = useState(navbarElementsDefault);

  const [isNavbarOpen, setNavbarOpen] = useState(true);

  useEffect(() => {
    setNavbarHeight(ref.current?.clientHeight);

    // console.log(ref.current?.clientHeight);
  });

  const { innerHeight: height, innerWidth: width } = useWindowSize();

  const handleScroll = () => {
    if (!height) return;

    const position = window.scrollY;

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

  const removeElement = () => {
    const newNavbarElements = [...navbarElements];
    newNavbarElements.pop();
    setNavbarElements(newNavbarElements);
  };

  return (
    <div
      className="sticky container-1200 py-4 md:py-8 absolute top-0 md:top-0 z-50  bg-white"
      ref={ref}
    >
      <div className={`flex justify-between items-center block w-full `}>
        <Image
          ref={navbarLogo}
          src={Logo}
          className="w-20 md:w-[7.5rem]"
          alt="logo"
        />
        <div
          className={
            `flex gap-x-12 font-outfit justify-between items-center font-regular text-xl border-[0.5px] border-black px-6 py-4 rounded-full transition-all duration-200  
                ease-in-out ` + isNavbarOpen
              ? "w-full"
              : "w-20"
          }
        >
          {isNavbarOpen &&
            navbarElements.map((element, index) => (
              <span className="text-black pointer-events-auto cursor-pointer hidden md:inline-block">
                {element}
              </span>
            ))}
          <span
            className="text-black pointer-events-auto cursor-pointer hidden md:inline-block"
            onClick={removeElement}
          >
            X
          </span>

          {/* <span
          className="bg-black ml-0 md:ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          <Image src={Burger} className="w-5 md:w-10" alt="logo" />
        </span> */}
        </div>
      </div>
    </div>
  );
}
