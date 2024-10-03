import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

const stepVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 }
};

const Step: React.FC<StepProps> = ({ number, title, children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, ref]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={stepVariants}
      transition={{ duration: 0.5 }}
      className={`py-4 md:py-6 flex items-center justify-center ${number < 3 ? "text-center mx-4" : ""}`}
    >
      <div className="mx-auto w-full font-light">
        {number < 3 && <span className="block text-3xl md:text-4xl mb-6 bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400">{number}. {title}</span>}
        {number === 3 && <span className="block font-semibold text-4xl text-center md:text-5xl mb-12 bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400">{title}</span>}
        {children}
      </div>
    </motion.div>
  );
};

export default Step;