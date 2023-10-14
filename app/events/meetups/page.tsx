'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Text,
  Heading,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import EventContainer from '../../components/EventsPage/EventContainer';
import eventsData from '../data';
import { useState } from 'react';
import OpenNavbar from '@/app/components/OpenNavbar';
import NavbarDesktop from '@/app/components/NavbarDesktop';

const CityMeetupsPage = () => {
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

  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Box className="relative container-1440" px={{ base: '2rem', '2xl': '0' }}>
      <Box className="sticky top-0 left-0 w-full" zIndex={4}>
        {isMobile && isNavbarOpen && (
          <OpenNavbar setIsNavbarOpen={setIsNavbarOpen} />
        )}
        {isMobile ? (
          <Navbar
            setIsNavbarOpen={setIsNavbarOpen}
            setNavbarHeight={setNavbarHeight}
          />
        ) : (
          <NavbarDesktop />
        )}
      </Box>
      <Flex flexDir="column" w="full" pt={{ base: '6rem', md: '12rem' }} pb="6">
        <Flex flexDir={{ base: 'column', lg: 'row' }} mb="3rem" gap="1.5rem">
          <Flex
            flexDir="column"
            py={{ base: '2rem', lg: '4rem' }}
            px={{ base: '2rem', lg: '3rem' }}
            bgColor="rgba(178, 129, 254, 0.10)"
            borderRadius="2rem"
          >
            <Heading
              fontSize={{ base: '2.3rem', lg: '4rem' }}
              fontFamily="var(--font-poppins)"
              fontWeight="700"
              color="#9F6BF0"
            >
              Hack This Fall City Meetups
            </Heading>
            <Text
              w="95%"
              align="justify"
              my="2rem"
              fontSize="1.2rem"
              fontFamily="var(--font-dmsans)"
            >
              Experience the latest announcements from I/O with technical
              sessions, hands-on demos, and networking opportunities. Experience
              the latest announcements from
            </Text>
            <Button
              w="fit-content"
              px="2rem"
              borderRadius="1.875rem"
              backgroundColor="#9F6BF0 !important"
              color="white"
              display="inline-flex"
              height="3.2rem"
              justifyContent="center"
              alignItems="center"
              fontSize="1.1rem"
              fontWeight="700"
              _hover={{
                background: '#9F6BF0',
                color: 'white',
              }}
            >
              Coming Soon
            </Button>
          </Flex>
          <Image src="/images/events/city-meetup-hero.png" alt="city meetup" />
        </Flex>
        <Tabs position="relative" variant="unstyled">
          <TabList borderRadius="full" bgColor="#ebebeb" width="fit-content">
            {Object.keys(eventsData.individualEventTabs).map((item, index) => {
              return (
                <Tab
                  key={index}
                  px="2rem"
                  py="1rem"
                  transition="all 0.25s ease-in-out"
                  _selected={{
                    bg: 'black',
                    color: 'white',
                    borderRadius: 'full',
                  }}
                >
                  {eventsData.individualEventTabs[item].heading}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels mt="3rem">
            {Object.keys(eventsData.individualEventTabs).map((tab, index) => (
              <TabPanel p="0" key={index}>
                <SimpleGrid
                  columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                    '2xl': 4,
                  }}
                  columnGap="1rem"
                  rowGap="1rem"
                >
                  {eventsData.events
                    .filter((data) =>
                      eventsData.individualEventTabs[tab].filterFunction(
                        data,
                        'EVENT_CITY_MEETUP',
                      ),
                    )
                    .map((event, index) => (
                      <EventContainer eventData={event} key={index} />
                    ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
      <Footer />
    </Box>
  );
};

export default CityMeetupsPage;
