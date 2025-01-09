import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import OpenNavbar from "../components/OpenNavbar";
import StickyFooter from "../components/StickyFooter";
import useWindowSize from "../hooks/useWindowDimension";
import "../styles.css";
import season4Blog from "./season-4-recap/data";
import recap2024Vitual from "./hack-this-fall-2024-virtual-reflecting-on-a-global-celebration-of-innovation/data";
import socialImpact from "./the-social-impact-of-hack-this-fall-making-a-difference-through-technology/data";
import navigatingTheHackathonJourney from "./from-idea-to-prototype-navigating-the-hackathon-journey/data";
import leveragingHackathonForCareerGrowth from "./leveraging-hackathon-for-career-growth/data";
import preparingForAHackathon from "./preparing-for-a-hackathon-a-beginners-guide/data";
import experiencesToNotMiss from "./9-experiences-not-to-miss-at-hack-this-fall-hackathon/data";
import inclusiveInnovation from "./inclusive-innovation-why-diversity-matters-at-the-hackathon/data";
import season3Blog from "./season-3-recap/data";
import season2Blog from "./season-2-recap/data";
import season1Blog from "./season-1-recap/data";
import FeaturedBlogCard from "../components/FeaturedBlogCard";
import NavbarWrapper from "../components/NavbarWrapper";
import exp from "constants";
import { title } from "process";
import { Metadata } from "next";

const blogs = [
  season4Blog,
  recap2024Vitual,
  socialImpact,
  navigatingTheHackathonJourney,
  leveragingHackathonForCareerGrowth,
  preparingForAHackathon,
  experiencesToNotMiss,
  inclusiveInnovation,
  season3Blog,
  season2Blog,
  season1Blog,
];

export const metadata: Metadata = {
  title: "Blog | Hack This Fall Community",
  openGraph: {
    title: "Blog | Hack This Fall Community",
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
    siteName: "Blog | Hack This Fall Community",
  },
  twitter: {
    title: "Blog | Hack This Fall Community",
    description:
      "Hack This Fall is one of India's most thriving hacker communities. Join us to build groundbreaking solutions, inspire problem-solvers, and grow together in a diverse, supportive environment",
  },
};

export default function BlogPage() {
  return (
    <div className="relative">
      <NavbarWrapper />
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
  );
}
