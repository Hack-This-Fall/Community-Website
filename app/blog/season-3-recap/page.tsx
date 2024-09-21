"use client";

import useWindowSize from "@/app/hooks/useWindowDimension";
import "../../styles.css";
import { useEffect, useRef, useState } from "react";
import OpenNavbar from "@/app/components/OpenNavbar";
import Navbar from "@/app/components/Navbar";
import StickyFooter from "@/app/components/StickyFooter";
import { Image } from "@chakra-ui/react";
import data from "./data";
import BlogHeader from "@/app/components/BlogHeader";

export default function Blog() {
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
                <p className="text-lg font-semibold">Overview</p>
                <p>
                  In the heart of Gandhinagar, India, from 3rd to 5th February
                  2023, a unique tech experience unfolded that brought together
                  a diverse group of innovators, problem-solvers, and hackers to
                  transform ideas into reality, embrace innovation, and
                  celebrate the spirit of collaboration.
                </p>
                <Image src="https://a.storyblok.com/f/182824/2000x1333/0300e95675/htf-neon.png" />
                <p>
                  Hack This Fall 3.0, hosted at Karnavati University, was a
                  36-hour in-person hackathon marked a significant departure
                  from its online predecessors. With the tagline &quot;Innovate
                  For Good&quot; and an impressive lineup of sponsors, partners,
                  and a record-breaking number of participants, this event left
                  an indelible mark on everyone involved.
                </p>
                <p>
                  In this recap blog, we&apos;ll delve into the highlights, the
                  3-day journey, and the unique elements that made &quot;Hack
                  This Fall 3.0&quot; a memorable experience.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/2000x1333/98855801b5/hacker-hall-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/2000x1333/bc339cdff3/hacker-hall-2.png" />
                </div>
                <p>
                  <span className="font-semibold">
                    A Shift from Virtual to In-Person -{" "}
                  </span>
                  The first and second editions of &quot;Hack This Fall&quot;
                  were conducted online, but the third edition marked a
                  significant change. It became the first-ever in-person
                  edition, and the impact of this transition was palpable
                  throughout the event. Participants had the unique opportunity
                  to meet, collaborate, and learn from each other in a physical
                  setting, fostering a tangible sense of community and
                  camaraderie.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/d7c4c7a56d/2-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/9a1cc1d2d8/2-2.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/ee7a27e152/2-3.png" />
                  <Image src="https://a.storyblok.com/f/182824/x/bc4cdd1adc/2-4.png" />
                </div>
                <p className="text-lg font-semibold">The Event in Numbers</p>
                <p>
                  Before we dive into the details, let&apos;s set the stage with
                  some milestones we are proud of:
                  <ul className="list-disc list-inside">
                    <li>
                      Hack This Fall 3.0 was proudly affiliated with Major
                      League Hacking (MLH) as their Official 2023 Season member
                      event, emphasizing its commitment to building a vibrant
                      tech community.
                    </li>
                    <li>
                      The event received an overwhelming 2500+ registrations and
                      over 500 hackers from over 90 cities joined the hackathon
                      IRL.
                    </li>
                    <li>
                      An incredible 144 projects were built during the 36-hour
                      hackathon, showcasing the participants&apos; creativity
                      and skills.
                    </li>
                  </ul>
                </p>
                <p>
                  The unanimous sentiment among participants was that they had
                  an amazing experience.
                </p>
                <Image src="https://a.storyblok.com/f/182824/1602x1068/a4f1e001ce/3.png" />
                <p className="text-lg font-semibold">Day 1: A Grand Kick-off</p>
                <p>
                  The journey began with the check-in of eager hackers, who were
                  greeted with welcome swag kits, setting the tone for the
                  event. Light snacks and icebreakers provided an ideal platform
                  for participants to get to know one another. The Opening
                  Ceremony was a moment of anticipation, officially marking the
                  start of the hackathon. Sponsors Storyblok and 5ire conducted
                  informative workshops, sharing valuable insights with the
                  participants. The day ended with the first mentorship round,
                  where participants received guidance and refined their project
                  ideas.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/0d05bc900a/4-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/25e5ba823f/4-2.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/a632c4d96e/4-3.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/a0dea19d00/4-4.png" />
                </div>
                <p className="text-lg font-semibold">
                  Day 2: A Mix of Learning and Fun
                </p>
                <p>
                  The second day added a touch of fun and relaxation to the
                  intense hacking. Midnight snacks added a delightful twist to
                  the late-night coding sessions. The unexpected highlight was a
                  midnight karaoke mini-event, which brought participants closer
                  through music. The day began with an exercise session,
                  followed by a hearty breakfast. GitHub, ApyHub, and Postman,
                  as sponsors, conducted workshops to equip participants with
                  essential skills.
                </p>
                <p>
                  The second mentorship round focused on project implementation,
                  ensuring that participants had the support they needed. The
                  day featured a unique MLH mini-event, a cup-stacking
                  challenge, followed by the engaging Snyk Cyber Security
                  Challenge. The final mentorship round wrapped up the
                  day&apos;s activities.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/32e375b916/5-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/9ed706ee31/5-2.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/9e051f4568/5-3.png" />
                  <Image src="https://a.storyblok.com/f/182824/1811x1207/ebcfecd60b/5-4.png" />
                </div>
                <p className="text-lg font-semibold">
                  Day 3: The Final Showdown
                </p>
                <p>
                  As the soft submission deadline approached, excitement reached
                  its peak. Hacking concluded at 8 a.m., and participants were
                  rewarded with a well-deserved breakfast. The judging process
                  began, where experts assessed the innovative projects. The
                  winners were carefully chosen, and the Closing Ceremony marked
                  the event&apos;s conclusion. Participants bid farewell to each
                  other, capturing the memorable moments through photographs
                  that would serve as cherished mementos.
                </p>
                <Image src="https://a.storyblok.com/f/182824/1602x817/aa5c422b70/6.png" />
                <p className="text-lg font-semibold">
                  Beyond Hacking: The Extra Mile
                </p>
                <p>
                  In addition to the intense hacking sessions, Hack This Fall
                  3.0 offered several additional amenities to make the event
                  comfortable and enjoyable. These included a steady supply of
                  breakfast, lunch, evening snacks, and dinner, ensuring
                  participants were well-fed throughout the hackathon.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/1811x1207/45aa7035ba/7-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/4cbc1c7f6d/7-2.png" />
                </div>
                <p>
                  Sleeping areas providing quick recharge and sponsor booths
                  allowed participants to explore and engage with companies.
                  Coffee machines energized everyone, and a fun game corner
                  provided a relaxing break. Participants could also capture the
                  memories of the event through photo booths, and many giveaways
                  added an element of excitement to the overall experience.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <Image src="https://a.storyblok.com/f/182824/1811x1207/fb208de190/8-1.png" />
                  <Image src="https://a.storyblok.com/f/182824/1602x1068/32d923708a/8-2.png" />
                </div>
                <p className="text-lg font-semibold">Conclusion</p>
                <p>
                  Hack This Fall 3.0 at Karnavati University was a landmark
                  event celebrating innovation, collaboration, and community.
                  The hackathon showcased the growing importance of hackathons
                  in the tech world. With an unprecedented number of
                  registrations, the transition to an in-person event, and a
                  total of 144 projects created, it was a testament to the
                  incredible talent and enthusiasm of the participants. Beyond
                  coding and learning, the event fostered friendships, memories,
                  and an enduring spirit of innovation and camaraderie. As we
                  bid adieu to &quot;Hack This Fall Season 3&quot;, we eagerly
                  look forward to more hackathons, collaborations, and
                  innovations.
                </p>
                <p>Happy Hacking! 🧡</p>
                <Image src="https://a.storyblok.com/f/182824/1602x1068/f2fa00b527/end.png" />
              </div>
            </div>
          </div>
        </div>
        <StickyFooter />
      </div>
    </>
  );
}
