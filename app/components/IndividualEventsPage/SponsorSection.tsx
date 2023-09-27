import { Box, Image, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Logo from '../../assets/images/logo.svg';

const sponsors = [
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
  {
    linkTo: '/#',
    image: '/logo.png',
  },
];

const SponsorSection = () => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', md: '3.5rem' }}
        fontFamily="var(--font-poppins)"
        fontWeight="700"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Sponsors
      </Heading>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }}
        gap="1rem"
        mb="4rem"
        mt="3rem"
      >
        {sponsors.map((s, i) => (
          <Box className="border p-4 rounded-xl" key={i}>
            <Image
              src={s.image}
              alt="Community"
              className=" object-cover rounded-l-2xl"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default SponsorSection;
