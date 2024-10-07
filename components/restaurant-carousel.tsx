import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StaticRestaurantCard from '@/components/static-restaurant-card';
import { Restaurant } from '@/types';

interface CarouselProps {
  restaurants: Restaurant[];
}

const RestaurantCarousel: React.FC<CarouselProps> = ({ restaurants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [restaurants.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <StaticRestaurantCard restaurant={restaurants[currentIndex]} index={currentIndex} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RestaurantCarousel;