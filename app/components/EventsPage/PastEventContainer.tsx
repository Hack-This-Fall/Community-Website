import { Flex, Heading, Box, useBreakpointValue, Link } from '@chakra-ui/react';
import { eventData, colorsMap } from '@/app/events/data';

const PastEventContainer = ({ eventData }: { eventData: eventData }) => {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    xl: false,
  });
  const { heading, startTimestamp, endTimestamp, type, eventMode, link } =
    eventData;

  const { color, secondaryColor } = colorsMap[type];

  return isMobile ? (
    <Flex
      borderBottom="1px solid #00000033"
      justifyContent="space-between"
      pos="relative"
      w="full"
      py="1.4rem"
      alignItems="center"
      cursor="pointer"
      _hover={{ backgroundColor: '#F0F0F0' }}
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Flex>
  ) : (
    <Link href={link} _hover={{ textDecoration: 'none' }} target="_blank">
      <Flex
        borderBottom="1px solid #00000033"
        justifyContent="space-between"
        pos="relative"
        w="full"
        py="1.8rem"
        cursor="pointer"
        _hover={{ backgroundColor: '#F0F0F0' }}
      >
        <Flex gap="1rem" w="50%">
          <Box
            p="0.3rem 0.7rem"
            borderRadius="10px"
            border={`1px solid ${color}`}
            bgColor={secondaryColor}
            fontFamily="var(--font-outfit)"
            fontSize="1rem"
            fontWeight="700"
            color={color}
            minW="160px"
            textAlign="center"
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
          {endTimestamp ? (
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
              minW="190px"
              textAlign="center"
            >
              {`${startTimestamp
                .format('MMM DD')
                .toUpperCase()} - ${endTimestamp
                .format('MMM DD, YYYY')
                .toUpperCase()}`}
            </Box>
          ) : (
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
              minW="130px"
              textAlign="center"
            >
              {startTimestamp.format('MMM DD, YYYY').toUpperCase()}
            </Box>
          )}
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
            minW="110px"
            textTransform="uppercase"
            textAlign="center"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PastEventContainer;
