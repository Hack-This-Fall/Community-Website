import { Flex, Image, Heading, Box, Text } from '@chakra-ui/react';
import { eventData } from '@/app/events/data';

const EventContainer = ({ eventData }: { eventData: eventData }) => {
  const {
    heading,
    startTimestamp,
    location,
    image,
    endTimestamp,
    color,
    secondaryColor,
  } = eventData;
  return (
    <Flex
      border={`2px solid ${color}`}
      borderRadius="20px"
      overflow="hidden"
      flexDir="column"
      pos="relative"
      height="fit-content"
    >
      <Image height="55%" fit="cover" src={image} alt={heading} />
      <Flex px="1rem" py="1.25rem" flexDir="column">
        <Heading
          fontSize="1.6rem"
          lineHeight="115%"
          fontFamily="var(--font-poppins)"
          fontWeight="700"
        >
          {heading}
        </Heading>
        <Flex gap="0.7rem" mt="0.5rem">
          <Box borderRadius="xl" overflow="hidden">
            <Flex
              color="#FFF"
              fontFamily="var(--font-poppins)"
              fontSize="0.75rem"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              bgColor={color}
              px="1.2rem"
              py="0.4rem"
              alignItems="center"
              justifyContent="center"
            >
              {startTimestamp.format('MMM').toUpperCase()}
            </Flex>
            <Flex
              fontFamily="var(--font-poppins)"
              fontSize="1.25rem"
              fontStyle="normal"
              fontWeight="800"
              lineHeight="normal"
              color={color}
              bgColor={secondaryColor}
              px="1.5rem"
              pt="0.2rem"
              pb="0.4rem"
              alignItems="center"
              justifyContent="center"
            >
              {startTimestamp.get('date')}
            </Flex>
          </Box>
          <Flex gap="0.2rem" flexDir="column" justifyContent="center">
            <Text
              fontFamily="var(--font-poppins)"
              fontSize="1rem"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              color="#656565"
            >
              {startTimestamp.format('dddd, H:mm')} -
              {endTimestamp.format('H:mm A z')}
            </Text>
            <Text
              fontFamily="var(--font-poppins)"
              fontSize="1rem"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              color="#949494"
            >
              {location}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventContainer;
