import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ScrollRevealSection = ({
  children,
  threshold = 0.3,
  delay = 0,
  distance = 50,
  duration = 0.8,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;
