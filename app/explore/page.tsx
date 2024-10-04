'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/header';
import Footer from '@/components/footer';
import Grid from '@/components/grid';
import Background from '@/components/background';
import GoogleProvider from '@/app/explore/components/google-provider';
import LocationSelector from '@/app/explore/components/location-selector';
import CuisineSelector from '@/app/explore/components/cuisine-selector';
import { RecommendationRequest, Restaurant } from '@/types';
import { Separator } from '@/components/ui/separator';
import Stepper from '@/app/explore/components/stepper';
import { ChevronRight, ChevronLeft, RefreshCw } from 'lucide-react';
import { getRecommendations, getRecommendationsNoAuth } from '@/lib/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import RestaurantDisplay from '@/components/restaurant-display';


export default function ExplorePage() {
  const router = useRouter();
  const [location, setLocation] = useState<Pick<RecommendationRequest, 'lat' | 'lng'>>({ lat: 40.7128, lng: -74.0060 });
  const [radius, setRadius] = useState<RecommendationRequest['radius']>(0);
  const [selectedCuisines, setSelectedCuisines] = useState<RecommendationRequest['primaryTypes']>([]);
  const [step, setStep] = useState<number>(1);
  const [token, setToken] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, [router]);

  const handleLocationSelect = (newLocation: Pick<RecommendationRequest, 'lat' | 'lng'>) => {
    setLocation(newLocation);
  };

  const handleRadiusChange = (newRadius: RecommendationRequest['radius']) => {
    setRadius(newRadius);
  };

  const handleCuisineSelect = useCallback((cuisines: RecommendationRequest['primaryTypes']) => {
    setSelectedCuisines(cuisines);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    const requestBody: RecommendationRequest = {
      lat: location.lat,
      lng: location.lng,
      radius: radius * 1000, 
      primaryTypes: selectedCuisines
    };
    try {
      var results = [];
      if (token){
        results = await getRecommendations(requestBody);
      } else {
        results = await getRecommendationsNoAuth(requestBody);
      }
      //console.log(results)
      setRecommendations(results);
      nextStep();
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        setError('Your session has expired. Please log in again.');
        router.push('/auth/login');
      } else {
        setError('Failed to fetch recommendations. Please try again.');
      }
      console.error("Error fetching recommendations:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CuisineSelector onSelect={handleCuisineSelect} />
        );
      case 2:
        return (
          <GoogleProvider>
            <LocationSelector
              location={location}
              radius={radius}
              onLocationSelect={handleLocationSelect}
              onRadiusChange={handleRadiusChange}
            />
          </GoogleProvider>
        );
      case 3:
        return (
          <RestaurantDisplay recommendations={recommendations} token={token}/>
        );
      default:
        return null;
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col min-h-screen py-2">
        <Background />
        <Grid />
        <Header token={token} />
        <Separator className='mt-1 bg-gray-200 dark:bg-gray-700' />
        <main className="flex-grow mx-auto px-4 md:px-6 w-full">
          <div className='flex justify-center py-6 px-2 w-full mb-6'>
            <Stepper currentStep={step} totalSteps={3} />
          </div>
          {renderStep()}
          <div className="flex justify-between mt-8 md:mx-8 mb-8">
            {step > 1 ? (<Button
              onClick={prevStep}
              disabled={step === 1}
              variant="outline"
            >
              <ChevronLeft className='-ml-3 mr-1 h-5 w-5' />
              Previous
            </Button>) : <div></div>}
            {step === 1 ? (
              <Button
                onClick={nextStep}
                disabled={selectedCuisines.length === 0}
              >
                Continue
                <ChevronRight className='ml-1 -mr-2 h-5 w-5' />
              </Button>
            ) : step === 2 ? (
              <Button
                onClick={handleSubmit}
                disabled={radius === 0 || !location || isLoading}
              >
                {isLoading ? 'Loading...' : 'Get Recommendations'}
                <ChevronRight className='ml-1 -mr-2 h-5 w-5' />
              </Button>
            ) : (
              <Button
                onClick={handleRestart}
              >
                Restart
                <RefreshCw className='ml-2 h-4 w-4' />
              </Button>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
