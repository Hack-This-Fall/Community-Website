import {
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const journey = [
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February2 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February3 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February4 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February5 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February6 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February7 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
];

const JourneySectionMobile = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex w="full" overflow="scroll">
      <Flex flexDir="column" pb={{ base: '4rem', md: '4rem', lg: '4rem' }}>
        <Flex
          flexDir="column"
          alignItems="center"
          w="full"
          justifyContent="space-between"
          mb={{ base: '2rem', lg: '5rem' }}
          gap={{ base: '2rem', lg: '10rem' }}
        >
          <Heading
            w={{ base: '100%', lg: '29%', xl: '25%' }}
            fontSize={{ base: '2rem', md: '3rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
          >
            Our Journey so far...
          </Heading>
          <Text
            textAlign={{ base: 'left', lg: 'right' }}
            w={{ base: '100%', lg: '45%' }}
            fontSize="1.125rem"
            fontWeight="400"
          >
            We emphasize the importance of cultivating a flexible and open
            approach to problem-solving. We emphasize the importance of
            cultivating a flexible and open approach to problem-solving.
          </Text>
        </Flex>
        <Flex w="full" gap="1.5rem" flexDir="column">
          <Tabs index={currentTab}>
            <TabPanels>
              {journey.map(
                (
                  { title, eventName, eventImage, teamImage, description },
                  index,
                ) => (
                  <TabPanel
                    p="0"
                    display="flex"
                    w="full"
                    key={index}
                    flexDir="column"
                  >
                    <Heading
                      fontSize="1.5rem"
                      fontWeight="500"
                      fontFamily="var(--font-outfit)"
                      mb="1rem"
                    >
                      {title}
                    </Heading>
                    <Text mb="1rem" fontSize="1rem" fontWeight="400">
                      {description}
                    </Text>
                    <Grid templateColumns="1.1fr 0.9fr" gap="1rem">
                      <GridItem position="relative">
                        <Flex
                          h="41px"
                          w="41px"
                          borderRadius="full"
                          justifyContent="center"
                          alignItems="center"
                          bg="#FFF1D1"
                          position="absolute"
                          top="-10px"
                          right="-8px"
                          transform="rotate(-15deg)"
                        >
                          🧡
                        </Flex>
                        <Image src={eventImage} alt={eventName} />
                      </GridItem>
                      <GridItem
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        gap="0.5rem"
                      >
                        <Heading
                          fontSize="1.5rem"
                          fontWeight="500"
                          fontFamily="var(--font-outfit)"
                        >
                          {eventName}
                        </Heading>
                      </GridItem>
                    </Grid>
                    <Flex mt="-2rem" flexDir="column">
                      <Flex
                        justifyContent="flex-end"
                        alignItems="center"
                        mb="0.5rem"
                      >
                        <Flex
                          h="41px"
                          w="41px"
                          borderRadius="full"
                          justifyContent="center"
                          alignItems="center"
                          bg="#FFF1D1"
                        >
                          🙌
                        </Flex>
                        <Heading
                          fontSize="1.5rem"
                          fontWeight="500"
                          fontFamily="var(--font-outfit)"
                          ml="0.5rem"
                        >
                          Team
                        </Heading>
                      </Flex>
                      <Image w="full" src={teamImage} alt={eventName} />
                    </Flex>
                  </TabPanel>
                ),
              )}
            </TabPanels>
          </Tabs>
          <Flex w="full" justifyContent="center" alignItems="center" gap="1rem">
            <IconButton
              isDisabled={currentTab === 0}
              borderRadius="full"
              w="20px"
              bgColor="#000 !important"
              icon={<ArrowBackIcon color="white" />}
              onClick={() => {
                if (currentTab > 0) setCurrentTab(currentTab - 1);
              }}
              aria-label="Scroll"
            />
            <IconButton
              borderRadius="full"
              w="20px"
              bgColor="#000 !important"
              isDisabled={currentTab === journey.length - 1}
              onClick={() => {
                if (currentTab < journey.length - 1)
                  setCurrentTab(currentTab + 1);
              }}
              icon={<ArrowForwardIcon color="white" />}
              aria-label="Scroll"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JourneySectionMobile;
