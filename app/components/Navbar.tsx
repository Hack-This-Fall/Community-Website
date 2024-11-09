import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Burger from "../assets/images/navbar/burger.svg";
import Close from "../assets/images/navbar/close.svg";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "rooks";
import Link from "next/link";

const navbarElementsDefault = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Blog", link: "/blog" },
];

export default function Navbar({
  setNavbarHeight,
  setIsNavbarOpen,
}: {
  setNavbarHeight: Function;
  setIsNavbarOpen: Function;
}) {
  const ref = useRef<any>();
  const navbarLogo = useRef<any>();

  let onceHidden = false;

  const [isNavbarOpen, setNavbarOpen] = useState(true);

  useEffect(() => {
    setNavbarHeight(ref.current?.clientHeight);

    // console.log(ref.current?.clientHeight);
  });

  const { innerHeight: height, innerWidth: width } = useWindowSize();

  const handleScroll = () => {
    if (!height) return;

    const position = window.scrollY;

    if (!navbarLogo.current) return;

    if (position >= 100) {
      navbarLogo.current.style.opacity = "0";
    } else {
      navbarLogo.current.style.opacity = `${(1 - position / 100) * 2}`;
    }

    if (position >= height) {
      if (!onceHidden) {
        onceHidden = true;
        setNavbarOpen(false);
      }
    } else if (position <= height / 2) {
      onceHidden = false;
    } else {
      onceHidden = false;
    }

    if (position >= 0) Math.min(Math.floor(position / height), 3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const removeElement = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div
      className="sticky container-1200 py-4 md:py-8 absolute top-0 md:top-0 z-50"
      ref={ref}
    >
      <div className={`flex justify-between items-center block w-full `}>
        <Link href="/">
          <Image
            ref={navbarLogo}
            src={Logo}
            className="w-20 md:w-[7.5rem]"
            alt="logo"
          />
        </Link>
        <div
          className={` gap-x-12 font-outfit justify-between items-center font-regular text-xl border-[0.5px] border-black  py-4 rounded-full transition-all duration-100 ease-in-out bg-white hidden md:flex ${
            isNavbarOpen ? "w-fit px-6" : "w-fit px-4"
          }`}
        >
          {navbarElementsDefault.map((element, index) => (
            <Link
              href={element.link}
              key={element.name}
              className={`text-black pointer-events-auto cursor-pointer hidden md:inline-block ${
                isNavbarOpen ? null : " !hidden"
              }`}
            >
              {element.name}
            </Link>
          ))}
          <span
            className="text-black pointer-events-auto cursor-pointer hidden md:inline-block max-h-10"
            onClick={removeElement}
          >
            {isNavbarOpen ? (
              <Image src={Close} alt="toggle navbar" />
            ) : (
              <Image src={Burger} alt="toggle navbar" />
            )}
          </span>

          {/* <span
          className="bg-black ml-0 md:ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          <Image src={Burger} className="w-5 md:w-10" alt="logo" />
        </span> */}
        </div>
        <div
          className={`flex gap-x-12 font-outfit justify-between items-center font-regular text-xl  py-2 rounded-full transition-all duration-100 ease-in-out bg-white block md:hidden w-fit px-2`}
        >
          <span
            className="text-black pointer-events-auto cursor-pointer max-h-8"
            onClick={() => setIsNavbarOpen(true)}
          >
            <Image src={Burger} alt="toggle navbar" height={20} />
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
