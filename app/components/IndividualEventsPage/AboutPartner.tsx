import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface AgendaSectionProps {
  partnerName?: string;
  partnerLogo?: string;
  partnerDescription?: string;
}

const AboutPartnerSection = ({ partnerDescription, partnerLogo, partnerName }: AgendaSectionProps) => {
  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap="2rem"
      mb="4rem"
      w="full"
    >
      <Image src={partnerLogo} maxW="50%" alt="buildwith" />
      <Flex flexDir="column" maxW={{base: "full", lg:"45%"}}>
        <Heading
          fontSize={{ base: '2.5rem', lg: '3.5rem' }}
          fontFamily="var(--font-outfit)"
          fontWeight="500"
          w="fit-content"
          color="black"
          textAlign="center"
          lineHeight="150%"
        >
          {partnerName}
        </Heading>
        <Text
          mt="2rem"
          fontSize="1.15rem"
          fontFamily="var(--font-outfit)"
          fontWeight="400"
          color="black"
          w="full"
          align="left"
        >
          {partnerDescription}
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutPartnerSection;
