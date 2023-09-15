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
  const ref = useRef();

  useEffect(() => {
    setNavbarHeight(ref.current?.clientHeight);

    console.log(ref.current?.clientHeight);
  });

  const navbarItems = ["ABOUT ME", "EXPERIENCE", "COMMUNITIES", "INITIATIVES"];

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center px-14 py-10 z-50 block w-full absolute top-0  pointer-events-none sticky`}
    >
      <Image src={Logo} className="w-40" alt="logo" />
      <div className="flex font-raleway justify-between items-center font-semibold">
        <span className="navbar-community py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer">
          Join our community
        </span>

        <span
          className="bg-black ml-4 py-2 px-6 rounded-full text-white pointer-events-auto cursor-pointer"
          onClick={() => setIsNavbarOpen(true)}
        >
          ==
        </span>
      </div>
    </div>
  );
}
