import { color, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SCALE = 0.95;

export default function Card(props) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  // const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = 0;
  //  useTransform(x, [-150, 0, 150], [-45, 0, 45], {
  //   clamp: false,
  // });

  const ref = useRef(null);

  useEffect(() => {
    if (props.frontCard && ref.current) {
      console.log(ref.current.offsetWidth);
      props.setInitialWidth(ref?.current?.offsetWidth);
    }
  });

  const variantsFrontCard = {
    animate: { scale: 1, x: 0, opacity: 1, transition: { duration: 0.2 } },
    exit: (custom) => ({
      x: custom || -500,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, x: 105, opacity: 0 },
    animate: {
      scale: Math.pow(SCALE, props.value - props.index),
      x:
        (props.initialWidth +
          (props.value - props.index) * 10 -
          Math.pow(SCALE, props.value - props.index) * props.initialWidth) *
        0.6,
      opacity: 1,
    },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-500);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(2000);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        borderRadius: "2rem",
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: props.color,
        position: "absolute",
        x,
        rotate,
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      ref={ref}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      {props.children}
    </motion.div>
  );
}
