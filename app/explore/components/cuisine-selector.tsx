"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cuisineOptions } from '@/lib/constants';

interface CuisineSelectorProps {
  onSelect: (cuisines: string[]) => void;
}

const CuisineSelector: React.FC<CuisineSelectorProps> = ({ onSelect }) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(5);

  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        const itemWidth = 160;
        setVisibleItemsCount(Math.floor(containerWidth / itemWidth));
      }
    };

    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
    return () => window.removeEventListener('resize', updateVisibleItemsCount);
  }, []);

  useEffect(() => {
    onSelect(selectedCuisines);
  }, [selectedCuisines, onSelect]);

  const toggleCuisine = (cuisineId: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisineId)
        ? prev.filter(id => id !== cuisineId)
        : [...prev, cuisineId]
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = 160;
      const scrollAmount = direction === 'left'
        ? -itemWidth * visibleItemsCount
        : itemWidth * visibleItemsCount;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Card className='bg-background/70 dark:bg-background/30 py-8 mx-4 md:mx-10'>
      <h2 className="text-3xl mb-4 px-8 text-center"> 
        <span className='font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'>
          What kind of food are you craving?
        </span>
      </h2>
      <div className="py-3">
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 ml-3"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 px-10 md:px-14"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuisineOptions.map(cuisine => (
              <Button
                key={cuisine.id}
                onClick={() => toggleCuisine(cuisine.id)}
                variant={selectedCuisines.includes(cuisine.id) ? "selector" : "secondary"}
                className="flex-shrink-0 h-60 w-60 flex flex-col justify-center"
              >
                <Image
                  src={`/food-icons/${cuisine.id}.png`}
                  alt={cuisine.name}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <span className="text-2xl text-center">{cuisine.name}</span>
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 mr-3"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CuisineSelector;