import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import { useEffect, useRef } from "react";

export default function Navbar({
  setNavbarHeight,
  setIsNavbarOpen,
}: {
  setNavbarHeight: Function;
  setIsNavbarOpen: Function;
}) {
  const ref = useRef<any>();

  useEffect(() => {
    setNavbarHeight(ref.current?.clientHeight);

    console.log(ref.current?.clientHeight);
  });

  const navbarItems = ["ABOUT ME", "EXPERIENCE", "COMMUNITIES", "INITIATIVES"];

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center px-4 md:px-14 py-4 md:py-10 z-50 block w-full absolute top-6 md:top-0 pointer-events-none sticky`}
    >
      <Image src={Logo} className="w-20 md:w-40" alt="logo" />
      <div className="flex font-raleway justify-between items-center font-semibold">
        <span className="navbar-community py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer hidden md:inline-block">
          Join our community
        </span>

        <span
          className="bg-black ml-0 md:ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          ==
        </span>
      </div>
    </div>
  );
}
