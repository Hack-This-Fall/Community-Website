import { Flex, Heading, Box, Text, Button, Image } from '@chakra-ui/react';
import DiscordIcon from '../icons/Discord';

const CodeOfConductSection = () => {
  return (
    <Flex mt="4rem" mb="4rem" flexDir="column">
      <Heading
        fontSize="3.5rem"
        fontFamily="var(--font-poppins)"
        fontWeight="600"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Code of Conduct
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius="30px"
        bgColor="#F0F0F0"
        mt="3rem"
        px="6rem"
        py="3rem"
      >
        <Image
          src="/images/events/coc.png"
          height="18rem"
          alt="code-of-conduct"
        />
        <Box
          w="40%"
          fontSize="1.2rem"
          fontFamily="var(--font-dmsans)"
          fontWeight="500"
        >
          To help maintain a safe and welcoming environment, we ask that all
          community members adhere to a few guidelines mentioned below.
          <br />
          <br /> ​Please be mindful and follow the Code of Conduct.
        </Box>
      </Flex>
    </Flex>
  );
};

export default CodeOfConductSection;
