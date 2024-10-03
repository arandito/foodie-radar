'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import AutocompleteInput from '@/app/explore/components/google-autocomplete-input';
import Map from '@/app/explore/components/google-map';

interface LocationSelectorProps {
  location: { lat: number; lng: number };
  radius: number;
  onLocationSelect: (newLocation: { lat: number; lng: number }) => void;
  onRadiusChange: (newRadius: number) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  location,
  radius,
  onLocationSelect,
  onRadiusChange
}) => {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden md:mx-10 bg-background/70 dark:bg-background/30">
      <div className="flex flex-col w-full md:w-1/2">
        <CardContent className="p-8">
          <h3 className="text-3xl mb-2"><span className='font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'>Where do you want to explore?</span></h3>
          <Label className="block text-xl font-light mb-4">Search Location</Label>
          <div className="relative mb-10">
            <AutocompleteInput onLocationSelect={onLocationSelect} />
          </div>
          <h3 className="text-3xl mb-2"><span className='font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'>How far do you want to go?</span></h3>
          <Label className="block text-xl font-light mb-6">Search Radius - {radius} km</Label>
          <Slider
            value={[radius]}
            onValueChange={([value]) => onRadiusChange(value)}
            max={2}
            step={0.25}
          />
        </CardContent>
      </div>
      <div className='p-6 w-full md:w-1/2'>
        <Map center={location} radius={radius ? radius : 0} />
      </div>
    </Card>
  );
};

export default LocationSelector;