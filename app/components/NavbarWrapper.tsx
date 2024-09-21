"use client";

import "../styles.css";
import { useState } from "react";
import OpenNavbar from "@/app/components/OpenNavbar";
import Navbar from "@/app/components/Navbar";

export default function NavbarWrapper() {
  const [navbarHeight, setNavbarHeight] = useState(149);

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const setIsNavbarOpen = (state: boolean) => {
    setNavbarOpen(state);

    if (state && window) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }
  };

  return (
    <>
      {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
      <Navbar
        setNavbarHeight={setNavbarHeight}
        setIsNavbarOpen={setIsNavbarOpen}
      />
    </>
  );
}
