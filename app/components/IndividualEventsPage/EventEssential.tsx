import { Flex, Heading, Text, Button, Box, Image, Link } from '@chakra-ui/react';

interface EventEssentialSectionProps {
  discordChannel: string | undefined;
  resources: string | undefined;
  locationLink: string | undefined;
  mapView: string | undefined;
}

const EventsEssentialSection = ({
  discordChannel,
  resources,
  locationLink,
  mapView,
}: EventEssentialSectionProps) => {
  return (
    <Flex mb="4rem" w="full" flexDir="column">
      <Heading
        fontSize={{ base: '2.5rem', lg: '3.5rem' }}
        fontFamily="var(--font-outfit)"
        fontWeight="500"
        color="black"
        lineHeight="150%"
      >
        Event Essentials
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius="30px"
        bgColor="#F0F0F0"
        w="full"
        mt="3rem"
        px={{ base: '2rem', lg: '4rem' }}
        py={{ base: '2rem', lg: '3rem' }}
        flexDir={{ base: 'column', lg: 'row' }}
        gap={{ base: '2rem', lg: '2rem' }}
      >
        <Box w={{ base: '100%', lg: '90%' }}>
          <Heading
            fontSize={{ base: '2rem', lg: '3rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
            color="black"
            lineHeight="150%"
            mb="2rem"
          >
            Communication Platform
          </Heading>
          <Text
            textAlign="left"
            fontSize="1.3rem"
            fontFamily="var(--font-outfit)"
            fontWeight="500"
          >
            You can join Hack This Fall Discord Server to chat with other
            community members and event attendees.
            <br />
            <br />
            We have a special channel for your this event on our discord:
            {discordChannel}
          </Text>
        </Box>
        <Flex justifyContent="center">
          <Button
            as={Link}
            href="https://discord.hackthisfall.tech"
            target="_blank"
            px="3rem"
            w="fit-content"
            backgroundColor="#000000 !important"
            color="white"
            display="inline-flex"
            gap="0.5rem"
            height="4rem"
            justifyContent="center"
            alignItems="center"
            fontSize="1.1rem"
            fontWeight="700"
            _hover={{
              background: '#000000',
              color: 'white',
            }}
          >
            Join Discord
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir={{ base: 'column', lg: 'row' }} mt="1.5rem" gap="1.5rem">
        <Flex
          flexDir="column"
          borderRadius="30px"
          bgColor="#F0F0F0"
          w="full"
          px={{ base: '2rem', lg: '4rem' }}
          py={{ base: '2rem', lg: '3rem' }}
          gap={{ base: '2rem', lg: '0rem' }}
        >
          <Heading
            fontSize={{ base: '2rem', lg: '3rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
            color="black"
            lineHeight="150%"
            mb="2rem"
          >
            Resources
          </Heading>
          {resources}
        </Flex>
        <Flex
          borderRadius="30px"
          bgColor="#F0F0F0"
          w="full"
          px={{ base: '2rem', lg: '4rem' }}
          py={{ base: '2rem', lg: '3rem' }}
          flexDir="column"
          gap={{ base: '2rem', lg: '0rem' }}
        >
          <Heading
            fontSize={{ base: '2rem', lg: '3rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
            color="black"
            lineHeight="150%"
            mb="2rem"
          >
            Venue
          </Heading>
          <Box position="relative" textAlign="right" w="100%" height="200px">
            <Box
              overflow="hidden"
              borderRadius="1rem"
              bg="none"
              w="100%"
              height="200px"
            >
              <Link href={locationLink} target="_blank">
                <Image
                  width="100%"
                  objectFit="cover"
                  alt="Map View"
                  src={mapView}
                />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventsEssentialSection;
