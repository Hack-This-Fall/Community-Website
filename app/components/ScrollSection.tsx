"use client";

import Image from "next/image";
import DemoOne from "../assets/images/demo1.svg";
import { useEffect, useRef, useState } from "react";
// import useWindowSize from "../hooks/useWindowDimension";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useWindowSize } from "rooks";
import { motion } from "framer-motion";
import { sleepForSeconds } from "../utils";

interface Item {
  heading: string;
  linkTo: string;
  image: any;
  text: string;
  color: string;
}

const items: Item[] = [
  {
    heading: "Hackathon",
    linkTo: "/hackathon",
    image: DemoOne,
    text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    color: "BBF149",
  },
  {
    heading: "Meetups",
    linkTo: "/hackathon",
    image: DemoOne,
    text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    color: "B281FE",
  },
  {
    heading: "Build with",
    linkTo: "/hackathon",
    image: DemoOne,
    text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    color: "4E9DFF",
  },
  {
    heading: "Hacktoberfest",
    linkTo: "/hackathon",
    image: DemoOne,
    text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    color: "F6902A",
  },
];

const NavbarScrollSection = ({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: Function;
}) => {
  const setSelectedIndexSlowly = async (newIndex: number) => {
    if (newIndex === selectedIndex) return;

    if (newIndex > selectedIndex) {
      for (let index = selectedIndex + 1; index <= newIndex; index++) {
        setSelectedIndex(index);
        await sleepForSeconds(0.08);
      }
    } else {
      for (let index = selectedIndex - 1; index >= newIndex; index--) {
        setSelectedIndex(index);
        await sleepForSeconds(0.08);
      }
    }
  };

  return (
    <div className="flex justify-between items-center px-14 py-10 z-50 block w-full absolute">
      <div className="flex font-poppins justify-between items-center font-medium text-white pointer-events-auto">
        {items.map(({ heading, color }, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? `` : `ml-8`} cursor-pointer ${
                index === selectedIndex
                  ? `color-${color} underline underline-offset-4`
                  : null
              }`}
              onClick={() => setSelectedIndexSlowly(index)}
            >
              {heading}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Section = ({
  item,
  index,
  selectedIndex,
}: {
  item: Item;
  index: number;
  selectedIndex: number;
}) => {
  const [exitY, setExitY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { innerHeight } = useWindowSize();

  const exit = innerHeight || 0;

  const handleScroll = () => {
    const position = window.scrollY;

    setExitY(position > scrollPosition ? exit : exit * -1);

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variantSelected = {
    animate: { y: 0, transition: { duration: 0.2 } },
    exit: {
      y: exitY,
      transition: { duration: 0.2 },
    },
  };

  const variantNext = {
    initial: { y: innerHeight || 0 },
    animate: { y: innerHeight || 0 },
  };

  const variantPrev = {
    animate: { y: -2.25 * (innerHeight || 0), opacity: 1 },
  };

  return (
    <div
      className={`grid grid-cols-2 h-[100vh] ${
        index !== 3 ? "sticky top-0" : null
      } z-${(4 - index) * 10}`}
    >
      <div className="flex flex-col justify-end pb-16 px-10 font-poppins ">
        <h1 className={`text-5xl font-bold color-${item.color}`}>
          {item.heading}
        </h1>
        <p className="mt-6 text-[#F9F9F9] font-dm-sans font-normal">
          {item.text}
        </p>
        <Link
          href={item.linkTo}
          className={`bg-${item.color} self-start px-10 py-4 rounded-full mt-10 font-dm-sans font-medium`}
        >
          Learn More
        </Link>
      </div>
      <motion.div
        variants={
          index > selectedIndex
            ? variantNext
            : index < selectedIndex
            ? variantPrev
            : variantSelected
        }
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image
          src={item.image}
          alt="Community"
          className="h-[100vh] object-cover rounded-l-2xl"
        />
      </motion.div>
    </div>
  );
};

export default function ScrollSection() {
  const { innerHeight: height, innerWidth: width } = useWindowSize();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroll = () => {
    if (!height) return;

    const position = window.scrollY;
    const scrolled = position - scrollSectionRef.current?.offsetTop;

    console.log(
      position,
      scrollSectionRef.current?.offsetTop,
      scrolled,
      scrolled / height,
      height,
      width
    );

    let index = 0;

    if (scrolled >= 0) index = Math.min(Math.floor(scrolled / height), 3);

    setSelectedIndex(index);
  };

  const setSelectedIndexAndResetScroll = (index: number) => {
    if (!height) return;

    setSelectedIndex(index);

    window.scrollTo({
      top:
        scrollSectionRef.current?.offsetTop +
        (height * index + height * Math.min(3, index + 1)) / 2,
    });
  };

  const scrollSectionRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollSectionRef}
      className="bg-[#111111]"
      style={{
        height: `${items.length * 100}vh`,
      }}
    >
      <div className="h-[100vh] overflow-hidden sticky top-0">
        <NavbarScrollSection
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndexAndResetScroll}
        />
        <AnimatePresence>
          <Section
            key={items[selectedIndex].heading}
            selectedIndex={selectedIndex}
            index={selectedIndex}
            item={items[selectedIndex]}
          />
          {selectedIndex > 0 && (
            <Section
              key={items[selectedIndex - 1].heading}
              selectedIndex={selectedIndex}
              index={selectedIndex - 1}
              item={items[selectedIndex - 1]}
            />
          )}
          {selectedIndex < 3 && (
            <Section
              key={items[selectedIndex + 1].heading}
              selectedIndex={selectedIndex}
              index={selectedIndex + 1}
              item={items[selectedIndex + 1]}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
