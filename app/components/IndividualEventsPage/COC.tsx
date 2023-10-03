import { Flex, Heading, Box, Image } from '@chakra-ui/react';

const CodeOfConductSection = () => {
  return (
    <Flex mb="4rem" flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', md: '3.5rem' }}
        fontFamily="var(--font-poppins)"
        fontWeight="700"
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
        px={{ base: '2rem', md: '4rem', lg: '6rem' }}
        py={{ base: '2rem', md: '3rem' }}
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: '2rem', md: '0rem' }}
      >
        <Image
          src="/images/events/coc.png"
          height="18rem"
          alt="code-of-conduct"
        />
        <Box
          w={{ base: '100%', md: '40%' }}
          fontSize="1.2rem"
          fontFamily="var(--font-dmsans)"
          fontWeight="500"
          textAlign={{ base: 'center', md: 'left' }}
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
