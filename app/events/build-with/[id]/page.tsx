'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import eventsData from '../../data';
import HeroSection from '@/app/components/IndividualEventsPage/Hero';
import AgendaSection from '@/app/components/IndividualEventsPage/Agenda';
import WorkshopSection from '@/app/components/IndividualEventsPage/Workshop';

const sections = [
  'Agenda',
  'Workshops',
  'Sponsors & Partners',
  'Communication platform',
  'Code of Conduct',
];

const IndividualEventPage = ({ params }: { params: { id: string } }) => {
  const [currentSection, setCurrentSection] = useState('Agenda');
  const router = useRouter();
  const eventId = params.id;
  const eventData = eventsData.events.find((event) => event.id === eventId);
  if (!eventData) {
    router.replace('/404');
  }

  const {
    startTimestamp,
    endTimestamp,
    heading,
    location,
    description,
    agenda,
  } = eventData || {};

  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full pointer-events-none">
        <Navbar />
      </div>
      <Flex flexDir="column" pt="8rem" alignItems="center">
        <Flex w="full" alignItems="center" justifyContent="center" py="7rem">
          <HeroSection
            startTimestamp={startTimestamp}
            endTimestamp={endTimestamp}
            heading={heading}
            location={location}
            description={description}
          />
        </Flex>
        <Flex
          bgColor="rgb(249, 249, 249)"
          borderRadius="full"
          w="fit-content"
          gap="1rem"
          justifyContent="space-evenly"
          my="2rem"
        >
          {sections.map((section, index) => {
            return (
              <Flex
                bgColor={currentSection === section ? 'black' : 'transparent'}
                color={currentSection === section ? 'white' : 'black'}
                fontFamily="var(--font-dmsans)"
                borderRadius="full"
                fontSize="1.1rem"
                fontWeight="500"
                px="4rem"
                py="1rem"
                key={index}
              >
                {section}
              </Flex>
            );
          })}
        </Flex>
        <AgendaSection agenda={agenda} description={description} />
        <WorkshopSection />
      </Flex>
    </div>
  );
};

export default IndividualEventPage;
