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
                Participating in a hackathon can feel like entering a whirlwind
                - intense, exciting, and a little overwhelming. But in this
                fast-paced environment, you get the chance to bring ideas to
                life, collaborate with talented people, and learn a lot. Whether
                it’s your first hackathon or you’re a seasoned hacker, this
                guide will walk you through the journey from a simple idea to a
                fully functional prototype. Let’s break it down!
              </p>

              <p className="font-semibold text-xl">Sparking the Idea ✨</p>
              <div className="text-lg">
                At the heart of every project is a simple idea. But when time is
                tight, coming up with an idea that’s both creative and
                achievable can be tricky. So how do you spark that first flame?
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Start with Problems You Care About:
                    </span>{" "}
                    Think about issues you&apos;ve encountered in your life or
                    the world around you. Chances are, if it’s a problem for
                    you, it’s a problem for others, too.
                  </li>
                  <li>
                    <span className="font-semibold">Play to the Theme:</span>{" "}
                    Many hackathons have themes or prompts to guide you. Use the
                    theme as inspiration. Even if your idea seems small, it’s
                    the execution that counts.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Inspiration is Everywhere:
                    </span>{" "}
                    Look at existing products and ask yourself, “What could be
                    better?” or “What’s missing?” Often, the best ideas come
                    from improving something already out there.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl">
                Building Your Dream Team 🎯
              </p>
              <div className="text-lg">
                Hackathons are collaborative, and the team you form can shape
                your experience. The best teams combine different skills so
                everyone can focus on what they do best.
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">Complementary Skills:</span>{" "}
                    Build a team where each member has unique strengths. A great
                    team might include a designer, a backend developer, and a
                    frontend expert. Defined roles make the workflow smoother.
                  </li>
                  <li>
                    <span className="font-semibold">Clear Communication:</span>{" "}
                    Good communication saves time. Decide on a platform for your
                    discussions, like Slack or Discord, and check in with each
                    other regularly.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Trust and Flexibility:
                    </span>{" "}
                    Hackathons are intense, so you need trust in your team. Be
                    flexible when things don’t go as planned - adaptation is key
                    to surviving a hackathon.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl">Prototype Like a Pro 👨‍💻</p>
              <div className="text-lg">
                With your idea solidified and your team in place, it’s time to
                start building. The goal is to create a prototype that
                demonstrates your idea effectively. Remember, hackathons are
                about quick iterations - don’t aim for perfection.
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Choose Tools You Know:
                    </span>{" "}
                    Stick to familiar tools and technologies. Using frameworks
                    or languages you&apos;re comfortable with saves time and
                    prevents a learning curve during the hackathon.
                  </li>
                  <li>
                    <span className="font-semibold">Divide and Conquer:</span>{" "}
                    Break your project into smaller tasks. One person could
                    handle design while another works on backend logic. Tackling
                    parts simultaneously helps you finish faster.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Version Control is Essential:
                    </span>{" "}
                    Use Git or another version control system. It helps avoid
                    messy code collisions and keeps the team in sync.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl">
                Surviving the Hackathon Grind 😎
              </p>
              <div className="text-lg">
                With your idea solidified and your team in place, it’s time to
                start building. The goal is to create a prototype that
                demonstrates your idea effectively. Remember, hackathons are
                about quick iterations - don’t aim for perfection.
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">Take Breaks:</span> It’s
                    tempting to work non-stop, but regular breaks keep you
                    productive. Stretch, grab a snack, and stay hydrated.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Test Early, Test Often:
                    </span>{" "}
                    Don’t wait until the last minute to test. Spotting bugs
                    early saves a lot of stress later on.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Stay Focused on the Core Idea:
                    </span>{" "}
                    Avoid getting lost in too many features. Focus on building
                    the most essential part of your idea.
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-xl">
                The Final Stretch: Presentation 💻
              </p>
              <div className="text-lg">
                The presentation is just as important as your project. Even if
                your prototype isn’t perfect, how you present it can make a big
                difference.
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Highlight the Problem and Solution:
                    </span>{" "}
                    Start by clearly explaining the problem your prototype
                    solves. Focus on the most compelling aspects of your
                    project.
                  </li>
                  <li>
                    <span className="font-semibold">Show What Works:</span> Even
                    if not everything is finished, demonstrate the parts that
                    function well. A smooth demo of core features is more
                    impactful than a buggy full-feature showcase.
                  </li>
                  <li>
                    <span className="font-semibold">Tell a Story:</span>{" "}
                    Storytelling matters. Share how your team developed the
                    idea, the challenges you faced, and the creative solutions
                    you implemented.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-xl">Enjoy the Experience 🙌</p>
              <p className="text-lg">
                Hackathons are about learning, building, and pushing yourself.
                Whether you win or not, the experience of creating something
                from scratch in a limited time is invaluable.
              </p>
              <p className="text-lg">
                Take the chance to experiment with new technologies, meet
                like-minded people, and discover new passions. Every hackathon
                project teaches something valuable, regardless of the outcome.
              </p>

              <p className="text-lg">
                The journey from idea to prototype in a hackathon is thrilling,
                exhausting, and full of surprises. It’s where creativity meets
                code, and the power of collaboration comes to life. So next time
                you enter a hackathon, remember: it’s not just about the final
                product - it’s about the process, the lessons, and the fun along
                the way.
              </p>

              <p className="text-lg">
                If you’re ready to dive into your next hackathon adventure,
                check out upcoming events at Hack This Fall and join the
                community of creators turning ideas into reality. Now go turn
                that spark into something amazing.
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
