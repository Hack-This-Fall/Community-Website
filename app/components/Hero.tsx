import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles.css";
import { calc } from "@chakra-ui/react";

interface AnimatedTextProps {
  text: string;
  color: string;
}

const AnimatedText = (props: AnimatedTextProps) => {
  return (
    <motion.span
      className={`absolute color-${props.color.substring(1)}`}
      initial={{ scale: 0.5, y: 100, opacity: 0.5 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0.2 }}
      transition={{ duration: 0.2 }}
    >
      {props.text}
    </motion.span>
  );
};

export default function Hero({ navbarHeight }: { navbarHeight: number }) {
  const [index, setIndex] = useState(0);

  const texts = [
    { text: "Collaboration", color: "#A163FF" },
    { text: "Inclusivity", color: "#D07280" },
    { text: "Innovation", color: "#FF8000" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col w-fit justify-center items-center h-[100vh] cc container-1440"
      style={{
        marginTop: `-${navbarHeight}px`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-[90%] md:w-[60%] font-poppins font-semibold text-3xl md:text-6xl text-[#151515] leading-snug ">
          <LayoutGroup>
            A Thriving Hacker Community Encouraging{" "}
            <span className="inline-flex justify-start align-end items-center h-16 relative overflow-hidden -mt-4 md:mt-1 ">
              <AnimatePresence>
                <span className="left-0 top-0 text-transparent">
                  {texts[index % 3].text}
                </span>
                <AnimatedText
                  key={index}
                  text={texts[index % 3].text}
                  color={texts[index % 3].color}
                />
              </AnimatePresence>
            </span>
          </LayoutGroup>
        </div>

        <div className="w-[80%] md:w-[60%] mt-6">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quUt enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al.
        </div>
      </div>
    </div>
  );
}
