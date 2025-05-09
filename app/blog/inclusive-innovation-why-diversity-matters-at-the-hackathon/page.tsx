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
              <p className="text-2xl -mb-4 font-semibold">
                What is a hackathon?
              </p>
              <p className="text-lg">
                We all are well aware of the literal definition of what a
                hackathon is, but what exactly a hackathon is...A hackathon is a
                space where our crazy ideas shape into reality! Just imagine
                sitting in a place full of like-minded folks, brainstorming with
                a team, hacking for prolonged hours, testing and deploying,
                networking and making connections, building projects and much
                more. A space that comes with inclusive innovation drives an
                individual or teams to work together towards achieving
                collaborative goals. A space where hacks don&apos;t remain hacks
                but turn into mind-blowing projects or startup ideas.
              </p>
              <p className="text-2xl -mb-4 font-semibold">
                Diversity & Innovation
              </p>
              <p className="text-lg">
                Innovation is driven by collaboration, imagination, creativity
                and differing qualities or diversity that provide novel
                solutions to meaningful problems. Inclusive innovation is a
                concept that combines these fundamentals and creates space where
                individuals irrespective of their background come together to
                learn and grow. As said, diversity fuels creativity and
                innovation but diversity isn’t a tick box or check box exercise.
                It requires a commitment to bring change and live in an
                all-inclusive environment. One of the best examples of this is
                the technical communities and hackathons that aim to foster an
                inclusive environment where people of diverse backgrounds,
                genders, and cultures can collaborate and innovate for good.
                These communities are spaces with zero tolerance for
                discrimination or other exclusionary behavior. They value
                diversity and acknowledge unique, diverse perspectives leading
                to revolutionary ideas.
              </p>
              <p className="text-2xl -mb-4 font-semibold">
                Why diversity matters!
              </p>
              <p className="text-lg">
                Hackathons are events that promote teamwork, creativity and
                problem-solving. In recent years hackathons have evolved in such
                a way that geographical boundaries do not limit inclusiveness.
                There are offline and online spaces where programmers, coders
                and tech enthusiasts convene to share knowledge, build solutions
                and inspire one another.
              </p>
              <p className="text-lg">
                Hackathon is an excellent way of collaborating for the greater
                good and that is why diversity and inclusivity play a major role
                in hackathons in its many aspects to construct to a true
                hackathon experience.
              </p>
              <p className="text-xl -mb-4 font-semibold">2-way street</p>
              <p className="text-lg">
                A hackathon is a competitive event where individuals/teams
                together develop solutions. Learning is a 2-way street. One can
                seek guidance from experienced and in return can share their
                perspectives or ideas.
              </p>
              <p className="text-xl -mb-4 font-semibold">
                Innovation creativity and enhanced decision-making.
              </p>
              <p className="text-lg">
                Diverse teams bring diverse perspectives, experiences and
                backgrounds as team members approach problems and tasks from
                various angles. This in turn leads to comprehensive and
                thoughtful decisions to solve the problem.
              </p>
              <p className="text-xl -mb-4 font-semibold">Better Adaptability</p>
              <p className="text-lg">
                When put in situations of extreme pressure and stress diverse
                teams often adapt to such rapid change in the environment as
                there are people in the team who have different skills that
                benefit the team and make the difference.
              </p>
              <p className="text-xl -mb-4 font-semibold">
                Mentorship and Guidance
              </p>
              <p className="text-lg">
                Navigating the complexity of coding or project building becomes
                a comparatively easier process when seasoned developers act as
                guides. There are mentors who offer all the required support to
                those just starting their journey.
              </p>
              <p className="text-xl -mb-4 font-semibold">
                Recognition and Appreciation
              </p>
              <p className="text-lg">
                Acknowledging and celebrating achievements also gives a sense of
                belongingness. At hackathons, one gets to network and
                collaborate with like-minded folks and share stories of shared
                struggles. A spirit of technical expertise and inclusive
                innovation is shared.
              </p>
              <p className="text-xl -mb-4 font-semibold">Measuring Success</p>
              <p className="text-lg">
                Success here is not about having coding skills or winning the
                hackathon but about together building a welcoming environment
                fostering equal participation. It is about committing to
                Inclusive innovation. Matrix for success go beyond lines of code
                and are scaled upon lives touched and problems solved for a
                social cause or greater good.
              </p>
              <p className="text-2xl -mb-4 font-semibold">
                Challenges to Diversity Inclusion & Shaping of Future.
              </p>
              <p className="text-lg">
                Inclusive innovation is not limited to coding in hackathons. It
                has to expand its horizons for advances in all aspects, be it
                technical or real-life problem-solving. Evidently, it is a task
                to address challenges that obstruct the inclusive environment
                and fostering of diverse perspectives but that is what Inclusive
                Innovation is all about, where everyone is sitting at the table
                and innovating for Good.
              </p>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
