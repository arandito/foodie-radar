import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { cuisineOptions } from '@/lib/constants';

const CuisineCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isXsScreen, setIsXsScreen] = useState(false);

  const updateScreenSize = () => {
    setIsXsScreen(window.innerWidth <= 576);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const nextCuisine = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cuisineOptions.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextCuisine, 3000);
    return () => clearInterval(interval);
  }, [nextCuisine]);

  const getVisibleCuisines = () => {
    const prev = (currentIndex - 1 + cuisineOptions.length) % cuisineOptions.length;
    const next = (currentIndex + 1) % cuisineOptions.length;
    return [cuisineOptions[prev], cuisineOptions[currentIndex], cuisineOptions[next]];
  };

  return (
    <Card className="max-w-4xl mx-auto bg-background/50 dark:bg-background/20">
      <CardContent className="p-6">
        <div className="relative h-44 w-full overflow-hidden flex flex-row items-center">
          <div className="h-full w-full flex items-center justify-center">
            {getVisibleCuisines().map((cuisine, index) => (
              <motion.div
                key={cuisine.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: index === 1 ? 1 : 0.8,
                  x: (index - 1) * (isXsScreen ? 110 : 220),
                }}
                transition={{ duration: 0.5 }}
                className="absolute flex flex-col items-center justify-center"
              >
                <Image
                  src={`/food-icons/${cuisine.id}.png`}
                  alt={cuisine.name}
                  width={isXsScreen ? (index === 1 ? 100: 60) : (index === 1 ? 120 : 80)}
                  height={isXsScreen ? (index === 1 ? 100 : 60) : (index === 1 ? 120 : 80)}
                  className="mb-2"
                />
                <span className={`text-center font-semibold ${index === 1 ? 'text-lg md:text-xl' : 'text-md md:text-lg'}`}>
                  {cuisine.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CuisineCarousel;
