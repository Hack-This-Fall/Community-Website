'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Flex } from '@chakra-ui/react';
import HeroContainer from '../components/EventsPage/HeroContainer';
import { useState } from 'react';

interface config {
  [key: number]: {
    heading: string;
    content: string;
    sizes: ('sm' | 'md' | 'lg')[];
    image: any;
  };
}

const config: config = {
  0: {
    sizes: ['lg', 'md', 'sm'],
    image: '/images/events/city.svg',
    heading: 'City Meetup',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
  1: {
    sizes: ['md', 'lg', 'sm'],
    heading: 'Hacktoberfest',
    image: '/images/events/hacktoberfest.svg',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
  2: {
    sizes: ['sm', 'md', 'lg'],
    heading: 'Build With',
    image: '/images/events/buildwith.svg',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
};

const EventsPage = () => {
  const [currentExpanded, setCurrentExpanded] = useState(0);
  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full pointer-events-none">
        <Navbar />
      </div>
      <Box w="full" pt="15rem" pb="6">
        <Flex w="full" gap="1.5rem" h="451px">
          {[0, 1, 2].map((item, index) => (
            <HeroContainer
              key={index}
              index={index}
              setCurrentExpanded={setCurrentExpanded}
              imageSrc={config[index].image}
              heading={config[index].heading}
              content={config[index].content}
              size={config[currentExpanded].sizes[index]}
            />
          ))}
        </Flex>
      </Box>
      <Footer />
    </div>
  );
};

export default EventsPage;
