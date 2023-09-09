'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
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
} from '@chakra-ui/react';
import EventContainer from '../../components/EventsPage/EventContainer';
import eventsData from '../data';

const CityMeetupsPage = () => {
  return (
    <div className="relative">
      <div className="relative top-0 left-0 w-full pointer-events-none">
        <Navbar />
      </div>
      <Flex flexDir="column" w="full" pt="12rem" pb="6">
        <Flex mb="3rem" gap="1.5rem">
          <Flex
            flexDir="column"
            py="4rem"
            px="3rem"
            bgColor="rgba(78, 157, 255, 0.10)"
            borderRadius="2rem"
          >
            <Heading
              fontSize="4rem"
              fontFamily="var(--font-poppins)"
              fontWeight="700"
              color="#388CF5"
            >
              Build-with Hack This Fall
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
              w="40%"
              borderRadius="1.875rem"
              backgroundColor="#388CF5 !important"
              color="white"
              display="inline-flex"
              height="3.2rem"
              justifyContent="center"
              alignItems="center"
              fontSize="1.1rem"
              fontWeight="700"
              _hover={{
                background: '#388CF5',
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
                <SimpleGrid columns={4} columnGap="1rem" rowGap="1rem">
                  {eventsData.events
                    .filter((data) =>
                      eventsData.individualEventTabs[tab].filterFunction(
                        data,
                        'EVENT_BUILD_WITH',
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
    </div>
  );
};

export default CityMeetupsPage;
