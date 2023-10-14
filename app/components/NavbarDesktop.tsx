import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Header = () => {
  const pathName = usePathname();
  const LogoRef: React.RefObject<HTMLImageElement> = useRef(null);
  const handleScroll = () => {
    if (!LogoRef || !LogoRef.current) return;
    const position = window.scrollY;

    if (position >= 150) {
      LogoRef.current.style.height = '2.5rem';
    } else {
      LogoRef.current.style.height = '3.5rem';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        maxW="full"
        bg="white"
        py="1rem"
      >
        <Link href="/">
          <Image
            ref={LogoRef}
            src="/logo.png"
            h="3.5rem"
            alt="HackThisFall Logo"
          />
        </Link>
        <Flex direction="row" fontWeight="medium" columnGap="2rem">
          <Link
            href="/"
            py={2}
            color={pathName == '/' ? 'black' : '#676767'}
            _hover={{ color: 'black' }}
          >
            Home
          </Link>
          <Link
            href="/events"
            py={2}
            color={pathName == '/events' ? 'black' : '#676767'}
            _hover={{ color: 'black' }}
          >
            Events
          </Link>
          {/* <Link
              href="#"
              py={2}
              color={pathName == '/' ? 'black' : '#676767'}
              _hover={{ color: 'black' }}
            >
              Blogs
            </Link> */}
          <Link
            href="/team"
            py={2}
            color={pathName == '/team' ? 'black' : '#676767'}
            _hover={{ color: 'black' }}
          >
            Team
          </Link>
          <Link
            href="/swag"
            py={2}
            color={pathName == '/swag' ? 'black' : '#676767'}
            _hover={{ color: 'black' }}
          >
            Swag
          </Link>
          {/* <Link
              href="#"
              py={2}
              color={pathName == '/' ? 'black' : '#676767'}
              _hover={{ color: 'black' }}
            >
              Contact us
            </Link> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
