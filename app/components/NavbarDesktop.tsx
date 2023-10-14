import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
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
          <Image src="/logo.png" h="2.5rem" alt="HackThisFall Logo" />
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
          <Link href="/team" py={2} color={pathName == '/team' ? 'black' : '#676767'} _hover={{ color: 'black' }}>
            Team
          </Link>
          <Link href="/swag" py={2} color={pathName == '/swag' ? 'black' : '#676767'} _hover={{ color: 'black' }}>
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
