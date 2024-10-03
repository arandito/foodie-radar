import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Restaurant } from '@/types';
import RestaurantCard from '@/components/restaurant-card';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RestaurantDisplayProps {
  recommendations: Restaurant[];
  token: string | null;
}

export default function RestaurantDisplay({ recommendations, token }: RestaurantDisplayProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(3);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = window.innerWidth <= 576 ? 345 : 447;

      const scrollAmount = direction === 'left'
        ? -itemWidth * visibleItemsCount
        : itemWidth * visibleItemsCount;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        const itemWidth = window.innerWidth <= 576 ? 330 : 430;
        const count = Math.floor(containerWidth / itemWidth)
        setVisibleItemsCount(count);
      }
    };
    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
    return () => window.removeEventListener('resize', updateVisibleItemsCount);
  }, []);

  return (
    <Card className="pt-6 pb-3 bg-background/70 dark:bg-background/30">
      <h2 className="text-3xl mb-6 text-center">
        <span className='font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'>
          Our Recommendations
        </span>
      </h2>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-11 h-10 ml-3"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <div
          className='absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 opacity-100'
        />
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-3 space-x-4 px-4 md:px-14 styled-scrollbar"
          style={{
            scrollbarWidth: 'auto',
            scrollbarColor: 'rgba(155, 155, 155, 0.25) transparent',
          }}
        >
          {recommendations.map((restaurant) => (
            <div key={restaurant.id} className="flex-shrink-0">
              <RestaurantCard restaurant={restaurant} token={token}/>
            </div>
          ))}
        </div>
        <div
          className='absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 opacity-100'
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-11 h-10 mr-3"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
      <style jsx>{`
          .styled-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          .styled-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .styled-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(155, 155, 155, 0.5);
            border-radius: 20px;
            border: transparent;
          }
        `}</style>
    </Card>
  );
}