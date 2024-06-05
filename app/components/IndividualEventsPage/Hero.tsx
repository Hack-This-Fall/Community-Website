import {
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  IconButton,
} from '@chakra-ui/react';
import CalIcon from '../icons/Cal';
import StarIcon from '../icons/Star';
import ClockIcon from '../icons/Clock';
import LocationIcon from '../icons/Location';
import ScrollIcon from '../icons/Scroll';
import AngleArrow from '../icons/AngleArrow';

interface HeroSectionProps {
  startTimestamp: moment.Moment | undefined;
  endTimestamp: moment.Moment | undefined | null;
  heading: string | undefined;
  location: string | undefined;
  description: string | undefined;
  eventMode: string | undefined;
}

const HeroSection = ({
  startTimestamp,
  endTimestamp,
  heading,
  location,
  description,
  eventMode,
}: HeroSectionProps) => {
  return (
    <Flex w="full" flexDir="column" alignItems="center" justifyContent="center">
      <Flex
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        mb={{base: "4rem", lg: "3rem"}}
        pt="2rem"
        gap="2rem"
      >
        <Flex flexDir="column">
          <Box
            p="0.3rem 0.7rem"
            borderRadius="10px"
            border={`1px solid #DC6E04`}
            bgColor="#FFCC9B"
            fontFamily="var(--font-outfit)"
            fontSize="1rem"
            fontWeight="700"
            color="#DC6E04"
            w="fit-content"
          >
            {eventMode}
          </Box>
          <Heading
            fontSize={{ base: '3rem', lg: '4.5rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
          >
            {heading}
          </Heading>
          <Flex
            flexDir="row"
            gap="1rem"
            mt={{ base: '1rem', lg: '1.5srem' }}
            w="full"
            h="-webkit-fit-content"
          >
            <Box
              p="0.3rem 0.7rem"
              borderRadius="10px"
              border="1px solid #00000033"
              bgColor="transparent"
              fontFamily="var(--font-outfit)"
              fontSize={{ base: '0.7rem', md: '0.8rem', lg: '1rem' }}
              fontWeight="700"
              color="#000000B2"
              w="-webkit-fit-content"
            >
              {endTimestamp && startTimestamp
                ? `${startTimestamp
                    .format('MMM DD')
                    .toUpperCase()} - ${endTimestamp
                    .format('MMM DD, YYYY')
                    .toUpperCase()}`
                : startTimestamp
                ? startTimestamp.format('MMM DD, YYYY').toUpperCase()
                : ''}
            </Box>
            <Box
              p="0.3rem 0.7rem"
              borderRadius="10px"
              border="1px solid #00000033"
              bgColor="transparent"
              fontFamily="var(--font-outfit)"
              fontSize={{ base: '0.7rem', md: '0.8rem', lg: '1rem' }}
              fontWeight="700"
              color="#000000B2"
              w="-webkit-fit-content"
            >
              {location}
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            gap="0.7rem"
            mt={{ base: '1rem', lg: '2rem' }}
          >
            <Button
              px="2rem"
              w="fit-content"
              borderRadius="1.875rem"
              backgroundColor="#B281FE !important"
              color="white"
              display="inline-flex"
              height="3.2rem"
              justifyContent="center"
              alignItems="center"
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{
                background: '#B281FE',
                color: 'white',
              }}
            >
              Explore Now
            </Button>
            <IconButton
              height="3.2rem"
              aspectRatio="1"
              borderRadius="full"
              backgroundColor="#B281FE !important"
              aria-label="Event page"
              icon={<AngleArrow />}
            />
          </Flex>
        </Flex>
        <Image
          w={{ base: 'full', lg: '70%' }}
          src="/images/events/city-meetup-hero.png"
          alt="city meetup"
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
