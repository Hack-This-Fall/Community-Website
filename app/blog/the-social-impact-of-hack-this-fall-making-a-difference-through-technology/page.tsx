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
                Hackathons are far more than coding competitions—they’re spaces
                where passion meets purpose, where people come together to
                create tech solutions that address real-world challenges. At
                Hack This Fall, the emphasis goes beyond innovation to include
                meaningful impact. By gathering participants with diverse
                perspectives and skills, we’re creating a community dedicated to
                driving positive social change through technology.
              </p>
              <p className="text-lg">
                Let’s explore how Hack This Fall makes a difference, what it
                means for participants and the broader community, and how you,
                too, can become part of this impactful movement.
              </p>
              <p className="text-2xl font-semibold">
                A Purpose-Driven Approach to Innovation 🎯{" "}
              </p>
              <p className="text-lg">
                In today’s interconnected world, technology and social change
                are inseparable. Hack This Fall encourages participants to think
                beyond code, focusing on tech solutions that address pressing
                social, environmental, and community-centered issues.
              </p>{" "}
              <p className="text-lg">
                From developing apps that provide mental health support to tools
                that assist in disaster preparedness or bridge educational gaps,
                each project at Hack This Fall begins with a fundamental
                question:{" "}
                <span className="font-semibold">
                  “How can we make a meaningful impact?”
                </span>
              </p>
              <p className="text-2xl font-semibold">
                Building a Community of Changemakers 🙌
              </p>
              <p className="text-lg">
                Hack This Fall is more than just a hackathon; it’s a thriving
                community of tech enthusiasts, mentors, and advocates, united by
                a commitment to using technology for social good. By bringing
                together people from diverse backgrounds, Hack This Fall fosters
                a melting pot of ideas and experiences. This diversity isn’t a
                bonus—it’s a necessity for creating holistic solutions that
                truly make a difference.
              </p>{" "}
              <p className="text-lg">
                Through Hack This Fall, participants become part of a network
                that amplifies social impact:
                <ul className="list-disc list-inside text-lg">
                  <li>
                    <span className="font-semibold ">
                      Diverse Skills and Perspectives:
                    </span>{" "}
                    Hack This Fall welcomes developers, designers, marketers,
                    and students alike. This mix of talents and viewpoints
                    allows teams to create solutions that are not only
                    technically robust but also user-centric and impactful.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Guidance from Experts:
                    </span>{" "}
                    Seasoned mentors, speakers, and workshop leaders encourage
                    participants to consider the ethical implications,
                    accessibility, and community needs behind each solution,
                    bringing greater depth and reach to their projects.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Post-Hackathon Support:
                    </span>{" "}
                    Many projects don’t end with the hackathon. With access to
                    post-event resources, networking opportunities, and
                    sometimes even funding, teams have the chance to develop
                    their projects beyond the prototype stage. This continuity
                    helps turn ideas developed over a weekend into sustainable
                    solutions with long-term impact.
                  </li>
                </ul>
              </p>
              <p className="text-2xl font-semibold">
                Turning Ideas into Real-World Solutions 🌱
              </p>
              <p className="text-lg">
                Hack This Fall has already inspired projects that go beyond the
                event, transforming initial ideas into impactful tools. Here are
                two examples of how past projects have driven positive change:
                <ul className="list-disc list-inside text-lg">
                  <li>
                    <span className="font-semibold">
                      <a
                        target="_blank"
                        href="https://devfolio.co/projects/crediblecode-4235"
                        className="underline font-semibold"
                      >
                        CredibleCode
                      </a>
                      :
                    </span>{" "}
                    A tool designed to detect genuine vs. artificial open-source
                    contributions, helping developers and recruiters assess
                    authenticity through color-coded graphs. It also assists
                    GitHub maintainers by automatically closing non-impactful
                    PRs using an LLM model, easing their workflow. The tool
                    integrates with platforms like hiring apps to ensure
                    reliable evaluation of candidates’ contributions.
                  </li>
                  <li>
                    <span className="font-semibold">
                      <a
                        target="_blank"
                        href="https://devfolio.co/projects/swasthai-ab9e"
                        className="underline font-semibold"
                      >
                        SwasthकAI
                      </a>
                      :
                    </span>{" "}
                    An app that empowers users to make informed food choices by
                    scanning packaging to reveal detailed ingredient data and
                    health impacts. Tailored for people managing conditions like
                    diabetes or allergies, it cuts through marketing gimmicks
                    for honest insights. With SwasthकAI, users control their
                    health journey by understanding what&apos;s really in their
                    food.
                  </li>
                </ul>
              </p>
              <p className="text-2xl font-semibold">
                Inspiring and Empowering the Next Generation ✨
              </p>
              <p className="text-lg">
                Hack This Fall focuses on inspiring young minds to become agents
                of change. Many participants are students or early-career
                professionals bringing fresh perspectives to complex issues.
                Through their involvement, they learn that their skills can have
                a powerful social impact.
                <ul className="list-disc list-inside text-lg">
                  <li>
                    <span className="font-semibold ">
                      Workshops and Skill-Building:
                    </span>{" "}
                    Throughout the hackathon, participants gain access to
                    workshops covering topics like ethical AI, accessible
                    design, and sustainable coding. These sessions help them
                    understand the broader social impact of their work, ensuring
                    they don’t just build tech, but build tech with a purpose.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Seeing the Bigger Picture:
                    </span>{" "}
                    By participating, individuals realize that their skills have
                    the power to make a difference. It’s a transformative
                    experience, allowing them to see how a weekend’s work could
                    improve lives or address critical issues in their
                    communities.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Instilling a Sense of Responsibility:
                    </span>{" "}
                    For many, Hack This Fall is the first step toward a
                    purposeful career in tech. It shows them how their passion
                    can be directed towards social good, inspiring a sense of
                    responsibility to use their abilities for positive change.
                  </li>
                </ul>
              </p>
              <p className="text-2xl font-semibold">Join the Movement 💪</p>
              <p className="text-lg">
                If you’re interested in Hack This Fall, know that you’re joining
                more than a hackathon—you’re joining a movement that’s reshaping
                what technology can do for society. This is your chance to make
                a difference, connect with like-minded innovators, and push the
                boundaries of tech for good.
              </p>
              <p className="text-lg">
                Stay updated on the{" "}
                <a
                  target="_blank"
                  href="https://hackthisfall.tech/events"
                  className="underline font-semibold"
                >
                  Hack This Fall events page
                </a>{" "}
                for our upcoming events and ways to participate. Don’t miss this
                opportunity to join a community where technology meets purpose,
                and where your ideas can make a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
