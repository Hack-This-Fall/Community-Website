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
              <p className="text-lg">
                Hackathons have become a turning point for countless
                individuals, helping them land jobs, learn emerging
                technologies, expand their networks, and transform their
                careers. However, hearing about these success stories can
                sometimes feel overwhelming, especially if you're unsure how to
                make hackathons work for you.
              </p>

              <p className="text-lg">
                So, you’ve signed up for a hackathon—now what?
              </p>

              <p className="text-lg">
                Before diving into actionable tips, let’s explore some real-life
                stories of how hackathons have impacted careers, including
                individuals you might relate to. I’ll start with my own journey,
                as hackathons played a major role in shaping my career. Along
                the way, I met others whose stories I’m about to share—all
                thanks to hackathons!
              </p>

              <p className="font-semibold text-xl">
                Actionable Steps to Leverage Hackathons for Career Growth
              </p>
              <div className="text-lg">
                Through conversations with participants, organizers, and judges,
                clear patterns have emerged among those who’ve successfully used
                hackathons to boost their careers. Here are some actionable tips
                to help you make the most of your hackathon experience:
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Choose Your Team Wisely:
                    </span>{" "}
                    Don’t just team up with friends for fun—surround yourself
                    with motivated individuals who are there to learn and build
                    something impactful. Working with like-minded, driven people
                    enhances your experience and pushes you to perform better.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Step Out of Your Comfort Zone:
                    </span>{" "}
                    Hackathons attract people from diverse backgrounds and
                    industries. Take the opportunity to network beyond your
                    usual circle—you never know if the next person you meet
                    works at a top tech company, a startup, or could be your
                    future co-founder. These connections could lead to
                    unexpected career opportunities.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Build Genuine Relationships:
                    </span>{" "}
                    Hackathons are more than a place to collect LinkedIn
                    connections. Invest time in getting to know people and
                    maintaining regular communication after the event. Many
                    hackathons have their own Discord servers—introduce yourself
                    there and engage with others. These communities often thrive
                    long after the event is over.
                  </li>

                  <li>
                    <span className="font-semibold">Engage with Sponsors:</span>{" "}
                    Use the technology stacks provided by sponsoring companies
                    and interact with their representatives. Share your
                    excitement about your project and how their product helped
                    you. This creates a lasting impression, which can lead to
                    future opportunities.
                  </li>

                  <li>
                    <span className="font-semibold">
                      Connect with Organizers:
                    </span>{" "}
                    Hackathon organizers have a wealth of experience, often
                    having leveraged hackathons to advance their own careers.
                    Take the time to talk to them, learn from their experiences,
                    and seek advice.
                  </li>

                  <li>
                    <span className="font-semibold">
                      Ask for Referrals (When Ready):
                    </span>{" "}
                    Once you’ve built a strong GitHub portfolio and polished
                    your resume, don’t hesitate to ask for referrals. If you’ve
                    demonstrated your skills and passion during the hackathon,
                    many professionals will be happy to help connect you with
                    job opportunities.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl">Final Thoughts</p>
              <p className="text-lg">
                Hackathons are not just about building projects under
                pressure—they’re a gateway to learning new skills, forming
                meaningful connections, and unlocking career opportunities. By
                actively participating and taking ownership of your hackathon
                experience, you can transform your career trajectory—no matter
                what stage you’re at. You never know who might be watching or
                where your newfound skills might lead.
              </p>

              <p className="text-lg">
                If you're looking for such experiences, check out our upcoming
                hackathon on the events page and join us here:{" "}
                <a
                  href="https://hackthisfall.tech/events"
                  className="underline"
                >
                  hackthisfall.tech/events
                </a>
                .
              </p>

              <p className="text-lg">Happy Hacking! 🧡</p>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
