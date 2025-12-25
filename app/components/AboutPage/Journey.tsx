import {
  useBreakpointValue,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import journey from './journeyData';

const CARD_WIDTH = 500;
const CARD_GAP = 64;
const TOTAL_CARDS = journey.length;
const SCROLL_HEIGHT_MULTIPLIER = 180;

const JourneySection = () => {
  const isMd = useBreakpointValue({ md: true, xl: false });
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const updateContainerWidth = useCallback(() => {
    if (horizontalRef.current) {
      const totalWidth = horizontalRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setContainerWidth(Math.max(0, totalWidth - viewportWidth + 350));
    }
  }, []);

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, [updateContainerWidth]);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  const x = useSpring(xRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollHeight = TOTAL_CARDS * SCROLL_HEIGHT_MULTIPLIER;

  return (
    <Flex
      ref={scrollContainerRef}
      height={`${scrollHeight}vh`}
      position="relative"
      w="full"
    >
      <Flex
        flexDir="column"
        position="sticky"
        h="fit-content"
        pb={{ base: '4rem', md: '4rem', lg: '4rem' }}
        top="5rem"
        overflow="hidden"
        w="full"
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems="center"
          h="fit-content"
          justifyContent="space-between"
          mb="2rem"
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

        <motion.div
          ref={horizontalRef}
          style={{
            x,
            willChange: 'transform',
          }}
          className="flex gap-16"
        >
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Flex
                  w={{ base: '100vw', md: `${CARD_WIDTH}px` }}
                  flexDir="column"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'translateY(-4px)' }}
                >
                  <Flex alignItems="center" gap="0.75rem" mb="1.5rem">
                    <Flex
                      h="32px"
                      px="1rem"
                      borderRadius="full"
                      alignItems="center"
                      bg="linear-gradient(135deg, #A64DFF20 0%, #FF993320 100%)"
                      border="1px solid"
                      borderColor="#A64DFF30"
                    >
                      <Text
                        fontSize="0.875rem"
                        fontWeight="600"
                        fontFamily="var(--font-outfit)"
                        color="#A64DFF"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Text>
                    </Flex>
                    <Heading
                      fontSize="1.25rem"
                      fontWeight="500"
                      fontFamily="var(--font-outfit)"
                      color="#939191"
                    >
                      {title}
                    </Heading>
                  </Flex>
                  <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
                    <GridItem position="relative">
                      <motion.div
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{ position: 'relative' }}
                      >
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
                          zIndex="1"
                          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
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
                          loading="lazy"
                        />
                      </motion.div>
                    </GridItem>
                    <GridItem display="flex" flexDir="column" gap="1rem">
                      <Heading
                        fontSize="1.5rem"
                        fontWeight="600"
                        fontFamily="var(--font-outfit)"
                        lineHeight="1.3"
                      >
                        {eventName}
                      </Heading>
                      <Text
                        textAlign="justify"
                        fontSize="0.95rem"
                        fontWeight="400"
                        lineHeight="1.6"
                        color="#4A4A4A"
                      >
                        {description}
                      </Text>
                    </GridItem>
                  </Grid>
                  <Flex mt="1rem" flexDir="column" position="relative">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ position: 'relative' }}
                    >
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
                        zIndex="1"
                        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
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
                        loading="lazy"
                      />
                    </motion.div>
                  </Flex>
                </Flex>
              </motion.div>
            ),
          )}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default JourneySection;
