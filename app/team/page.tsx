'use client';

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowDimension';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarDesktop from '../components/NavbarDesktop';
import '../styles.css';

const teamMembers = [
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'A163FF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'A163FF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'A163FF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'A163FF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },

  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },

  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: 'FF8000',
  },
  {
    image: '/images/team-demo.jpg',
    name: 'Robert \n Fox',
    background: '4E9DFF',
  },
];

const colors = ['#FF8000', '#4E9DFF', '#A163FF'];

const GridBox = ({ sideInPx }: { sideInPx: number }) => {
  return (
    <motion.div
      style={{
        border: '0.5px solid #E9E9E9',
        width: `${sideInPx}px`,
        height: `${sideInPx}px`,
      }}
      className={`box-${colors[Math.floor(Math.random() * 2.99)].substring(
        1,
      )} relative opacity-50`}
    >
      <motion.div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: 'white',
        }}
        className="box-inner"
      ></motion.div>
    </motion.div>
  );
};

const TeamsPage = () => {
  const { height, width } = useWindowSize();
  const [isNavbarOpen, setNavbarOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(149);

  const setIsNavbarOpen = (state) => {
    setNavbarOpen(state);

    if (state && window) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }
  };

  let sideInPx = 40;

  const cols = Math.floor(Math.min(width, 1440) / sideInPx);
  const extraWidth = Math.min(width, 1440) - cols * sideInPx;

  sideInPx += extraWidth / cols;

  const rows = Math.ceil((height + 120) / sideInPx);

  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Box className="container-1440" px={{ base: '2rem', '2xl': '0' }}>
      <Box className="relative top-0 left-0 w-full" zIndex={4}>
        {isMobile ? (
          <Navbar setIsNavbarOpen={setIsNavbarOpen} setNavbarHeight={setNavbarHeight} />
        ) : (
          <NavbarDesktop />
        )}
      </Box>
      <Box
        className="absolute top-0 overflow-hidden"
        display={{ base: 'none', xl: 'block' }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <Box key={rowIndex} className="flex">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <GridBox sideInPx={sideInPx} key={`${rowIndex}-${colIndex}`} />
            ))}
          </Box>
        ))}
      </Box>
      <Box pointerEvents="none">
        <Box className="relative top-0 left-0 w-full container-1440">
          <Heading
            as="h1"
            fontSize="3rem"
            fontWeight="bold"
            textAlign="center"
            mt="20"
          >
            Hack This Fall Team
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
            gap={{ base: 3, lg: 8 }}
            mx="auto"
            px={{ xl: '2rem' }}
            my="20"
          >
            {teamMembers.map((item, index) => (
              <Box key={index} position="relative">
                <Image
                  className="border-4 border-transparent rounded-2xl"
                  src={item.image}
                  alt="team-member"
                />
                <Box
                  bg={item.background}
                  p={2}
                  w="2/3"
                  roundedBottomLeft="lg"
                  roundedTopRight="lg"
                  position="absolute"
                  bottom={0}
                  left={0}
                  fontSize="18px"
                  color="white"
                  fontWeight="semibold"
                  bgColor="orange"
                >
                  {item.name}
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TeamsPage;
