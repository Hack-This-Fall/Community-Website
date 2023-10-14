import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header">
      <Flex
        className="bg-white border-gray-200 px-4 lg:px-6 py-2.5"
        align="center"
        justify="space-between"
        maxW="screen-xl"
        mx="auto"
      >
        <Link href="">
          <Image
            src="/logo.png"
            mr={3}
            h={['6', '9']}
            alt="HackThisFall Logo"
          />
        </Link>
        <Flex
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <Flex
            direction={['column', 'row']}
            mt={[4, 0]}
            fontWeight="medium"
            rowGap={8}
          >
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Home
            </Link>
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Events
            </Link>
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Blogs
            </Link>
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Team
            </Link>
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Swag
            </Link>
            <Link
              href="#"
              py={2}
              pr={4}
              pl={3}
              color="#676767"
              _hover={{ color: 'black' }}
            >
              Contact us
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
