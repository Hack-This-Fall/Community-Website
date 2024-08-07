"use client";

import Navbar from "../components/Navbar";
import {
  Box,
  useBreakpointValue,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import OpenNavbar from "../components/OpenNavbar";
import StickyFooter from "../components/StickyFooter";
import JourneySection from "../components/AboutPage/Journey";
import JourneySectionMobile from "../components/AboutPage/JourneyMobile";

const values = [
  {
    heading: "Community First Approach",
    description:
      "We prioritize the well-being and safety of our community members above all else. Our focus is to foster an environment where every participant feels valued, safe, and supported to proactively collaborate, seek (and give) constructive feedback, and consistently adapt to meet the evolving needs of the community to ensure a positive and fulfilling hackathon experience for all.",
    logoUrl: "/images/about/values1.png",
  },
  {
    heading: "Adaptive Mindset",
    description:
      "We emphasize the importance of cultivating a flexible and open approach to problem-solving. We encourage members to consistently assess and adjust their approach based on previous learnings and feedback, embrace change, and build effective strategies upon both successes AND failures to foster a culture of resilience and innovation in the face of evolving challenges.",
    logoUrl: "/images/about/values2.png",
  },
  {
    heading: "Experience for All",
    description:
      "We strive to provide an inclusive, accessible, and enriching experience for every individual involved, be it participants, mentors, judges, speakers, partners, volunteers, organizers, or any contributor. At Hack This Fall, it is one of our goals to empower everyone to participate proactively in fostering a collaborative environment for collective success.",
    logoUrl: "/images/about/values3.png",
  },
  {
    heading: "Distinguished Benchmark",
    description:
      "We are committed to setting and upholding a high bar of excellence for the quality of our hackathon experience. We are dedicated towards creating an environment where excellence, innovation, and meaningful impact are not only encouraged but also expected from our team members and the broader community to deliver outstanding experiences consistently.",
    logoUrl: "/images/about/values4.png",
  },
];

const team = [
  {
    image: "/images/team/apoorv.png",
    name: "Apoorv Dwivedi",
  },
  {
    image: "/images/team/dennis.png",
    name: "Dennis D'mello",
  },
  {
    image: "/images/team/paras.png",
    name: "Paras Gupta",
  },
  {
    image: "/images/team/rohan.png",
    name: "Rohan Kambli",
  },
  {
    image: "/images/team/sahil.png",
    name: "Sahil Sen",
  },
  {
    image: "/images/team/shitiz.png",
    name: "Shitiz Aggarwal",
  },
  {
    image: "/images/team/siddharth.png",
    name: "Siddharth Dayalwal",
  },
  {
    image: "/images/team/vaibhav.png",
    name: "Vaibhav Toshniwal",
  },
];

const EventsPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(149);

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

  return (
    <Box className="relative">
      <Box
        zIndex="100"
        className="relative w-full bg-white top-0 left-0 rounded-b-3xl"
      >
        {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
        <Navbar
          setIsNavbarOpen={setIsNavbarOpen}
          setNavbarHeight={setNavbarHeight}
        />
        <Box
          className="relative container-1200 bg-white"
          px={{ base: '2rem', '2xl': '0' }}
        >
          <Flex
            w="full"
            pt={{ base: '2rem', md: '4rem' }}
            pb={{ base: '4rem', md: '6rem', lg: '8rem' }}
            flexDir={{ base: 'column-reverse', lg: 'row' }}
            gap="2rem"
          >
            <Flex w={{ base: '100%', lg: '45%' }} flexDir="column">
              <Flex gap="1rem" alignItems="center">
                <Heading
                  fontSize={{ base: '3rem', md: '4.5rem' }}
                  fontFamily="var(--font-against-history)"
                  fontWeight="500"
                  color="#A64DFF"
                >
                  Hackathon
                </Heading>
                <Heading
                  fontSize={{ base: '2rem', md: '3.5rem' }}
                  fontFamily="var(--font-outfit)"
                  fontWeight="500"
                >
                  you knew,
                </Heading>
              </Flex>
              <Flex mt="-1rem" gap="1rem" alignItems="center">
                <Heading
                  fontSize={{ base: '3rem', md: '4.5rem' }}
                  fontFamily="var(--font-against-history)"
                  fontWeight="500"
                  color="#FF9933"
                >
                  Community
                </Heading>
                <Heading
                  fontSize={{ base: '2rem', md: '3.5rem' }}
                  fontFamily="var(--font-outfit)"
                  fontWeight="500"
                >
                  you didn&apos;t!
                </Heading>
              </Flex>
              <Text
                mt="1.5rem"
                fontSize="1.125rem"
                fontWeight="400"
                fontFamily="var(--font-outfit)"
              >
                Hack This Fall is one of India&apos;s most welcoming, inclusive,
                and thriving hacker communities. It was started in 2020 with a
                mindset of encouraging new hackers to build unique projects
                regardless of the technology or field. The primary focus of Hack
                This Fall is to create meaningful experiences using technology
                and enjoy the process of building them while solving societal
                and environmental issues through the projects.
                <br />
                <br />
                We aim to help hackers succeed in their professional journey by
                giving them a platform to showcase their skills, meet
                like-minded people, learn in public, and grow together. The Hack
                This Fall community strongly embodies the values of inclusivity
                and diversity at its core and reflects these values across all
                its community events.
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="center"
              w={{ base: '100%', lg: '55%' }}
            >
              <Image
                w="full"
                h="full"
                objectFit="cover"
                alt="City Meetup"
                src="/images/about/hero.png"
                borderRadius="2rem"
              />
            </Flex>
          </Flex>
          <Flex
            pb={{ base: '4rem', md: '6rem', lg: '8rem' }}
            w="full"
            flexDir="column"
          >
            <Heading
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontFamily="var(--font-outfit)"
              fontWeight="500"
            >
              Mission
            </Heading>
            <Flex
              flexDir={{ base: 'column', lg: 'row' }}
              mt="1.5rem"
              gap="2rem"
            >
              <Flex
                border="1px solid #D9D9D9"
                p={{ base: '1.5rem', lg: '2.9rem' }}
                borderRadius="3xl"
                w="full"
                flexDir="column"
              >
                <Flex alignItems="center" gap="1rem">
                  <Image
                    w="15%"
                    alt="mission"
                    src="/images/about/mission1.png"
                  />
                  <Heading
                    fontSize={{ base: '1.5rem', md: '2rem' }}
                    fontFamily="var(--font-outfit)"
                    fontWeight="500"
                  >
                    Empower Builders to Excel and Innovate
                  </Heading>
                </Flex>
                <Text mt="2rem" fontSize="1.125rem" fontWeight="400">
                  By giving beginners in the tech industry access to the right
                  platform and resources, Hack This Fall aims to empower
                  developers to succeed professionally.
                </Text>
              </Flex>
              <Flex
                border="1px solid #D9D9D9"
                p={{ base: '1.5rem', lg: '2.9rem' }}
                borderRadius="3xl"
                w="full"
                flexDir="column"
              >
                <Flex alignItems="center" gap="1rem">
                  <Image
                    w="15%"
                    alt="mission"
                    src="/images/about/mission2.png"
                  />
                  <Heading
                    fontSize={{ base: '1.5rem', md: '2rem' }}
                    fontFamily="var(--font-outfit)"
                    fontWeight="500"
                  >
                    Enable Innovation for the Greater Good
                  </Heading>
                </Flex>
                <Text mt="2rem" fontSize="1.125rem" fontWeight="400">
                  By building a diverse and inclusive community of creative
                  thinkers and innovators, Hack This Fall strives to harness the
                  power of technology, entrepreneurship, and innovation for the
                  betterment of society.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="full"
            pb={{ base: '4rem', md: '6rem', lg: '8rem' }}
            flexDir={{ base: 'column', lg: 'row' }}
            gap="2rem"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w={{ base: '100%', lg: '55%' }}
            >
              <Image
                w="full"
                alt="City Meetup"
                src="/images/about/vision.jpg"
                borderRadius="1.5rem"
                aspectRatio="1.8"
                objectFit="cover"
              />
            </Flex>
            <Flex
              justifyContent="center"
              w={{ base: '100%', lg: '45%' }}
              flexDir="column"
            >
              <Heading
                fontSize={{ base: '2.5rem', md: '3.5rem' }}
                fontFamily="var(--font-outfit)"
                fontWeight="500"
              >
                Vision
              </Heading>
              <Text
                mt="1.5rem"
                fontSize="1.125rem"
                fontWeight="400"
                fontFamily="var(--font-outfit)"
              >
                Our vision is to become the pioneers of a true hacker experience
                that the world recognizes as the gold standard for a successful,
                welcoming, and diverse platform for innovators to build
                groundbreaking solutions. Our hope for Hack This Fall is to
                break the bounds of gender biases in tech by promoting (and
                creating) equal opportunities for ALL.
                <br />
                <br />
                We aim to inspire a new generation of problem-solvers with a
                thoughtful and human-centric approach.
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="full"
            mb={{ base: '4rem', md: '6rem', lg: '8rem' }}
            flexDir={{ base: 'column', lg: 'row' }}
            gap="4rem"
          >
            <Flex
              flexDir="column"
              minH={{ base: 'unset', lg: '56rem' }}
              pos="relative"
            >
              <Heading
                pos={{ base: 'unset', lg: 'sticky' }}
                top="10px"
                fontSize={{ base: '2.5rem', md: '3.5rem' }}
                fontFamily="var(--font-outfit)"
                fontWeight="500"
              >
                Our Values
              </Heading>
            </Flex>
            <Grid
              templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
              gap="1.5rem"
            >
              {values.map(({ heading, description, logoUrl }, index) => {
                return (
                  <GridItem
                    key={index}
                    border="1px solid #D9D9D9"
                    p={{ base: '1.5rem', lg: '2rem' }}
                    borderRadius="3xl"
                    w="full"
                    flexDir="column"
                  >
                    <Flex flexDir="column" gap="1rem">
                      <Image w="15%" alt="mission" src={logoUrl} />
                      <Heading
                        fontSize={{ base: '1.5rem', md: '2rem' }}
                        fontFamily="var(--font-outfit)"
                        fontWeight="500"
                      >
                        {heading}
                      </Heading>
                    </Flex>
                    <Text
                      alignSelf="flex-end"
                      mt="2rem"
                      fontSize="1.125rem"
                      fontWeight="400"
                    >
                      {description}
                    </Text>
                  </GridItem>
                );
              })}
            </Grid>
          </Flex>
          {!isMobile && <JourneySection />}
          {isMobile && <JourneySectionMobile />}
          <Flex
            flexDir="column"
            w="full"
            pb={{ base: '4rem', md: '4rem', lg: '6rem' }}
          >
            <Heading
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontFamily="var(--font-outfit)"
              fontWeight="500"
              mb="2rem"
            >
              Team
            </Heading>
            <Grid
              templateColumns={{
                base: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
              }}
              gap="2rem"
            >
              {team.map((member, index) => (
                <GridItem
                  key={index}
                  display="flex"
                  flexDir="column"
                  gap="1.5rem"
                >
                  <Image
                    objectFit="cover"
                    borderRadius="1rem"
                    src={member.image}
                    alt={member.name}
                  />
                  <Heading
                    fontSize={{base: "0.9rem", md: "1.5rem"}}
                    mt="-10px"
                    fontWeight="500"
                    fontFamily="var(--font-outfit)"
                  >
                    {member.name}
                  </Heading>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default EventsPage;
