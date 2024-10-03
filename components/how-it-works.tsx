import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import CuisineCarousel from '@/components/cuisine-carousel';
import Image from 'next/image';
import { homePageRestaurants } from '@/lib/constants';
import StaticRestaurantCard from '@/components/static-restaurant-card';
import TransitionStep from '@/components/transition-step';
import Step from '@/components/step';

const ScrollingHowItWorks: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className='flex flex-col justify-center'>
      <Step number={1} title="Pick Your Cravings">
        <CuisineCarousel />
      </Step>

      <Step number={2} title="Choose a Location">
        <div className="relative w-full h-64 bg-transparent rounded-lg overflow-hidden mx-auto max-w-4xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={`/images/${isDarkMode ? 'map-dark' : 'map-light'}.jpg`}
              alt="Map placeholder"
              fill
              priority
              style={{ objectFit: 'cover',  opacity: 0.85 }}
              sizes="(max-width: 330px) 330px, (max-width: 430px) 430px, 430px"
            />
            <div className="w-16 h-16 bg-red-500 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </Step>

      <TransitionStep />

      <Step number={3} title="Get Personalized Recommendations">
        <div className='flex flex-col lg:flex-row justify-center'>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8">
            {homePageRestaurants.map((restaurant, index) => (
              <div key={restaurant.id} className='flex justify-center'>
                <StaticRestaurantCard restaurant={restaurant} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Step>
    </div>
  );
};

export default ScrollingHowItWorks;
