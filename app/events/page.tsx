'use client';

import Navbar from '../components/Navbar';
import {
  Box,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
import moment from 'moment';
import EventContainer from '../components/EventsPage/EventContainer';
import eventsData from './data';
import { useState } from 'react';
import OpenNavbar from '../components/OpenNavbar';
import PastEventContainer from '../components/EventsPage/PastEventContainer';
import StickyFooter from '../components/StickyFooter';

interface config {
  heading: string;
  content: string;
  sizes: ('sm' | 'md' | 'lg')[];
  image: any;
  link: string;
}

const EventsPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
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
          <Box
            w="full"
            pt={{ base: '2rem', md: '4rem' }}
            pb={{ base: '4rem', md: '4rem', lg: '7rem' }}
          >
            <Heading
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontFamily="var(--font-outfit)"
              fontWeight="400"
            >
              Events
            </Heading>
            <Box mt="2rem">
              <Flex
                borderRadius="full"
                bgColor="transparent"
                width="fit-content"
              >
                {eventsData.tabs.map((item, index) => {
                  return (
                    <Flex
                      key={index}
                      px={{ base: '1rem', xl: '2rem' }}
                      fontWeight="700"
                      fontFamily="var(--font-outfit)"
                      fontSize={{ base: '1rem', xl: '1.2rem' }}
                      py={{ base: '0.4rem', xl: '0.7rem' }}
                      transition="all 0.25s ease-in-out"
                      textTransform="uppercase"
                      bg={currentTab === index ? 'black' : 'white'}
                      color={currentTab === index ? 'white' : 'black'}
                      cursor="pointer"
                      onClick={() => setCurrentTab(index)}
                      borderRadius="full"
                    >
                      {item.heading}
                    </Flex>
                  );
                })}
              </Flex>
              {eventsData.events.filter(
                (data) =>
                  moment().diff(data.startTimestamp) < 0 &&
                  eventsData.tabs[currentTab].filterFunction(data),
              ).length > 0 && (
                <Flex flexDir="column" mt="2rem">
                  <Heading
                    fontSize={{ base: '1.8rem', md: '2.8rem' }}
                    fontFamily="var(--font-outfit)"
                    fontWeight="400"
                    mb="2rem"
                  >
                    Upcoming
                  </Heading>
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                      lg: 2,
                      '2xl': 3,
                    }}
                    columnGap="1rem"
                    rowGap="1rem"
                  >
                    {eventsData.events
                      .filter(
                        (data) =>
                          moment().diff(data.startTimestamp) < 0 &&
                          eventsData.tabs[currentTab].filterFunction(data),
                      )
                      .sort((a, b) =>
                        a.startTimestamp.diff(b.startTimestamp) > 0 ? 1 : -1,
                      )
                      .map((event, index) => (
                        <EventContainer eventData={event} key={index} />
                      ))}
                  </SimpleGrid>
                </Flex>
              )}
              <Flex flexDir="column" mt="2rem">
                <Flex w="full" justifyContent="space-between">
                  <Heading
                    fontSize={{ base: '1.8rem', md: '2.8rem' }}
                    fontFamily="var(--font-outfit)"
                    fontWeight="400"
                  >
                    Past
                  </Heading>
                </Flex>
                <Flex mt="1rem" w="full" flexDir="column">
                  {eventsData.events
                    .filter(
                      (data) =>
                        moment().diff(data.startTimestamp) > 0 &&
                        eventsData.tabs[currentTab].filterFunction(data),
                    )
                    .sort((a, b) =>
                      a.startTimestamp.diff(b.startTimestamp) < 0 ? 1 : -1,
                    )
                    .map((event, index) => (
                      <PastEventContainer eventData={event} key={index} />
                    ))}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default EventsPage;
