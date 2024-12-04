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
              <p className="text-xl font-semibold">Overview</p>
              <p className="text-lg">
                Welcome to the magical world of Hack This Fall 2024, where some
                beautiful folks came, hacked, and had a good time. Hack This
                Fall 2024 was held from 9th to 11th February 2024 at Karnavati
                University, Gujarat. Now, let’s dive into what this season of
                Hack This Fall was all about.
              </p>
              <Image src="https://a.storyblok.com/f/182824/1690x966/2eb1b6b52f/1.png" />
              <p className="text-lg">
                With its motto &quot;Innovate For Good&quot; serving as a north
                star, this 36-hour in-person hackathon was powered by partner
                Orkes and backed by platinum partner Vonage. It set the stage
                for a whirlwind of creativity and camaraderie and was a
                testament to the power of creativity and community. Join us as
                we embark on a journey to relive the highlights, delve into the
                daily schedules, and cherish the unforgettable moments of this
                extraordinary event.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1127/952ee81b02/2-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/0a8684fb0e/2-1.png" />
              </div>
              <p className="text-lg">
                <span className="font-semibold">A Global Phenomenon -</span>{" "}
                Hack This Fall Season 4 broke new ground by bringing people from
                across the globe under one roof. Here&apos;s a glimpse into the
                diverse participation and achievements:
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>
                  <span className="font-semibold ">Registrations:</span> Over
                  2500 enthusiasts eagerly signed up for the event, showcasing
                  the widespread interest and enthusiasm for innovation.
                </li>
                <li>
                  <span className="font-semibold">Attendees:</span> With a
                  turnout exceeding 570 individuals, the hackathon buzzed with
                  energy and excitement as participants from various backgrounds
                  converged to exchange ideas and expertise.
                </li>
                <li>
                  <span className="font-semibold">Teams:</span> A total of 154
                  teams, representing a myriad of skill sets and perspectives,
                  embarked on the hackathon journey, each determined to make
                  their mark in the tech world.
                </li>
                <li>
                  <span className="font-semibold font-lg">Projects:</span>{" "}
                  Despite the intense competition, participants showcased their
                  creativity by developing an impressive array of 132 projects,
                  each addressing unique challenges and pushing the boundaries
                  of innovation.
                </li>
                <li>
                  <span className="font-semibold">Global Reach:</span> Hailing
                  from 113 cities across 8 countries, attendees embarked on a
                  truly global journey, highlighting the universality of
                  technological innovation and collaboration.
                </li>
                <li>
                  <span className="font-semibold">Mentorship:</span> Guiding the
                  participants through the hackathon were 20 selfless and
                  dedicated mentors, offering invaluable insights and support to
                  help teams navigate challenges and realize their visions.
                </li>
              </ul>
              <p className="text-lg">
                In this dynamic environment, participants thrived and not only
                showcased their technical prowess but also reflected their
                passion for driving positive change through innovation. Hack
                This Fall 2024 stands as a testament to the power of
                collaboration, diversity, and collective ingenuity in shaping
                the future of technology.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1128/fb5915f7c1/3-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1126/80ff96870b/3-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/4c1da1aed0/3-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/e940f5f6dc/3-4.png" />
              </div>
              <p className="text-xl font-semibold">
                Day 1: Igniting the Spark of Creativity
              </p>
              <p className="text-lg">
                The excitement began with the check-in of hackers and the
                distribution of welcome swag kits, setting the tone for the
                event. Light snacks and icebreakers fostered a sense of
                camaraderie among participants. The event kicked off with a
                keynote by powered-by Orkes, followed by insightful workshops
                from Orkes and Vonage. The Opening Ceremony marked the official
                start of the hackathon, and attendees dove into hacking as the
                36-hour countdown began. A dinner under the open sky provided a
                refreshing break, followed by a GitHub workshop and giveaways.
                Stroom, the nutrition partner, shared their inspiring startup
                journey, fueling the spirit of entrepreneurship among
                participants.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1127/ced68f4d75/4-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/5acc4677c3/4-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/304265f116/4-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/dad05e102e/4-4.png" />
              </div>
              <p className="text-xl font-semibold">
                Day 2: Nurturing Ideas, Fostering Collaboration
              </p>
              <p className="text-lg">
                The second day was filled with learning opportunities and
                collaborative moments. At midnight, the first mentorship round
                commenced, guiding participants through the ideation stage. The
                first checkpoint encouraged teams to add basic project details,
                ensuring progress and accountability. Midnight snacks from
                Balaji and a playful &quot;head, shoulders, knees, and
                toes&quot; game added a fun twist to the late-night hacking
                sessions. The day began with a hearty breakfast, followed by
                workshops from partners Postman, MLH, and Logitech. Orkes took
                the stage to showcase their product, inspiring participants with
                its potential.
              </p>
              <p className="text-lg">
                The second checkpoint prompted teams to submit their GitHub
                repos and select relevant partner tracks. Another round of
                mentoring focused on project implementation, preparing teams for
                the challenges ahead. Lunch provided a much-needed break,
                followed by mini-events from partners Orkes, Vonage, and MLH.
                Participants enjoyed light snacks and high tea as the day drew
                to a close while Orkes offered office hours at their booth. The
                evening concluded with the final mentorship round, providing
                teams with valuable feedback and guidance.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1128/340ec79b24/5-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/bd4049dec6/5-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/8750bc94ca/5-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/f30e6ec91a/5-4.png" />
              </div>
              <p className="text-xl font-semibold">
                Day 3: Celebrating Innovation and Achievement
              </p>
              <p className="text-lg">
                As the hackathon entered its final hours, teams worked
                tirelessly to put the finishing touches on their projects. The
                third checkpoint marked the last opportunity to ensure
                completeness. Midnight snacks and a coloring mini-event provided
                a brief respite from the intensity of hacking. Soft submission
                approached, and at 8 am, hacking officially concluded.
                Participants enjoyed a well-deserved breakfast before the
                judging process began.
              </p>
              <p className="text-lg">
                The final lunch was a chance to relax and reflect on the
                journey. The top 10 teams were announced, and each had the
                opportunity to pitch their ideas on stage. The tension reached
                its peak as the final winners were judged and declared. The
                Closing Ceremony was a bittersweet moment as participants bid
                farewell to each other, capturing the memories of an
                unforgettable experience.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1127/14b05c4bf4/6-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/c5a9abeb98/6-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/21689f7708/6-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/30ede7bd27/6-4.png" />
              </div>
              <p className="text-xl font-semibold">
                Beyond Hacking: A World of Experience
              </p>
              <p className="text-lg">
                In addition to the hacking activities, Hack This Fall 2024
                offered a diverse array of amenities and attractions to enhance
                the overall experience for participants. The event catered to
                various needs and interests, from comfortable sleeping areas
                providing a retreat for rest between coding sessions to engaging
                sponsor booths facilitating interactions with industry
                professionals and showcasing innovative products.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1127/5e133ec604/7-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/633f000647/7-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/d66fc3ce58/7-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1128/8b16e1086f/7-4.png" />
              </div>
              <p className="text-lg">
                Fuel stations equipped with coffee machines ensured that
                participants remained energized and focused throughout the
                hackathon, while the fun-game corner provided a welcome
                opportunity for relaxation and socialization with board games,
                foosball, table tennis, carrom, etc. Creative expression
                flourished at the photo booths and doodle booths, allowing
                participants to capture memories and unleash their artistic
                flair. Excitement buzzed with the announcement of numerous
                giveaways, adding an element of anticipation and reward to the
                event. Collectively, these offerings went beyond hacking to
                create a vibrant and enriching experience for all involved in
                Hack This Fall 2024.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <Image src="https://a.storyblok.com/f/182824/1690x1131/92481d968c/8-1.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/3d48cab2f0/8-2.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/145d1532d3/8-3.png" />
                <Image src="https://a.storyblok.com/f/182824/1690x1127/675dd1f861/8-4.png" />
              </div>
              <p className="text-xl font-semibold">
                Conclusion: A Legacy of Innovation and Collaboration
              </p>
              <p className="text-lg">
                As we bid adieu to Hack This Fall 2024, we reflect on the
                remarkable journey of innovation, collaboration, and camaraderie
                that defined this extraordinary event. From the vibrant
                exchanges during check-in to the jubilant celebrations at the
                closing ceremony, every moment was a testament to the power of
                community and creativity. With 132 projects created, countless
                connections made, and memories to last a lifetime, Hack This
                Fall 2024 will be remembered as a beacon of innovation and a
                celebration of human ingenuity. As we look forward to future
                editions of this incredible event, we invite you to join us on a
                journey of innovation, collaboration, and endless possibilities.
              </p>
              <p className="text-lg"> Happy Hacking! 🧡</p>
              <Image src="https://a.storyblok.com/f/182824/2000x1298/b40f845c17/9.png" />
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}
