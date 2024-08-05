import { Flex, Image, Heading, Box, Text } from '@chakra-ui/react';
import { colorsMap, eventData } from '@/app/events/data';
import AngleArrow from '../icons/AngleArrow';

const EventContainer = ({ eventData }: { eventData: eventData }) => {
  const { heading, startTimestamp, location, endTimestamp, type, eventMode } =
    eventData;

  const { color, secondaryColor } = colorsMap[type];

  return (
    <Flex
      border="1px solid #00000033"
      borderRadius="20px"
      flexDir="column"
      justifyContent="space-between"
      pos="relative"
      height="full"
      bgColor="#FAFAFA"
      p="1rem"
    >
      <Flex justifyContent="space-between" w="full">
        <Box
          p="0.3rem 0.7rem"
          borderRadius="10px"
          border={`1px solid ${color}`}
          bgColor={secondaryColor}
          fontFamily="var(--font-outfit)"
          fontSize={{ base: '0.7rem', md: '0.8rem', lg: '1rem' }}
          fontWeight="700"
          color={color}
        >
          {type}
        </Box>
        <Box
          p="0.3rem 0.7rem"
          borderRadius="10px"
          border={`1px solid #DC6E04`}
          bgColor="#FFCC9B"
          fontFamily="var(--font-outfit)"
          fontSize={{ base: '0.7rem', md: '0.8rem', lg: '1rem' }}
          fontWeight="700"
          color="#DC6E04"
        >
          {eventMode}
        </Box>
      </Flex>
      <Flex pt="1.25rem" flexDir="column">
        <Heading
          fontSize={{ base: '1.8rem', md: '2rem', lg: '2.5rem' }}
          lineHeight="115%"
          fontFamily="var(--font-outfit)"
          fontWeight="500"
        >
          {heading}
        </Heading>
        <Flex justifyContent="space-between" mt="1rem" alignItems="end">
          <Flex
            flexDir={endTimestamp ? 'column-reverse' : 'row'}
            flexFlow="wrap"
            gap="0.5rem"
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
                : 'TO BE ANNOUNCED'}
            </Box>
            {location && (
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
            )}
          </Flex>
          <Flex
            bgColor="#000"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w="40%"
            aspectRatio="1"
            color="white"
          >
            <AngleArrow />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventContainer;
