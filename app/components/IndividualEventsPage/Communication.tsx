import { Flex, Heading, Text, Button, Box } from '@chakra-ui/react';
import DiscordIcon from '../icons/Discord';

const CommunicationSection = () => {
  return (
    <Flex
      mt="4rem"
      w='full'
      mb="4rem"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Heading
        fontSize="3.5rem"
        fontFamily="var(--font-poppins)"
        fontWeight="600"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Communication platform
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius="30px"
        bgColor="#F0F0F0"
        w='full'
        mt="3rem"
        px="6rem"
        py="4rem"
      >
        <Box w="40%">
          <Text
            fontSize="1.2rem"
            fontFamily="var(--font-dmsans)"
            fontWeight="500"
          >
            ​You can join Hack This Fall Discord Server to chat with other
            community members and event attendees.
            <br />
            <br />
            We have a special channel for your city on our discord: #chandigarh
          </Text>
        </Box>
        <Button
          px="2rem"
          w="fit-content"
          borderRadius="1.875rem"
          backgroundColor="#393939 !important"
          color="white"
          display="inline-flex"
          gap="0.5rem"
          height="3.2rem"
          justifyContent="center"
          alignItems="center"
          fontSize="1.1rem"
          fontWeight="700"
          _hover={{
            background: '#393939',
            color: 'white',
          }}
        >
          Join Discord
          <DiscordIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default CommunicationSection;
