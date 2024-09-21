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
              <p>
                Hack This Fall began with a mindset of encouraging new hackers
                to build unique projects regardless of the tech or field; the
                only focus was to create something meaningful and enjoy building
                while also solving the shared struggles of our surroundings.
              </p>
              <p>
                Hack This Fall Season 1 was a 24 Hours Virtual Hackathon
                organized on Oct 31st - Nov 1st, 2020. We organized this event
                during the global COVID-19 crisis, when the entire world was
                suffering from a pandemic. The event allowed participants to
                join from the safety and comfort of their homes.
              </p>
              <p>
                In Season 1, we were joined by 500+ superb hackers from 170+
                cities, who all were motivated to build towards solving
                society’s everyday problems, and ended up building 50+ projects,
                which was in line with our motto i.e. “Build & Solve”. Hackers
                truly understood the value of our motto and showed their
                excellent piece of innovation and problem-solving skills. Not
                only this, we found hackers hacking individually and
                collaborating in a team, but this didn’t stop them from engaging
                with other hackers in a meaningful way.
              </p>
              <Image src="https://a.storyblok.com/f/181818/1500x844/31dc503747/nopath-copy-8-2x.png" />
              <p>
                While we are talking about hackathons and especially about Hack
                This Fall, it was not just limited to Coding and Building stuff.
                Hackers also had a ton of fun learning new skills and
                technologies. We hosted pre-hackathon speaker sessions where
                industry professionals were invited. They shared their knowledge
                about various domains like OpenSource, Game Development,
                BlockChain, Hackathons, DevRel, Web Technologies, Machine
                Learning, App Development, and whatnot; all these sessions were
                indeed so insightful for all our hackers.
              </p>
              <p>
                While the hackers were busy building their hacks, we also
                arranged multiple mini-events for all, where anyone could join,
                relax and enjoy their presence at the hackathon. Some of the
                mini-events included “MS Paint Bob-Ross,” where we flaunted our
                painting skills as we painted along with Bob Ross himself.
                Additionally, we also had “Hacker Hangouts,” which essentially
                helped everyone know more about each other. We even played games
                like “Among Us” and “Space Team”, which was a ton of fun. Not
                only this, but we also had “Mentor Connect” sessions, where
                hackers could interact with mentors and get feedback on their
                ideas/hacks.
              </p>
              <p>
                All in all, Season 1 was a huge success, thanks to all the
                fantastic hackers for joining and building with us. We couldn’t
                have made the process of running a hackathon at such a scale
                without the help & contribution of our elite panel of
                industry-leading speakers, experienced mentors, and righteous
                judges. The entire event ran smoothly like a cruise, thanks to
                all our sponsors and community partners, who helped us with
                their support and resources. Last but not least, kudos to our
                team, who worked dedicatedly for about 4+ months and put
                everything together.
              </p>
              <p>
                In the end, we bagged a lot of memories worth remembering. With
                that being said, to level up the energy and enthusiasm within
                the hacker community, we are excited to announce the next
                edition. So join us this season to have a mind-blowing
                experience in learning, building, and sharing your ideas. Head
                over to hackthisfall.tech to know more!
              </p>
              <p>Happy Hacking! 🧡</p>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
