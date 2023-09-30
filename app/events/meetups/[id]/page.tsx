'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Box, Flex } from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import eventsData from '../../data';
import HeroSection from '@/app/components/IndividualEventsPage/Hero';
import AgendaSection from '@/app/components/IndividualEventsPage/Agenda';
import WorkshopSection from '@/app/components/IndividualEventsPage/Workshop';
import CommunicationSection from '@/app/components/IndividualEventsPage/Communication';
import CodeOfConductSection from '@/app/components/IndividualEventsPage/COC';
import SponsorSection from '@/app/components/IndividualEventsPage/SponsorSection';

const sections = [
  {
    heading: 'Agenda',
    id: 'Agenda',
  },
  {
    heading: 'Workshops',
    id: 'Workshops',
  },
  {
    heading: 'Sponsors & Partners',
    id: 'Sponsors',
  },
  {
    heading: 'Communication platform',
    id: 'Communication',
  },
  {
    heading: 'Code of Conduct',
    id: 'COC',
  },
];

const IndividualEventPage = ({ params }: { params: { id: string } }) => {
  const [currentSection, setCurrentSection] = useState('Workshops');
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
    <Box className="relative container-1440" px={{ base: '2rem', '2xl': '0' }}>
      <Box className="relative top-0 left-0 w-full pointer-events-none">
        {/* <Navbar /> */}
      </Box>
      <Flex
        flexDir="column"
        pt={{ base: '5rem', md: '8rem' }}
        alignItems="center"
      >
        <Flex
          w="full"
          alignItems="center"
          justifyContent="center"
          pb={{ base: '2rem', md: '4rem', lg: '7rem' }}
          pt={{ base: '0', md: '4rem', lg: '7rem' }}
        >
          <HeroSection
            startTimestamp={startTimestamp}
            endTimestamp={endTimestamp}
            heading={heading}
            location={location}
            description={description}
          />
        </Flex>
        <Flex position="relative" alignItems="center" flexDir="column">
          <Flex
            position="sticky"
            my="4rem"
            top="0"
            w="full"
            justifyContent="center"
            py="1rem"
            bg="white"
            zIndex={100}
            display={{ base: 'none', lg: 'flex' }}
          >
            <Flex
              bgColor="rgb(249, 249, 249)"
              borderRadius="full"
              w="fit-content"
              gap="1rem"
              justifyContent="space-evenly"
              className="navbar"
            >
              {sections.map((section, index) => {
                return (
                  <Flex
                    bgColor={
                      currentSection === section.id ? 'black' : 'transparent'
                    }
                    color={currentSection === section.id ? 'white' : 'black'}
                    fontFamily="var(--font-dmsans)"
                    borderRadius="full"
                    fontSize="1.1rem"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="500"
                    px={{ md: '1rem', lg: '2rem', '2xl': '4rem' }}
                    py="1rem"
                    key={index}
                    cursor="pointer"
                    onClick={() => {
                      setCurrentSection(section.id);
                      document.querySelector(`#${section.id}`)!.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest',
                      });
                    }}
                  >
                    {section.heading}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
          <InView
            style={{ width: '100%' }}
            id="Agenda"
            as="div"
            threshold={0.5}
            onChange={(inView, entry) => inView && setCurrentSection('Agenda')}
          >
            <AgendaSection agenda={agenda} description={description} />
          </InView>
          <InView
            id="Workshops"
            style={{ width: '100%' }}
            as="div"
            threshold={0.5}
            onChange={(inView, entry) =>
              inView && setCurrentSection('Workshops')
            }
          >
            <WorkshopSection />
          </InView>
          <InView
            id="Sponsors"
            style={{ width: '100%' }}
            as="div"
            threshold={0.5}
            onChange={(inView, entry) =>
              inView && setCurrentSection('Sponsors')
            }
          >
            <SponsorSection />
          </InView>
          <InView
            id="Communication"
            style={{ width: '100%' }}
            as="div"
            threshold={0.5}
            onChange={(inView, entry) =>
              inView && setCurrentSection('Communication')
            }
          >
            <CommunicationSection />
          </InView>
          <InView
            id="COC"
            style={{ width: '100%' }}
            as="div"
            threshold={0.5}
            onChange={(inView, entry) => inView && setCurrentSection('COC')}
          >
            <CodeOfConductSection />
          </InView>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default IndividualEventPage;
