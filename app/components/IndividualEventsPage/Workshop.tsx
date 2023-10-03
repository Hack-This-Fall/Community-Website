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
    heading: 'Workshop Name',
    description:
      'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities.',
    image: '/images/workshops/workshop-dummy.png',
    speaker: 'Speaker Name',
    speakerImage: '/images/workshops/speaker-dummy.png',
  },
  {
    heading: 'Workshop Name',
    description:
      'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities.',
    image: '/images/workshops/workshop-dummy.png',
    speaker: 'Speaker Name',
    speakerImage: '/images/workshops/speaker-dummy.png',
  },
  {
    heading: 'Workshop Name',
    description:
      'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities.',
    image: '/images/workshops/workshop-dummy.png',
    speaker: 'Speaker Name',
    speakerImage: '/images/workshops/speaker-dummy.png',
  },
  {
    heading: 'Workshop Name',
    description:
      'Experience the latest announcements from I/O with technical sessions, hands-on demos, and networking opportunities.',
    image: '/images/workshops/workshop-dummy.png',
    speaker: 'Speaker Name',
    speakerImage: '/images/workshops/speaker-dummy.png',
  },
];

const WorkshopSection = () => {
  return (
    <Flex flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', md: '3.5rem' }}
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Workshops
      </Heading>
      <Wrap
        mb="4rem"
        mt="3rem"
        justify="center"
        spacing="1.5rem"
      >
        {data.map((item, index) => {
          return (
            <WrapItem
              borderRadius="20px"
              overflow="hidden"
              border="1px solid #9F6BF0"
              w={{ base: '100%', md: '45%', lg: '30%' }}
              flexDir="column"
              key={index}
            >
              <Box w="full" px="0.8rem" pt="0.8rem" position="relative">
                <Background color="#9F6BF0" width="100%" height="100%" />
                <Image w="100%" src={item.image} alt={item.heading} />
              </Box>
              <Flex flexDir="column" mx="0.8rem" mt="1rem">
                <Heading
                  fontFamily="var(--font-poppins)"
                  fontSize="1.5rem"
                  fontWeight="700"
                  color="black"
                >
                  {item.heading}
                </Heading>
                <Flex gap="0.8rem" alignItems="center" my="0.5rem">
                  <Image src={item.speakerImage} alt={item.speaker} />
                  <Text>{item.speaker}</Text>
                </Flex>
                <Text
                  fontSize="1.1rem"
                  fontFamily="var(--font-poppins)"
                  fontWeight="400"
                  color="black"
                  mb="0.8rem"
                  w="95%"
                >
                  {item.description}
                </Text>
              </Flex>
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
};

export default WorkshopSection;
