import useWindowSize from "@/app/hooks/useWindowDimension";
import "../../styles.css";
import { useEffect, useRef, useState } from "react";
import OpenNavbar from "@/app/components/OpenNavbar";
import Navbar from "@/app/components/Navbar";
import StickyFooter from "@/app/components/StickyFooter";
import { Image } from "@chakra-ui/react";
import data from "./data";
import BlogHeader from "@/app/components/BlogHeader";
import NavbarWrapper from "@/app/components/NavbarWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: data.title,
};

export default function Blog() {
  return (
    <div className="relative">
      <NavbarWrapper />
      <div className="relative top-0 left-0 w-full bg-white rounded-b-3xl pb-24 font-outfit">
        <div
          id="blog-header"
          className="flex flex-col w-fit justify-center items-center cc container-1200 bg-white z-[10]"
        >
          <div className="h-full w-full rounded-b-lg rounded-3xl overflow-hidden">
            <Image
              src={data.image}
              className="rounded-3xl"
              alt="Card Image"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col -mt-20 bg-white container-1080 rounded-2xl p-10 blog-main">
            <BlogHeader
              date={data.date}
              title={data.title}
              tags={data.tags}
              author={data.author}
            />
            <hr className="mt-6" />
            <div className="blog-body text-[#000000] flex flex-col gap-y-6 mt-6">
              <p>
                Are you ready to embark on an exhilarating journey into the
                world of innovation, collaboration, and limitless possibilities?
                Brace yourselves because Hack This Fall is about to take you on
                an unforgettable adventure like never before! Whether
                you&apos;re a seasoned hacker or a newbie eager to dive in,
                we&apos;ve curated the ultimate guide to help you make the most
                out of your hackathon experience.
              </p>
              <p>
                In this blog, we&apos;ll walk you through everything you need to
                know to ensure you&apos;re fully equipped to thrive at Hack This
                Fall. From team collaboration and workshops by industry experts
                to building groundbreaking projects and networking with key
                players in the tech community, we&apos;ve got you covered every
                step of the way.
              </p>
              <p>
                Get ready to unleash your potential and seize every opportunity
                that comes your way as we dive deep into the heart of what makes
                Hack This Fall the must-attend event of the year. So, grab your
                laptops, pack your enthusiasm, and let&apos;s dive into this
                electrifying hackathon experience together!
              </p>
              <p>
                <span className="font-semibold">
                  1. Team Up and Collaborate:
                </span>{" "}
                Teamwork makes the dream work! Make sure to sync up with your
                teammates, brainstorm ideas, and divide tasks efficiently. The
                power of collaboration can lead to groundbreaking innovations.
              </p>
              <p>
                <span className="font-semibold">
                  2. Immerse in Workshops by Industry Experts:
                </span>{" "}
                Don&apos;t miss out on the opportunity to learn from industry
                experts and sponsors who are eager to share their knowledge and
                insights. These workshops are golden nuggets of wisdom that can
                help take your projects to the next level.
              </p>
              <p>
                <span className="font-semibold">3. Innovate and Build:</span>{" "}
                Let your creativity run wild and build something awesome!
                Whether it&apos;s a mobile app, a web platform, or a hardware
                hack, Hack This Fall is the perfect playground to turn your
                ideas into reality.
              </p>
              <p>
                <span className="font-semibold">
                  4. Engage with Experienced Mentors:
                </span>{" "}
                Stuck on a problem? Don&apos;t fret! Our experienced mentors are
                here to lend a helping hand. Don&apos;t hesitate to reach out,
                ask questions, and seek guidance whenever you hit a roadblock.
              </p>
              <p>
                <span className="font-semibold">
                  5. Take a Break, Have Fun:
                </span>{" "}
                It&apos;s not all about coding! Take a break, unwind, and enjoy
                some fun games and activities lined up just for you. After all,
                a little bit of play can spark some serious creativity.
              </p>
              <p>
                <span className="font-semibold">6. Expand Your Network:</span>{" "}
                Expand your horizons and connect with like-minded individuals.
                Networking is key to building lasting relationships, discovering
                new opportunities, and broadening your knowledge base.
              </p>
              <p>
                <span className="font-semibold">
                  7. Seize Every Opportunity:
                </span>{" "}
                Keep your eyes peeled for various opportunities that come your
                way during the hackathon. Whether it&apos;s a chance to showcase
                your skills, participate in challenges, or win exciting prizes,
                seize every opportunity that comes knocking.
              </p>
              <p>
                <span className="font-semibold">
                  8. Score Swag and Flaunt It:
                </span>{" "}
                Who doesn&apos;t love some swag? Score cool merchandise and
                flaunt it like a badge of honor. Not only does it make for great
                souvenirs, but it&apos;s also a testament to your participation
                and hard work.
              </p>
              <p>
                <span className="font-semibold">
                  9. Savor Delicious Free Food:
                </span>{" "}
                Hungry for success? Fuel up with delicious food and snacks
                provided on the house. Because let&apos;s face it, a well-fed
                hacker is a happy hacker!
              </p>
              <p>
                With all these fantastic opportunities and experiences awaiting
                you at Hack This Fall, there&apos;s no doubt that you&apos;re in
                for an adrenaline-fueled ride. So, gear up, get ready to code
                your heart out, and let&apos;s make this hackathon an epic
                adventure to remember!
              </p>
              <p>See you at Hack This Fall Hackathon. Happy Hacking! 🧡</p>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
