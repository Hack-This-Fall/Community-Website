import Image from "next/image";
import Person from "../../assets/images/narratives/P1.svg";

import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { Button } from "@chakra-ui/react";
import { useWindowSize } from "rooks";

const testimonials = [
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the `,
  },
  {
    image: Person,
    text: `clicking on it to selec`,
  },
  {
    image: Person,
    text: `3This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `4This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `5This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `6This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `7This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `8This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
  {
    image: Person,
    text: `This is the original component. Edit me to make global changes to all. 🎉
You can hide the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to select it directly. Then click the eye icon in the layers.
e the verified badge via the layers on the left 👈🏼 try CMD or CTRL clicking on it to selec`,
  },
];

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = testimonials.length / 2;

  const setCurrentSlideHandler = (num: number) => {
    setCurrentSlide(num);
  };

  const handleNextSlide = () => {
    let newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  // useEffect(() => {
  //   const intervalInMS = 5000;

  //   // const timer = setInterval(() => handleNextSlide(), intervalInMS);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="relative container-1440 px-4 mt-10">
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {testimonials.map((image, index) => {
            if (index === currentSlide * 2) {
              return (
                <div
                  className="flex bg-white rounded-lg h-[200px] md:h-[300px] overflow-hidden"
                  key={index}
                >
                  <Image
                    src={testimonials[index].image}
                    alt="Community"
                    className=" object-cover rounded-lg w-[50%]"
                  />
                  <div className="w-[50%] text-xs h-full flex flex-col justify-center text-left px-4">
                    {testimonials[index].text}
                  </div>
                </div>
              );
            } else if (index - 1 === currentSlide * 2) {
              return (
                <div
                  className="flex bg-white rounded-lg h-[200px] md:h-[300px] mt-4 overflow-hidden"
                  key={index}
                >
                  <div className="w-[50%] text-xs h-full flex flex-col justify-center text-left px-4">
                    {testimonials[index].text}
                  </div>
                  <Image
                    src={testimonials[index].image}
                    alt="Community"
                    className=" object-cover rounded-lg w-[50%]"
                  />
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <div className="relative flex justify-center p-2">
        {testimonials.slice(0, totalSlides).map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-2 w-2 bg-gray-700 rounded-full mx-1.5 mb-10 cursor-pointer"
                  : "h-2 w-2 bg-gray-300 rounded-full mx-1.5 mb-10 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlideHandler(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Narratives() {
  const { innerHeight, innerWidth } = useWindowSize();

  return innerWidth && innerWidth < 400 ? (
    <div className="pointer-events-auto flex flex-col align-center justify-center text-center bg-black overflow-x-hidden justify-evenly">
      <div className="font-poppins font-bold text-4xl md:text-4xl text-white mt-10">
        Narratives
      </div>
      <Carousel />
    </div>
  ) : (
    <div className="pointer-events-auto flex flex-col align-center justify-center text-center bg-black overflow-x-hidden min-h-[100vh]">
      <div className="font-poppins font-bold text-2xl md:text-4xl text-white">
        Narratives
      </div>
      <div className="relative gap-x-4 mt-8 marquee h-[200px] md:h-[300px] max-w-[100%] overflow-hidden hidden md:block">
        <div className="marquee--inner">
          {[
            ...testimonials.slice(0, 3),
            ...testimonials.slice(0, 3),
            ...testimonials.slice(0, 3),
          ].map((s, i) => (
            <div
              className="flex bg-white rounded-lg  min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] h-[200px] md:h-[300px] ml-4"
              key={i}
            >
              <Image
                src={s.image}
                alt="Community"
                className=" object-cover rounded-lg w-[50%]"
              />
              <div className="w-[50%] h-full flex flex-col justify-center text-left px-4">
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative gap-x-4 marquee-rev h-[200px] md:h-[300px] mt-4 hidden md:block">
        <div className="marquee-rev--inner">
          {[
            ...testimonials.slice(0, 3),
            ...testimonials.slice(0, 3),
            ...testimonials.slice(0, 3),
          ].map((s, i) => (
            <div
              className="flex bg-white rounded-lg min-w-[500px] max-w-[500px] max-h-[350px] ml-4"
              key={i}
            >
              <Image
                src={s.image}
                alt="Community"
                className=" object-cover rounded-lg w-[50%]"
              />
              <div className="w-[50%] h-full flex flex-col justify-center text-left px-4">
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
