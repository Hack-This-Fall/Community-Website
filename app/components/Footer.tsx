import NextLink from 'next/link';
import { Button, Flex, Image, Input, Link, Text } from '@chakra-ui/react';
import StarIcon from './icons/Star';
import DiscordIcon from './icons/socials/Discord';
import TwitterIcon from './icons/socials/Twitter';
import InstagramIcon from './icons/socials/Instagram';
import YoutubeIcon from './icons/socials/Youtube';
import LinkedinIcon from './icons/socials/Linkedin';
import EmailIcon from './icons/socials/Email';

interface footerData {
  [key: string]: {
    name: string;
    link: string;
    isExternal?: boolean;
  }[];
}

const footerData: footerData = {
  Home: [
    {
      name: 'Blogs',
      link: '/blogs',
    },
    {
      name: 'Press Kit',
      link: '/press',
    },
    {
      name: 'Sponsor Us',
      link: '/sponsor',
    },
    {
      name: 'About Us',
      link: '/about',
    },
  ],
  Events: [
    {
      name: 'Build with',
      link: '/events/build-with',
    },
    {
      name: 'Hacktoberfest',
      link: '/events/hacktoberfest',
    },
    {
      name: 'Hackathon',
      link: '/',
      isExternal: true,
    },
    {
      name: 'City meetups',
      link: '/events/meetups',
    },
  ],
  'Contact Us': [
    {
      name: 'hi@hackthisfall.tech',
      link: 'mailto:hi@hackthisfall.tech',
      isExternal: true,
    },
  ],
};

const Socials = [
  {
    icon: <DiscordIcon color="black" />,
    link: 'https://discord.com',
  },
  {
    icon: <TwitterIcon color="black" />,
    link: 'twitter.com',
  },
  {
    icon: <InstagramIcon color="black" />,
    link: 'instagram.com',
  },
  {
    icon: <YoutubeIcon color="black" />,
    link: 'youtube.com',
  },
  {
    icon: <LinkedinIcon color="black" />,
    link: 'linkedin.com',
  },
  {
    icon: <EmailIcon color="black" />,
    link: 'mailto:hi@hackthisfall.tech',
  },
];

const Footer = () => {
  return (
    <Flex className='container-1440' gap="1.5rem" mt="5rem" mb="5rem">
      <Flex
        w="41%"
        alignItems="center"
        justifyContent="center"
        borderRadius="2rem"
        px='4rem'
        background="#F0F0F0"
      >
        <Image src="/logo.png" alt="logo" />
      </Flex>
      <Flex gap="1.5rem" w="59%" flexDir="column">
        <Flex
          justifyContent="space-between"
          p="2rem"
          borderRadius="2rem"
          background="#F0F0F0"
        >
          <Flex gap="2rem">
            {Object.keys(footerData).map((key, index) => (
              <Flex gap="1rem" flexDir="column" key={index}>
                <Text fontFamily="var(--font-dmsans)" fontWeight="600">
                  {key}
                </Text>
                {footerData[key].map((item, index) => (
                  <Link
                    as={NextLink}
                    fontFamily="var(--font-dmsans)"
                    isExternal={!!item.isExternal}
                    href={item.link}
                    key={index}
                    target={item.isExternal ? '_blank' : '_self'}
                  >
                    {item.name}
                  </Link>
                ))}
              </Flex>
            ))}
          </Flex>
          <Flex gap="1rem" w="40%" flexDir="column">
            <Text fontWeight="600" fontFamily="var(--font-dmsans)">
              Stay updated about events
            </Text>
            <Input
              color="black"
              borderRadius="full"
              border="1px solid #CBCBCB"
              background="#E0E0E0"
              placeholder="Email address"
            />
            <Button
              borderRadius="full"
              py="1rem"
              color="white"
              background="linear-gradient(0deg, #393939 0%, #393939 100%), #A163FF !important"
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          py="1rem"
          px="2rem"
          borderRadius="full"
          background="#F0F0F0"
        >
          <Flex gap="1rem" alignItems="center">
            <Link fontFamily="var(--font-dmsans)" href="/">
              Privacy Policy
            </Link>
            <StarIcon />
            <Link fontFamily="var(--font-dmsans)">Data Policy</Link>
          </Flex>
          <Flex gap="1rem">
            {Socials.map((item, index) => (
              <Link
                p="0.5rem"
                background="#E1E1E1"
                borderRadius="full"
                as={NextLink}
                key={index}
                href={item.link}
                isExternal
                target="_blank"
              >
                {item.icon}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
