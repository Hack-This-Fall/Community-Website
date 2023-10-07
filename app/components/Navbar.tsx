import Image from "next/image";
import Logo from "../assets/images/logo.svg";
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
      className={`flex justify-between items-center px-4 md:px-14 py-4 md:py-10 z-50 block w-full absolute top-0 md:top-0 pointer-events-none sticky container-1440`}
    >
      <Image ref={navbarLogo} src={Logo} className="w-20 md:w-40" alt="logo" />
      <div className="flex font-raleway justify-between items-center font-semibold">
        <span className="navbar-community py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer hidden md:inline-block">
          Join our community
        </span>

        <span
          className="bg-black ml-0 md:ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          <Image src={Burger} className="w-5 md:w-10" alt="logo" />
        </span>
      </div>
    </div>
  );
}
