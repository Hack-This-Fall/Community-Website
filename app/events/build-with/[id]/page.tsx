'use client';

import Navbar from '../../../components/Navbar';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import eventsData from '../../data';
import HeroSection from '@/app/components/IndividualEventsPage/Hero';
import AgendaSection from '@/app/components/IndividualEventsPage/Agenda';
import WorkshopSection from '@/app/components/IndividualEventsPage/Workshop';
import EventsEssentialSection from '@/app/components/IndividualEventsPage/EventEssential';
import OpenNavbar from '@/app/components/OpenNavbar';
import OverviewSection from '@/app/components/IndividualEventsPage/Overview';
import AboutPartnerSection from '@/app/components/IndividualEventsPage/AboutPartner';
import FAQSection from '@/app/components/IndividualEventsPage/FAQ';
import StickyFooter from '@/app/components/StickyFooter';

const sections = [
  {
    heading: 'Overview',
    id: 'Overview',
  },
  {
    heading: 'About Partner',
    id: 'AboutPartner',
  },
  {
    heading: 'Agenda',
    id: 'Agenda',
  },
  {
    heading: 'Workshops',
    id: 'Workshops',
  },
  {
    heading: 'Event Essentials',
    id: 'EventEssentials',
  },
  {
    heading: 'FAQs',
    id: 'FAQ',
  },
];

const IndividualEventPage = ({ params }: { params: { id: string } }) => {
  const [currentSection, setCurrentSection] = useState('Overview');
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
    partnerDescription,
    partnerLogo,
    partnerName,
    agenda,
    eventMode,
  } = eventData || {};

  const [navbarHeight, setNavbarHeight] = useState(149);

  const [isNavbarOpen, setNavbarOpen] = useState(false);

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

  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Box className="relative">
      <Box zIndex="100" className="relative w-full bg-white top-0 left-0">
        <Box
          className="relative container-1200 bg-white"
          px={{ base: '2rem', '2xl': '0' }}
        >
          <Box className="sticky top-0 left-0 w-full" zIndex={4}>
            {isNavbarOpen && <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />}
            <Navbar
              setIsNavbarOpen={setIsNavbarOpen}
              setNavbarHeight={setNavbarHeight}
            />
          </Box>
          <Flex flexDir="column" alignItems="center">
            <Flex w="full" alignItems="center" justifyContent="center">
              <HeroSection
                startTimestamp={startTimestamp}
                endTimestamp={endTimestamp}
                heading={heading}
                location={location}
                description={description}
                eventMode={eventMode}
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
                  border="1px solid black"
                  borderRadius="full"
                  w="full"
                  justifyContent="space-between"
                  className="navbar"
                >
                  {sections.map((section, index) => {
                    return (
                      <Flex
                        bgColor={
                          currentSection === section.id
                            ? 'black'
                            : 'transparent'
                        }
                        color={
                          currentSection === section.id ? 'white' : 'black'
                        }
                        fontFamily="var(--font-outfit)"
                        borderRadius="full"
                        fontSize="1.1rem"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="500"
                        px={{ md: '1rem', lg: '2rem', '2xl': '2rem' }}
                        py="1rem"
                        key={index}
                        cursor="pointer"
                        onClick={() => {
                          setCurrentSection(section.id);
                          document
                            .querySelector(`#${section.id}`)!
                            .scrollIntoView({
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
                id="Overview"
                as="div"
                threshold={0.5}
                onChange={(inView, entry) =>
                  inView && setCurrentSection('Overview')
                }
              >
                <OverviewSection description={description} />
              </InView>
              <InView
                id="AboutPartner"
                style={{ width: '100%' }}
                as="div"
                threshold={0.5}
                onChange={(inView, entry) =>
                  inView && setCurrentSection('AboutPartner')
                }
              >
                <AboutPartnerSection
                  partnerDescription={partnerDescription}
                  partnerLogo={partnerLogo}
                  partnerName={partnerName}
                />
              </InView>
              <InView
                id="Agenda"
                style={{ width: '100%' }}
                as="div"
                threshold={0.5}
                onChange={(inView, entry) =>
                  inView && setCurrentSection('Agenda')
                }
              >
                <AgendaSection description="" agenda={agenda} />
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
                id="EventEssentials"
                style={{ width: '100%' }}
                as="div"
                threshold={0.5}
                onChange={(inView, entry) =>
                  inView && setCurrentSection('EventEssentials')
                }
              >
                <EventsEssentialSection />
              </InView>
              <InView
                id="FAQ"
                style={{ width: '100%' }}
                as="div"
                threshold={0.5}
                onChange={(inView, entry) => inView && setCurrentSection('FAQ')}
              >
                <FAQSection />
              </InView>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default IndividualEventPage;
