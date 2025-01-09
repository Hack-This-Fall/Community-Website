import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface AgendaSectionProps {
  description: string | undefined;
  images: string[] | undefined;
}

const OverviewSection = ({ description, images }: AgendaSectionProps) => {
  return (
    <Flex mb="4rem" flexDir="column">
      <Flex
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap="2rem"
        mb="4rem"
        w="full"
      >
        <Flex flexDir="column" alignItems="flex-start">
          <Heading
            fontSize={{ base: '2rem', lg: '3.5rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="600"
            color="black"
            textAlign="center"
            lineHeight="150%"
          >
            Build With series..?
          </Heading>
          <Text
            mt="2rem"
            fontSize="1.15rem"
            fontFamily="var(--font-outfit)"
            fontWeight="400"
            color="black"
            w={{ base: '100%', lg: '60%' }}
            align="left"
          >
            {description}
          </Text>
        </Flex>
        <Image src="/images/events/buildwith.png" alt="buildwith" />
      </Flex>
      <Flex
        sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
        w="full"
        gap="1.5rem"
        overflowX="auto"
      >
        {images?.map((image, index) => (
          <Image
            maxW={{ base: '100%', md: '31.6%', xl: '32%' }}
            objectFit="cover"
            borderRadius="1rem"
            key={index}
            src={image}
            alt="buildwith images"
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default OverviewSection;
