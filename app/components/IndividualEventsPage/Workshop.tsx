import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Background from '../icons/Background';

const data = [
  {
    heading: 'Flutter + Firebase: The Dynamic Duo',
    speaker: 'Aditya Thakur',
    speakerImage: '/images/workshops/speaker-dummy.png',
    speakerTagline: 'Developer Advocate, 100ms',
  },
  {
    heading: 'Flutter + Firebase: The Dynamic Duo',
    speaker: 'Aditya Thakur',
    speakerImage: '/images/workshops/speaker-dummy.png',
    speakerTagline: 'Developer Advocate, 100ms',
  },
  {
    heading: 'Flutter + Firebase: The Dynamic Duo',
    speaker: 'Aditya Thakur',
    speakerImage: '/images/workshops/speaker-dummy.png',
    speakerTagline: 'Developer Advocate, 100ms',
  },
  {
    heading: 'Flutter + Firebase: The Dynamic Duo',
    speaker: 'Aditya Thakur',
    speakerImage: '/images/workshops/speaker-dummy.png',
    speakerTagline: 'Developer Advocate, 100ms',
  },
];

const WorkshopSection = () => {
  return (
    <Flex flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', md: '3.5rem' }}
        fontFamily="var(--font-outfit)"
        fontWeight="500"
        color="black"
        lineHeight="150%"
      >
        Workshops
      </Heading>
      <Wrap mb="4rem" mt="2rem" justify="center" spacing="1.5rem">
        {data.map((item, index) => {
          return (
            <WrapItem
              borderRadius="20px"
              overflow="hidden"
              border="0.93px solid #00000033"
              bgColor="#FAFAFA"
              w={{ base: '100%', md: '45%', lg: '32%' }}
              flexDir="column"
              key={index}
              p={{ base: '1.2rem', md: '1.5rem' }}
            >
              <Box
                p="0.3rem 0.7rem"
                borderRadius="10px"
                border={`1px solid #DC6E04`}
                bgColor="#FFCC9B"
                fontFamily="var(--font-outfit)"
                fontSize={{ base: '1rem', lg: '1.2rem' }}
                fontWeight="700"
                color="#DC6E04"
              >
                WORKSHOP
              </Box>
              <Flex flexDir="column" mt="1rem">
                <Heading
                  fontFamily="var(--font-outfit)"
                  fontSize="2.2rem"
                  fontWeight="500"
                  color="black"
                >
                  {item.heading}
                </Heading>
                <Flex gap="1rem" alignItems="center" mt="1rem">
                  <Image w="30%" src={item.speakerImage} alt={item.speaker} />
                  <Flex flexDir="column">
                    <Text
                      fontFamily="var(--font-outfit)"
                      fontSize="1.1rem"
                      fontWeight="700"
                    >
                      {item.speaker}
                    </Text>
                    <Text
                      fontSize="1.1rem"
                      fontFamily="var(--font-outfit)"
                      fontWeight="400"
                      color="black"
                    >
                      {item.speakerTagline}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
};

export default WorkshopSection;
