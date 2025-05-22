import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  id,
  initialAnimation = true,
  threshold = 0.3,
}) => {
  const [isVisible, setIsVisible] = useState(initialAnimation ? false : true);
  const [isNavigated, setIsNavigated] = useState(false);
  const sectionRef = useRef(null);

  // Handle scroll-based visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set visible if not already navigated to (to avoid conflicts)
        if (!isNavigated && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, isNavigated]);

  // Handle navigation-based visibility
  useEffect(() => {
    const handleNavigationEvent = (event) => {
      if (event.detail.sectionId === id) {
        setIsNavigated(true);
        setIsVisible(true);
      }
    };

    document.addEventListener("animateSection", handleNavigationEvent);
    return () => {
      document.removeEventListener("animateSection", handleNavigationEvent);
    };
  }, [id]);

  return (
    <section id={id} ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
