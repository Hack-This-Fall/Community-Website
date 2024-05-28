import {
  Flex,
  Image,
  Heading,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { eventData } from '@/app/events/data';
import AngleArrow from '../icons/AngleArrow';

const PastEventContainer = ({ eventData }: { eventData: eventData }) => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    xl: false,
  });
  const {
    heading,
    startTimestamp,
    endTimestamp,
    color,
    secondaryColor,
    type,
    eventMode,
  } = eventData;
  return isMobile ? (
    <Flex
      borderBottom="1px solid #00000033"
      justifyContent="space-between"
      pos="relative"
      w="full"
      py="1.4rem"
      alignItems="center"
    >
      <Flex flexDir="column" gap="1rem">
        <Heading
          fontSize="1.5rem"
          fontFamily="var(--font-outfit)"
          fontWeight="500"
        >
          {heading}
        </Heading>
        <Flex gap="1rem">
          <Box
            p="0.3rem 0.7rem"
            borderRadius="10px"
            border={`1px solid ${color}`}
            bgColor={secondaryColor}
            fontFamily="var(--font-outfit)"
            fontSize="0.7rem"
            fontWeight="700"
            color={color}
          >
            {type}
          </Box>
          <Box
            p="0.3rem 0.7rem"
            borderRadius="10px"
            border="1px solid #00000033"
            bgColor="transparent"
            fontFamily="var(--font-outfit)"
            fontSize="0.7rem"
            fontWeight="700"
            color="#000000B2"
            w="-webkit-fit-content"
          >
            {startTimestamp.format('MMM DD, YYYY').toUpperCase()}
          </Box>
        </Flex>
      </Flex>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L7 7L1 1"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Flex>
  ) : (
    <Flex
      borderBottom="1px solid #00000033"
      justifyContent="space-between"
      pos="relative"
      w="full"
      py="1.4rem"
    >
      <Flex gap="1rem" w="40%">
        <Box
          p="0.3rem 0.7rem"
          borderRadius="10px"
          border={`1px solid ${color}`}
          bgColor={secondaryColor}
          fontFamily="var(--font-outfit)"
          fontSize="1rem"
          fontWeight="700"
          color={color}
        >
          {type}
        </Box>
        <Heading
          fontSize="1.5rem"
          fontFamily="var(--font-outfit)"
          fontWeight="500"
        >
          {heading}
        </Heading>
      </Flex>
      <Flex gap="1rem" alignItems="center">
        <Box
          p="0.3rem 0.7rem"
          borderRadius="10px"
          border="1px solid #00000033"
          bgColor="transparent"
          fontFamily="var(--font-outfit)"
          fontSize="1rem"
          fontWeight="700"
          color="#000000B2"
          w="-webkit-fit-content"
        >
          {endTimestamp
            ? `${startTimestamp.format('MMM DD').toUpperCase()} - ${endTimestamp
                .format('MMM DD, YYYY')
                .toUpperCase()}`
            : startTimestamp.format('MMM DD, YYYY').toUpperCase()}
        </Box>
        <Box
          p="0.3rem 0.7rem"
          borderRadius="10px"
          border={`1px solid #DC6E04`}
          bgColor="#FFCC9B"
          fontFamily="var(--font-outfit)"
          fontSize="1rem"
          fontWeight="700"
          color="#DC6E04"
          mr="2rem"
        >
          {eventMode}
        </Box>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Flex>
    </Flex>
  );
};

export default PastEventContainer;
