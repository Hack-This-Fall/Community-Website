'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Text,
  Select,
  useBreakpointValue,
} from '@chakra-ui/react';
import moment from 'moment';
import HeroContainer from '../components/EventsPage/HeroContainer';
import EventContainer from '../components/EventsPage/EventContainer';
import eventsData from './data';
import { useState } from 'react';
import SliderContainer from '../components/EventsPage/HeroSliderContainer';
import dynamic from 'next/dynamic';
import OpenNavbar from '../components/OpenNavbar';
import NavbarDesktop from '../components/NavbarDesktop';

interface config {
  heading: string;
  content: string;
  sizes: ('sm' | 'md' | 'lg')[];
  image: any;
  link: string;
}

const config: config[] = [
  {
    sizes: ['lg', 'md', 'sm'],
    image: '/images/events/city.svg',
    heading: 'City Meetup',
    link: '/events/meetups',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
  {
    sizes: ['md', 'lg', 'sm'],
    heading: 'Hacktoberfest',
    image: '/images/events/hacktoberfest.svg',
    link: '/events/hacktoberfest',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
  {
    sizes: ['sm', 'md', 'lg'],
    heading: 'Build With',
    image: '/images/events/buildwith.svg',
    link: '/events/build-with',
    content:
      "Join the vibrant city meetup of the tech community at 'Hack This Fall' – an exhilarating gathering where innovation and collaboration converge",
  },
];

const EventsPage = () => {
  const [currentExpanded, setCurrentExpanded] = useState(0);
  const [selectValue, setSelectValue] = useState('ALL');
  const [currentTab, setCurrentTab] = useState(0);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

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
      <Box w="full" pt={{ base: '2rem', md: '6rem' }} pb={{ base: '4rem', md: '4rem', lg: '7rem' }}>
        {isMobile ? (
          <SliderContainer config={config} />
        ) : (
          <Flex w="full" gap="1.5rem" h="451px">
            {config.map((item, index) => (
              <HeroContainer
                key={index}
                index={index}
                setCurrentExpanded={setCurrentExpanded}
                imageSrc={item.image}
                heading={item.heading}
                content={item.content}
                size={config[currentExpanded].sizes[index]}
                link={item.link}
              />
            ))}
          </Flex>
        )}
        <Box mt="5rem">
          <Select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setCurrentTab(parseInt(event.target.value, 10))
            }
            value={currentTab}
            bgColor="#F2F2F2"
            borderRadius="full"
            size="md"
            w="48%"
            bg="black"
            color="white"
            outline="none"
            border="none"
            display={{ md: 'none' }}
          >
            {Object.keys(eventsData.tabs).map((item, index) => {
              return (
                <option key={index} value={index}>
                  {eventsData.tabs[item].heading}
                </option>
              );
            })}
          </Select>
          <Tabs
            index={currentTab}
            onChange={setCurrentTab}
            position="relative"
            variant="unstyled"
          >
            <TabList
              display={{ base: 'none', md: 'flex' }}
              borderRadius="full"
              bgColor="#ebebeb"
              width="fit-content"
            >
              {Object.keys(eventsData.tabs).map((item, index) => {
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
                    {eventsData.tabs[item].heading}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels mt="3rem">
              {Object.keys(eventsData.tabs).map((tab, index) => (
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
                        eventsData.tabs[tab].filterFunction(data),
                      )
                      .map((event, index) => (
                        <EventContainer eventData={event} key={index} />
                      ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          <Flex flexDir="column" mt="5rem">
            <Flex w="full" justifyContent="space-between">
              <Box
                bg="black"
                color="white"
                borderRadius="full"
                px={{ base: '1rem', md: '2rem' }}
                py={{ base: '0.6rem', md: '1rem' }}
              >
                Past Events
              </Box>
              <Flex gap="1rem" alignItems="center" justifyContent="center">
                <Text
                  display={{
                    base: 'none',
                    md: 'unset',
                  }}
                  fontFamily="var(--dm-sans)"
                >
                  Filter&nbsp;By
                </Text>
                <Select
                  onChange={handleSelectChange}
                  value={selectValue}
                  bgColor="#F2F2F2"
                  borderRadius="full"
                  size="md"
                  _focusVisible={{
                    borderColor: 'black',
                  }}
                >
                  <option value="ALL">All Events</option>
                  <option value="EVENT_CITY_MEETUP">City Meetups</option>
                  <option value="EVENT_HACKTOBERFEST">Hacktoberfest</option>
                  <option value="EVENT_BUILD_WITH">Build With</option>
                </Select>
              </Flex>
            </Flex>
            <SimpleGrid
              mt="3rem"
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
                .filter(
                  (data) =>
                    moment().diff(data.startTimestamp) > 0 &&
                    (selectValue === 'ALL' || data.type === selectValue),
                )
                .map((event, index) => (
                  <EventContainer eventData={event} key={index} />
                ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default EventsPage;
