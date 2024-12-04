import "../../styles.css";
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
          <div className="flex flex-col -mt-16 bg-white container-1080 rounded-2xl p-10 blog-main">
            <BlogHeader
              date={data.date}
              title={data.title}
              tags={data.tags}
              author={data.author}
            />
            <hr className="mt-6" />
            <div className="blog-body text-[#000000] flex flex-col gap-y-6 mt-6">
              <p className="text-lg">
                Hackathons are more than events; they’re movements that unite
                individuals to tackle real-world challenges through technology
                and creativity. From{" "}
                <span className="font-semibold">November 8–10, 2024</span>, Hack
                This Fall made a triumphant return to the virtual stage,
                connecting participants worldwide. This year’s edition wasn’t
                just about coding—it was about reviving our cherished virtual
                hackathon (last held in 2021) and fostering a global community
                of changemakers.
              </p>
              <p className="text-lg">
                This recap celebrates the incredible achievements of Hack This
                Fall 2024 Virtual Hackathon, revisits a weekend filled with
                innovation and inspires you to join future editions as we
                continue to empower hackers everywhere.
              </p>
              <p className="text-2xl font-semibold">
                A Weekend of Global Innovation
              </p>
              <p className="text-lg">
                Hack This Fall 2024 brought together over{" "}
                <span className="font-semibold">3,300 participants</span> from{" "}
                <span className="font-semibold">45+ countries</span>,
                highlighting the power of global collaboration. Over the course
                of three days, we received an impressive{" "}
                <span className="font-semibold">241 project submissions</span>,
                each tackling pressing challenges with innovative solutions.
              </p>
              <Image src="https://a.storyblok.com/f/182824/4938x2346/89b010e51f/map.png" />
              <p className="text-lg">
                The event welcomed hackers of all skill levels, with{" "}
                <span className="font-semibold">
                  34% identifying as beginners
                </span>
                , making the hackathon accessible and inclusive. Themes ranged
                from artificial intelligence and sustainability to social impact
                and accessibility, showcasing the creativity and determination
                of participants united by a shared purpose.
              </p>
              <p className="text-2xl font-semibold">
                Moments That Defined the Hackathon
              </p>
              <p className="text-lg">
                The hackathon kicked off with an exciting opening ceremony,
                setting the tone for a weekend of innovation. From there,
                participants dove into enriching workshops and mentorship
                sessions designed to empower and inspire.
              </p>
              <p className="text-lg">
                Workshops covered cutting-edge topics, including GitHub Copilot,
                the Gemini API, building scalable products, and pitching ideas
                effectively. Guided by over 50 mentors, judges, and speakers,
                participants refined their ideas and brought them to life.
              </p>
              <p className="text-lg">
                Beyond coding, Hack This Fall was a hub of community engagement,
                where participants connected, collaborated, and built lasting
                bonds. Side events like the Tetris Tournament and Wikipedia
                Races brought fun and camaraderie, ensuring a well-rounded
                experience.
              </p>
              <p className="text-lg">
                The{" "}
                <span className="font-semibold">
                  Project Showcase Livestream
                </span>{" "}
                was another highlight, offering participants a platform to
                present their creations to a global audience. Witnessing
                innovative ideas unfold in real time was truly inspiring.
              </p>

              <Image src="https://a.storyblok.com/f/182824/4000x2250/0ff3f648d1/collage.png" />

              <p className="text-2xl font-semibold">
                Celebrating Innovation and Creativity
              </p>

              <p className="text-lg">
                Hack This Fall 2024 showcased incredible talent through 241
                submitted projects. Among the standout innovations were:
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>
                  <a
                    target="_blank"
                    href="https://devfolio.co/projects/yaash-yet-another-ai-shell-192b"
                    className="underline font-semibold"
                  >
                    NAASH (Not Another AI Shell)
                  </a>
                  , is an AI-powered terminal that enhances productivity with
                  smart clipboard commands, natural language execution, and
                  advanced troubleshooting, making terminal use intuitive and
                  efficient.
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://devfolio.co/projects/classing-9f7b"
                    className="underline font-semibold"
                  >
                    Classing
                  </a>{" "}
                  is a platform transforming student-teacher interactions by
                  visualizing questions and topics, fostering a collaborative
                  learning environment.
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://devfolio.co/projects/plantica-428f"
                    className="underline font-semibold"
                  >
                    Plantica
                  </a>{" "}
                  is an app that makes plant care fun and engaging with
                  real-time monitoring and playful reminders, helping urban
                  dwellers keep their plants alive and thriving.
                </li>
              </ul>
              <p className="text-lg">
                These projects exemplify the creativity, passion, and
                collaborative spirit Hack This Fall aims to inspire, leaving a
                lasting impact beyond the event.
              </p>

              <p className="text-2xl font-semibold">
                Gratitude to Our Supporters
              </p>
              <p className="text-lg">
                Hack This Fall 2024 wouldn’t have been possible without the
                generous support of our partners. GitHub and Devfolio, as
                platinum sponsors, provided unparalleled resources and
                expertise. Peerlist, Postman, Google for Developers, and Major
                League Hacking also played pivotal roles in enhancing the
                participant experience, from mentorship to prizes and tools.
                Their contributions made this hackathon truly exceptional.
              </p>

              <p className="text-2xl font-semibold">
                Looking Ahead to the Future
              </p>
              <p className="text-lg">
                Hack This Fall 2024 Virtual was a resounding success,
                revitalizing our virtual edition and raising the bar for online
                hackathons. To everyone who participated, thank you for making
                this event unforgettable.
              </p>

              <Image src="https://a.storyblok.com/f/182824/4000x2250/6461081d48/innovate-for-good.png" />
              <p className="text-lg">
                As we celebrate these milestones, we’re already looking ahead to
                <span className="font-semibold">Hack This Fall 2025</span>. If
                you loved the virtual hackathon, wait until you experience our
                in-person edition! Find more details about our upcoming events
                here:{" "}
                <a
                  target="_blank"
                  href="https://hackthisfall.tech/events"
                  className="underline"
                >
                  hackthisfall.tech/events
                </a>
                .
              </p>
              <p className="text-lg">
                Together, let’s continue building a global community of
                innovators and changemakers.
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
