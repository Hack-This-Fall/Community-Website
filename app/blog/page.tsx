"use client";

import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import OpenNavbar from "../components/OpenNavbar";
import StickyFooter from "../components/StickyFooter";
import useWindowSize from "../hooks/useWindowDimension";
import "../styles.css";
import { useState } from "react";
import season4Blog from "./season-4-recap/data";
import experiencesToNotMiss from "./9-experiences-not-to-miss-at-hack-this-fall-hackathon/data";
import inclusiveInnovation from "./inclusive-innovation-why-diversity-matters-at-the-hackathon/data";
import season3Blog from "./season-3-recap/data";
import season2Blog from "./season-2-recap/data";
import season1Blog from "./season-1-recap/data";
import FeaturedBlogCard from "../components/FeaturedBlogCard";

const blogs = [
  season4Blog,
  experiencesToNotMiss,
  inclusiveInnovation,
  season3Blog,
  season2Blog,
  season1Blog,
];

export default function Blogs() {
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
        {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
        <Navbar
          setNavbarHeight={setNavbarHeight}
          setIsNavbarOpen={setIsNavbarOpen}
        />
        <div className="relative top-0 left-0 w-full bg-white rounded-b-3xl overflow-hidden pb-24">
          <div
            id="blog-header"
            className="flex flex-col w-fit justify-center items-center cc container-1200 bg-white z-[10] mt-10 md:mt-0"
          >
            <div>THE BLOG</div>
            <div className="flex gap-x-2 items-center md:-mt-8">
              <span className="font-againstHistory text-[#A64DFF] text-[4rem] md:text-[8rem] self-center md:self-center">
                Ideas
              </span>

              <span className="font-outfit text-[#000000] text-[3rem] md:text-[5rem] self-center md:self-center">
                that
              </span>

              <span className="font-againstHistory text-[#FF9933] text-[4rem] md:text-[8rem] self-center md:self-center">
                Inspire
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-evenly w-full gap-x-20 gap-y-10 mt-10">
              {blogs.map((blog, index) =>
                index ? (
                  <BlogCard key={blog.slug} {...blog} />
                ) : (
                  <FeaturedBlogCard key={blog.slug} {...blog} />
                )
              )}
            </div>
          </div>
        </div>
        <StickyFooter />
      </div>
    </>
  );
}
