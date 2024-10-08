"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CommunityGlipses from "../components/HomePage/CommunityGlipmses";
import Narratives from "../components/HomePage/Narratives";
import ScrollSection from "../components/HomePage/ScrollSection";
import Sponsors from "../components/HomePage/Sponsors";
import Navbar from "../components/Navbar";
import OpenNavbar from "../components/OpenNavbar";
import useWindowSize from "../hooks/useWindowDimension";

const colors = ["#FF8000", "#4E9DFF", "#A163FF"];

const Box = ({ sideInPx }: { sideInPx: number }) => {
  return (
    <motion.div
      style={{
        border: "0.5px solid #E9E9E9",
        width: `${sideInPx}px`,
        height: `${sideInPx}px`,
      }}
      className={`box-${colors[Math.floor(Math.random() * 2.99)].substring(
        1
      )} relative opacity-50`}
    >
      <motion.div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "white",
        }}
        className="box-inner"
      ></motion.div>
    </motion.div>
  );
};

export default function Geek() {
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
      <div className="relative">
        <div className="container-1440">
          <div className="absolute top-0 overflow-hidden max-h-[100vh]">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex ">
                {Array.from({ length: cols }).map((_, colIndex) => (
                  <Box sideInPx={sideInPx} key={`${rowIndex}-${colIndex}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
        {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
        <Navbar
          setNavbarHeight={setNavbarHeight}
          setIsNavbarOpen={setIsNavbarOpen}
        />
        <div className="relative top-0 left-0 w-full">
          <Hero navbarHeight={navbarHeight} />
          <ScrollSection />
          <CommunityGlipses />
          <Narratives />
          <Sponsors />
          <Footer paddingX={{ base: "1rem", "2xl": "0" }} />
        </div>
      </div>
    </>
  );
}
