import Image from "next/image";
import DemoOne from "../assets/images/demo1.svg";

const Section = (props) => {
  return (
    <div className="grid grid-cols-2 h-[100vh] sticky top-0">
      <div></div>
      <div>
        <Image src={props.image} alt="1" className="h-[100vh] object-cover" />
      </div>
    </div>
  );
};

export default function ScrollSection(props) {
  const navbarItems = [
    {
      heading: "Hackathon",
      linkTo: "/hackathon",
      image: DemoOne,
      text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    },
    {
      heading: "Meetups",
      linkTo: "/hackathon",
      image: DemoOne,
      text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    },
    {
      heading: "Build with",
      linkTo: "/hackathon",
      image: DemoOne,
      text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    },
    {
      heading: "Hacktoberfest",
      linkTo: "/hackathon",
      image: DemoOne,
      text: "Hack This Fall began with a mindset of encouraging beginner hackers to build unique projects regardless of  the tech or field; the only focus was to create something  meaningful and enjoy building while also solving the shared struggles of our surroundings.",
    },
  ];

  return (
    <div
      className="sticky top-0"
      style={{
        height: `${navbarItems.length * 100}vh`,
      }}
    >
      {navbarItems.map((item, index) => (
        <Section image={item.image} />
      ))}
    </div>
  );
}
