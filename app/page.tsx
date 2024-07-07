"use client";

import useWindowSize from "./hooks/useWindowDimension";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollSection from "./components/HomePage/ScrollSection";

import "./styles.css";
import CommunityGlipses from "./components/HomePage/CommunityGlipmses";
import Sponsors from "./components/HomePage/Sponsors";
import Narratives from "./components/HomePage/Narratives";
import { useEffect, useRef, useState } from "react";
import OpenNavbar from "./components/OpenNavbar";
import StickyFooter from "./components/StickyFooter";
import Numbers from "./components/HomePage/Numbers";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";

const colors = ["#FF8000", "#4E9DFF", "#A163FF"];

export default function Home() {
  const { height, width } = useWindowSize();
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

  let sideInPx = 40;

  const cols = Math.floor(Math.min(width, 1440) / sideInPx);
  const extraWidth = Math.min(width, 1440) - cols * sideInPx;

  sideInPx += extraWidth / cols;

  const rows = Math.ceil(height / sideInPx);

  return (
    <>
      <div className="relative pointer-events-none">
        {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
        <Navbar
          setNavbarHeight={setNavbarHeight}
          setIsNavbarOpen={setIsNavbarOpen}
        />
        <div className="relative top-0 left-0 w-full bg-white rounded-b-3xl overflow-hidden pointer-events-auto pb-24">
          <Hero navbarHeight={navbarHeight} />
          <About />
          <WhatWeDo />
          {/* <ScrollSection /> */}
          <Numbers />
          {/* <Narratives /> */}
          <Sponsors />
        </div>
        <StickyFooter />
      </div>
    </>
  );
}
