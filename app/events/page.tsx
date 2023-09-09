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
} from '@chakra-ui/react';
import moment from 'moment';
import HeroContainer from '../components/EventsPage/HeroContainer';
import EventContainer from '../components/EventsPage/EventContainer';
import eventsData from './data';
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
  const [selectValue, setSelectValue] = useState('ALL');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full pointer-events-none">
        <Navbar />
      </div>
      <Box w="full" pt="12rem" pb="6">
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
        <Box mt="5rem">
          <Tabs position="relative" variant="unstyled">
            <TabList borderRadius="full" bgColor="#ebebeb" width="fit-content">
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
                  <SimpleGrid columns={4} columnGap="1rem" rowGap="1rem">
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
                px="2rem"
                py="1rem"
              >
                Past Events
              </Box>
              <Flex gap="1rem" alignItems="center" justifyContent="center">
                <Text fontFamily="var(--dm-sans)">Filter&nbsp;By</Text>
                <Select
                  onChange={handleSelectChange}
                  value={selectValue}
                  bgColor="#F2F2F2"
                  borderRadius="full"
                  size="md"
                >
                  <option value="ALL">All Events</option>
                  <option value="EVENT_CITY_MEETUP">City Meetups</option>
                  <option value="EVENT_HACKTOBERFEST">Hacktoberfest</option>
                  <option value="EVENT_BUILD_WITH">Build With</option>
                </Select>
              </Flex>
            </Flex>
            <SimpleGrid mt="3rem" columns={4} columnGap="1rem" rowGap="1rem">
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
    </div>
  );
};

export default EventsPage;
