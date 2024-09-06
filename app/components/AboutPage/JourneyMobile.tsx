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
import journey from './journeyData';

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
          <Flex
            gap="1rem"
            alignItems="center"
            w={{ base: '100%', lg: '29%', xl: '25%' }}
          >
            <Heading
              fontFamily="var(--font-against-history)"
              fontWeight="500"
              color="#A64DFF"
              fontSize={{ base: '3rem', md: '4rem' }}
            >
              Journey
            </Heading>
            <Heading
              fontSize={{ base: '2rem', md: '3rem' }}
              fontFamily="var(--font-outfit)"
              fontWeight="500"
            >
              so far...
            </Heading>
          </Flex>
          <Text
            textAlign={{ base: 'left', lg: 'right' }}
            w={{ base: '100%', lg: '45%' }}
            fontSize="1.125rem"
            fontWeight="400"
          >
            From our humble beginnings in 2020 to a thriving hub of innovation
            today, join us as we celebrate every milestone and dream bigger for
            the future!
          </Text>
        </Flex>
        <Flex w="full" gap="1.5rem" flexDir="column">
          <Tabs index={currentTab}>
            <TabPanels>
              {journey.map(
                (
                  {
                    title,
                    eventName,
                    eventImage,
                    teamImage,
                    description,
                    emoji1,
                    emoji2,
                  },
                  index,
                ) => (
                  <TabPanel
                    p="0"
                    display="flex"
                    w="full"
                    key={index}
                    flexDir="column"
                    overflow="hidden"
                  >
                    <Flex
                      w="full"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="1rem"
                      mb="1rem"
                    >
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
                      <Heading
                        fontSize="1.5rem"
                        fontWeight="500"
                        fontFamily="var(--font-outfit)"
                        color="#939191"
                      >
                        {title}
                      </Heading>
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
                          {emoji1}
                        </Flex>
                        <Image
                          aspectRatio="0.984"
                          objectFit="cover"
                          borderRadius="1rem"
                          src={eventImage}
                          alt={eventName}
                        />
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
                    <Flex mt="1rem" flexDir="column" position="relative">
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
                        transform="rotate(15deg)"
                      >
                        {emoji2}
                      </Flex>
                      <Image
                        borderRadius="1rem"
                        objectFit="cover"
                        aspectRatio="1.78"
                        h="full"
                        w="full"
                        src={teamImage}
                        alt={eventName}
                      />
                    </Flex>
                  </TabPanel>
                ),
              )}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JourneySectionMobile;
