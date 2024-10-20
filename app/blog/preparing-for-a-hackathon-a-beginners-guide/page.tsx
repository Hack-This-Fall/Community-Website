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
                Ah, hackathons! Those magical events where coffee fuels
                creativity, code feels like a second language, and sleep becomes
                a distant memory. If you're a beginner, the thought of jumping
                into one might feel like being asked to perform brain surgery
                with a spoon. But don’t worry—this guide is here to be your
                hackathon lifeline!
              </p>
              <p className="text-lg">
                Let’s dive into how you can ace your first hackathon, one step
                at a time.
              </p>
              <p className="font-semibold text-xl">
                Choose the Right Hackathon 🎯
              </p>
              <p className="text-lg">
                Hackathons come in all shapes and sizes. Some focus on social
                impact, others dive deep into emerging technologies like
                blockchain or AI, and a few are just about having fun and
                pushing boundaries (legally, of course). Start by finding one
                that aligns with your interests. Love artificial intelligence?
                Look for an AI-themed hackathon. Passionate about solving
                real-world problems? Opt for one focused on social impact.
              </p>
              <p className="font-semibold text-xl">Build Your Dream Team 💪</p>
              <p className="text-lg">
                Hackathons are way more fun with a team. You can join with
                friends or meet new people at the event. Some hackathons even
                allow solo participation—so you can be the lone warrior
                building, debugging, and shipping your project all by yourself.
              </p>
              <p className="text-lg">
                Pro tip: Build a team with diverse skills. If you’re a
                developer, partner up with a designer, a backend engineer, or
                even a writer. A well-rounded team will help you create a more
                polished and complete project.
              </p>
              <p className="font-semibold text-xl">
                Tackle Real-World Problems 🤔
              </p>
              <p className="text-lg">
                The best hackathon projects solve real problems—whether for
                businesses, communities, or just your average person struggling
                with Wi-Fi during important meetings. Before you dive in, take a
                moment to ask yourself:{" "}
                <span className="italic">What problem am I solving?</span>
              </p>
              <p className="text-lg">
                Most hackathons have a theme, so start by understanding it. Once
                you’ve wrapped your head around the challenge, brainstorm
                creative solutions that are both unique and impactful.
              </p>
              <p className="font-semibold text-xl">
                Pack Smart for the Hackathon 🛠️
              </p>
              <div className="text-lg">
                Hackathons can last anywhere from 12 hours to an entire weekend,
                so you'll need more than just your laptop. Here's a quick
                packing checklist:
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">Laptop & Charger:</span>{" "}
                    Obvious, but crucial. Make sure it’s fully charged.
                  </li>
                  <li>
                    <span className="font-semibold">Mouse & Keyboard:</span> If
                    you prefer an external setup.
                  </li>
                  <li>
                    <span className="font-semibold">Snacks & Water:</span>{" "}
                    Coding burns calories (trust me, it does).
                  </li>
                  <li>
                    <span className="font-semibold">Headphones:</span> Perfect
                    for zoning in and staying focused.
                  </li>
                  <li>
                    <span className="font-semibold">Phone Charger:</span> For
                    keeping up with notifications and memes.
                  </li>
                  <li>
                    <span className="font-semibold">Power Bank:</span> For when
                    outlets are scarce.
                  </li>
                  <li>
                    <span className="font-semibold">Extension Cord:</span> A
                    lifesaver when power outlets are limited.
                  </li>
                  <li>
                    <span className="font-semibold">Blanket & Pillow:</span> A
                    little comfort goes a long way during those late-night
                    coding sessions.
                  </li>
                </ul>
                Bonus tip: In-person hackathons usually provide free food, so
                you’ve got an extra reason to participate!
              </div>
              <p className="font-semibold text-xl">Embrace Failure 😅</p>
              <p className="text-lg">
                At hackathons, everything will break—your code, your logic, and
                possibly your spirit. But that’s okay! Failure is part of the
                process. It’s what makes hackathons such incredible learning
                experiences.
              </p>
              <p className="text-lg">
                Code crashes? Logic doesn’t work? It’s all part of the journey.
                Embrace the chaos, and you’ll walk away with something awesome
                to demo, even if it’s not perfect.
              </p>
              <p className="font-semibold text-xl">
                Ace the Demo Presentation 🎤
              </p>
              <p className="text-lg">
                After hours (or days) of hacking, the final step is presenting
                your project. This is your chance to show off what you’ve built
                and explain why it’s amazing—without going into every tiny
                detail of your 500-line code.
              </p>
              <p className="text-lg">
                Pro tip: Keep it simple. Focus on what your project does and how
                it solves a problem.
              </p>
              <div className="text-lg">
                Here’s a simple demo format to follow:
                <ol className="list-decimal list-inside font-semibold">
                  <li>
                    Introduce the problem:{" "}
                    <span className="font-normal">
                      “Ever gone grocery shopping and forgotten the one item you
                      needed? Me too.”
                    </span>
                  </li>
                  <li>
                    Show your solution:{" "}
                    <span className="font-normal">
                      “Meet ForgetMeNot, the app that keeps track of your
                      grocery list and reminds you of items when you're near a
                      store.”
                    </span>
                  </li>
                  <li>
                    Explain why it’s awesome:{" "}
                    <span className="font-normal">
                      “ForgetMeNot uses location-based notifications, so you
                      never miss an item!”
                    </span>
                  </li>
                  <li>
                    Wrap it up with flair:{" "}
                    <span className="font-normal">
                      “Thanks to ForgetMeNot, no more late-night grocery runs.
                      Thank you!”
                    </span>
                  </li>
                </ol>
                If something goes wrong during the demo, just roll with it! A
                little humor can go a long way: “Looks like we’ve unlocked a
                surprise challenge mode—keeps things exciting!”
              </div>
              <p className="font-semibold text-xl">
                Celebrate Your Success (and Sleep!) 😴
              </p>
              <p className="text-lg">
                After the demo, it’s time to celebrate! Whether you win or not,
                surviving (and thriving) in a hackathon is an achievement in
                itself. You’ve likely learned more in 24 hours than in weeks of
                tutorials. <br />
                Take a moment to bask in your success, then treat yourself to
                some well-earned rest. You’ve officially earned the title of
                <span className="italic"> hackathon veteran</span>.
              </p>

              <p className="font-semibold text-xl">
                Bonus Tip: Don’t Stress About Winning 🏆
              </p>
              <p className="text-lg">
                Hackathons are about learning, growing, and experimenting. Don’t
                worry about winning or comparing yourself to others. Even if
                your project doesn’t work perfectly, you’ve gained valuable
                experience—and that’s the true prize.
              </p>

              <p className="font-semibold text-xl">
                Ready for Your Next Hackathon? Join Hack This Fall! 🍁
              </p>
              <div className="text-lg">
                If you’re hooked and ready for more, check out{" "}
                <span className="font-semibold"> Hack This Fall</span>, a
                community-driven hackathon perfect for beginners and seasoned
                hackers alike. It’s packed with workshops, networking
                opportunities, and the chance to showcase your skills.
                <br />
                <span className="font-semibold">Why Hack This Fall?</span>
                <ul className="list-disc list-inside">
                  <li>
                    Collaborate with people from diverse backgrounds and work on
                    innovative projects.
                  </li>
                  <li>
                    Learn from top mentors and attend workshops on the latest
                    tech trends.
                  </li>
                  <li>Win cool prizes (and gain bragging rights!).</li>
                </ul>
                Check out our upcoming events here:{" "}
                <a
                  className="underline"
                  href="https://hackthisfall.tech/events"
                >
                  https://hackthisfall.tech/events
                </a>
              </div>

              <p className="font-semibold text-xl">The Journey Begins Here</p>
              <p className="text-lg">
                Now you’re ready to crush your first hackathon with the
                excitement of a caffeine-fueled coder. Remember, hackathons
                aren’t about perfection—they’re about creativity,
                problem-solving, and learning. So, gear up, join a hackathon
                like Hack This Fall, and may your code always compile
                (eventually).
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
