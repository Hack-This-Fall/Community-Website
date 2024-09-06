import {
  Box,
  useBreakpointValue,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import journey from './journeyData';

const JourneySection = () => {
  const isMd = useBreakpointValue({ md: true, xl: false });

  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollContainer });

  const xScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', isMd ? '-78.5%' : '-82.1%'], {
      
    }
  );
  return (
    <Flex ref={scrollContainer} height="1800vh" position="relative" w="full">
      <Flex
        flexDir="column"
        position="sticky"
        h="fit-content"
        pb={{ base: '4rem', md: '4rem', lg: '4rem' }}
        top="7rem"
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems="center"
          h="fit-content"
          justifyContent="space-between"
          mb="3rem"
          gap={{ base: '2rem', lg: '10rem' }}
          maxW={{ base: '85vw', lg: 'min(1200px, 92.2vw)' }}
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
            w={{ base: '100%', lg: '40%' }}
            fontSize="1.125rem"
            fontWeight="400"
          >
            From our humble beginnings in 2020 to a thriving hub of innovation
            today, join us as we celebrate every milestone and dream bigger for
            the future!
          </Text>
        </Flex>
        <motion.div style={{ x: xScroll, scrollBehavior: "smooth" }} className="flex gap-16">
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
              <Flex
                w={{ base: '100vw', md: '500px' }}
                key={index}
                flexDir="column"
              >
                <Heading
                  fontSize="1.5rem"
                  fontWeight="500"
                  fontFamily="var(--font-outfit)"
                  mb="2rem"
                  color="#939191"
                >
                  {title}
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
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
                      borderRadius="1.5rem"
                      objectFit="cover"
                      w="full"
                      src={eventImage}
                      alt={eventName}
                    />
                  </GridItem>
                  <GridItem display="flex" flexDir="column" gap="1.5rem">
                    <Heading
                      fontSize="1.5rem"
                      fontWeight="500"
                      fontFamily="var(--font-outfit)"
                    >
                      {eventName}
                    </Heading>
                    <Text textAlign="justify" fontSize="1rem" fontWeight="400">
                      {description}
                    </Text>
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
                    borderRadius="1.5rem"
                    objectFit="cover"
                    aspectRatio="1.78"
                    h="full"
                    w="full"
                    src={teamImage}
                    alt={eventName}
                  />
                </Flex>
              </Flex>
            ),
          )}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default JourneySection;
