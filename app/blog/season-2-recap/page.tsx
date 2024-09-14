"use client";

import useWindowSize from "@/app/hooks/useWindowDimension";
import "../../styles.css";
import { useEffect, useRef, useState } from "react";
import OpenNavbar from "@/app/components/OpenNavbar";
import Navbar from "@/app/components/Navbar";
import StickyFooter from "@/app/components/StickyFooter";
import { Image } from "@chakra-ui/react";

export const data = {
  slug: "season-2-recap",

  description:
    "Hack This Fall began with a mindset of encouraging new hackers to build unique projects regardless of the tech or field; the only focus was to create something meaningful and enjoy building while also solving the shared struggles of our surroundings....",
  title: "Hack This Fall 2.0 Recap 💡",
  image:
    "https://a.storyblok.com/f/182824/1921x1081/50f9b6192b/season-2-recap-blogpng.png",
  date: "2021-10-25 18:30",
  author: {
    name: "Siddharth Dayalwal",
    content: {
      _uid: "17047774-36a0-4bbe-893f-4d28d8376040",
      company: "Hack This Fall",
      picture:
        "https://a.storyblok.com/f/182824/1946x1808/5c476c582e/mlh-sid-0.jpeg",
      twitter: {
        id: "",
        url: "https://twitter.com/siddharth_hacks",
        linktype: "url",
        fieldtype: "multilink",
        cached_url: "https://twitter.com/siddharth_hacks",
      },
      component: "author",
      designation: "Organizer",
    },
  },
  tags: ["Hackathon", "Recap"],
};

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
            <div className="flex flex-col -mt-10 bg-white container-1080 rounded-2xl p-10 blog-main">
              <div className="flex space-x-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-200 text-purple-600 text-xs font-semibold px-2 py-1 rounded uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-outfit font-medium text-3xl mt-4">
                {data.title}
              </span>
              <div className="mt-4 flex gap-x-10 font-outfit">
                <span>
                  <span className="text-[#767676]"> Author </span>
                  <span>
                    {data.author.name}, {data.author.content.designation}{" "}
                    {data.author.content.company}
                  </span>
                </span>
                <span>
                  <span className="text-[#767676]"> Published on </span>{" "}
                  {Date.parse(data.date).toLocaleString()}
                </span>
              </div>
              <hr className="mt-6" />
              <div className="blog-body text-[#000000] flex flex-col gap-y-6 mt-6">
                <p>
                  Hack This Fall began with a mindset of encouraging new hackers
                  to build unique projects regardless of the tech or field; the
                  only focus was to create something meaningful and enjoy
                  building while also solving the shared struggles of our
                  surroundings.
                </p>
                <p>
                  We hosted our first edition in 2020 which was an experiment as
                  we were organizing a hackathon for the first time and it
                  turned out to be a successful event. We received a great
                  response from our community as we were joined by 500+ hackers
                  from 170+ cities, who all ended up building 50+ projects. It
                  was one of the first digital hackathons in the region during
                  COVID times. To continue our mission and match the
                  expectations of our community after season 1, we decided to
                  start planning another edition.
                </p>
                <Image src="https://a.storyblok.com/f/182824/1243x698/3d1d0a5ac8/season-2-recap.png" />

                <p>
                  Hack This Fall Season 2 was meant to exceed the digital
                  hackathon experiences for our hacker community members and
                  guess what, it went over the top. It was a 48 Hours Virtual
                  Hackathon organized on Oct 22nd - Oct 24th, 2021. The
                  hackathon experienced an outstanding attendance of 4500+
                  hackers joining us from 55+ countries across the globe which
                  all ended up showcasing 320+ amazing ideas and project
                  submissions.
                </p>
                <p>
                  Hack This Fall became an MLH member event, which means that
                  Major League Hacking verified us as a high-quality event by
                  evaluating the event’s progress in key areas such as
                  sponsorship, marketing, and logistics. We also introduced our
                  all-new tagline “Innovate For Good”. Hackers truly understood
                  the value of our motto and showed their excellent piece of
                  innovation and problem-solving skills.
                </p>
                <p>
                  Apart from having a great time hacking, our community got an
                  opportunity to collaborate in so many meaningful ways. We use
                  to have #HTFConnect hacker hangouts every week on our discord
                  where we use to discuss various topics, share each other’s
                  experiences and learn together. Such hacker connects, drives
                  various valuable conversations which eventually helped our
                  hackers to get more aware and understand things they didn’t
                  know before.
                </p>
                <Image src="https://a.storyblok.com/f/182824/1600x944/93c4d8c286/htfconnect.png" />
                <p>
                  One of the great things about Hack This Fall was its pre-event
                  workshops, we ran over 45+ sessions on our Youtube on multiple
                  domains and topics which could ultimately help hackers learn
                  new technologies, build great ideas and share their solutions
                  with the rest of the community. We covered subjects like
                  Jamstack, Containers, Authentication, Blockchain, Azure, and
                  so much more. With this, we wanted our hackers to be aware of
                  all these before actually starting with the hackathon. And
                  having these workshops way before the hackathon allowed them
                  to give it some time and grasp it.
                </p>
                <p>
                  Hackers also had a lot of fun time participating in super cool
                  mini-events we scheduled for them. This way, hackers get to
                  take some time off from hacking and relax their minds to enjoy
                  and have some chill. We did Hacker Hangouts to interact with
                  other hackers participating, we also ran an MS Paint
                  mini-event, where we followed along with Bob Ross himself. MLH
                  ran a special Werewolf mini-event which was again an awesome
                  one and lastly, we played Sketchful mini-event to draw and
                  guess the same!
                </p>
                <p>
                  This year, we also initiated a new program named Hack This
                  Fall Hackathon Evangelist. Evangelists are extended Hack This
                  Fall team members who are passionate about Hackathons and
                  Communities. These are the folks who actively spread awareness
                  and encourage people to get involved in the hackathon space.
                  Being a Hackathon Evangelist means that one is committed to
                  bringing a change in their surrounding by helping others and
                  contributing in a meaningful way. We onboarded over 100+
                  Evangelists and helped them add value to the community.
                </p>

                <Image src="https://a.storyblok.com/f/182824/1280x720/421b8dad08/hackathon-evangelists.png" />
                <p>
                  We encourage Inclusion and Diversity at the core of our
                  community core and have various activities around the same to
                  keep hackers engaged in a meaningful way. All in all, we
                  wanted our hackers to not just participate but experience a
                  hackathon in a true sense. And we managed to do that quite
                  well. Hack This Fall is known for its experience and we want
                  to make sure that people participate in a hackathon not just
                  to win but to upskill, network, learn, build and share.
                </p>
                <p>
                  Lastly, would just want to conclude by mentioning that, Season
                  2 was such a blast and it leveled up the true hackathon
                  digital experience for the hackers in the region. A huge
                  shoutout to all the humans involved in making it memorable. We
                  couldn’t have pulled it off so smoothly without the support
                  from all our sponsors, thanks to each of them.
                </p>
                <Image src="https://a.storyblok.com/f/182824/1600x900/590f51ebba/htf-pizza.png" />

                <p>
                  I can’t thank enough my outstanding team who selflessly worked
                  together and brought the idea of running a successful digital
                  hackathon to life. With that being said, please take a sip of
                  chilled coke with a slice of a pizza while we prepare for you
                  an all-new edition. Get ready to go Above & Beyond this year
                  as we bring to you Hack This Fall 3.0 and that too in person!
                  Head over to hackthisfall.tech to know more!
                </p>
                <p>Happy Hacking! 🧡</p>
              </div>
            </div>
          </div>
        </div>
        <StickyFooter />
      </div>
    </>
  );
}
