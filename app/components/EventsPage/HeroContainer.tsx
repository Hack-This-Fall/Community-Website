import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  imageSrc: any;
  heading: string;
  index: number;
  content: string;
  setCurrentExpanded: (index: number) => void;
  size: 'sm' | 'md' | 'lg';
  link: string;
}

interface colourConfig {
  [key: string]: string;
}

const HeroContainer = ({
  imageSrc,
  heading,
  index,
  content,
  size,
  link,
  setCurrentExpanded,
}: Props) => {
  const router = useRouter();

  const colourMap: colourConfig = {
    'City Meetup': '#A163FF',
    Hacktoberfest: '#F6902A',
    'Build With': '#4E9DFF',
  };

  const styleConfig = {
    sm: {
      width: '18%',
      transition: 'width 0.25s ease-in-out',
      overflow: 'hidden',
      borderRadius: '120px',
      '.contentContainer': {
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        left: '0',
        transform: 'rotate(90deg)',
        width: '100%',
        height: '100%',
      },
    },
    md: {
      width: '32%',
      borderRadius: '30px',
      overflow: 'hidden',
      transition: 'width 0.25s ease-in-out',
      '.contentContainer': {
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: '2rem',
        width: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
    lg: {
      width: '50%',
      borderRadius: '30px',
      overflow: 'hidden',
      transition: 'width 0.25s ease-in-out',
      button: {
        borderRadius: '1.875rem',
        background: colourMap[heading],
        color: 'white',
        display: 'inline-flex',
        height: '3rem',
        padding: '1rem 2rem',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1rem',
        fontWeight: '700',
        '&:hover': {
          background: colourMap[heading],
          color: 'white',
        },
      },
      '.textContainer': {
        width: '62%',
      },
      '.contentContainer': {
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: '2rem',
        width: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
  };

  const handleMouseEnter = () => setCurrentExpanded(index);
  const handleMouseLeave = () => setCurrentExpanded(0);

  const style = styleConfig[size];

  return (
    <Box
      bgImage={imageSrc}
      bgSize="cover"
      pos="relative"
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      css={style}
    >
      <Flex pos="absolute" className="contentContainer">
        <Flex className="textContainer" flexDir="column" gap="1rem">
          <Heading fontFamily="var(--font-dm-sans)" as="h2" color="white">
            {heading}
          </Heading>
          <Text
            as="p"
            fontFamily="var(--font-dm-sans)"
            hidden={size === 'md' || size === 'sm'}
            color="white"
          >
            {content}
          </Text>
        </Flex>
        <Button
          onClick={() => {
            router.push(link);
          }}
          alignSelf="end"
          hidden={size === 'md' || size === 'sm'}
        >
          Explore
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroContainer;
