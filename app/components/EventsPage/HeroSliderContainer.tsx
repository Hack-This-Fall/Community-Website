import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

interface Props {
  config: {
    heading: string;
    content: string;
    sizes: ('sm' | 'md' | 'lg')[];
    image: any;
  }[];
}

interface colourConfig {
  [key: string]: string;
}

const SliderContainer = ({ config }: Props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const colourMap: colourConfig = {
    'City Meetup': '#A163FF',
    Hacktoberfest: '#F6902A',
    'Build With': '#4E9DFF',
  };

  return (
    <Slider {...settings}>
      {config.map((item, index) => (
        <Box
          px="1rem"
          pb="2rem"
          w="full"
          h="82vh"
          key={index}
          bgImage={item.image}
          bgSize="cover"
          pos="relative"
          cursor="pointer"
          borderRadius="45px"
          flexDir="column"
          justifyContent="flex-end"
          display="flex !important"
          fontFamily="var(--font-dm-sans)"
          gap="1rem"
        >
          <Heading color="white">{item.heading}</Heading>
          <Text color="white">{item.content}</Text>
          <Button
            w="50%"
            borderRadius="1.875rem"
            background={`${colourMap[item.heading]} !important`}
            color="white"
            display="inline-flex"
            height="3rem"
            padding="1rem 2rem"
            justifyContent="center"
            alignItems="center"
            fontSize="1.1rem"
            fontWeight="700"
            _hover={{
              background: `${colourMap[item.heading]} !important`,
              color: 'white',
            }}
          >
            Explore
          </Button>
        </Box>
      ))}
    </Slider>
  );
};

export default SliderContainer;
