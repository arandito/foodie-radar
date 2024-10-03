"use client";

import { useState, useEffect } from 'react';
import { Restaurant } from '@/types';
import { getSavedRestaurants } from '@/lib/api';
import SavedRestaurantCard from '@/app/saved/components/saved-restaurant-card';
import Header from '@/components/header';
import Background from '@/components/background';
import Grid from '@/components/grid';
import Footer from '@/components/footer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

export default function SavedRestaurants() {
  const router = useRouter();
  const [savedRestaurants, setSavedRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      router.push('/auth/login');
    } else {
      setToken(storedToken);
    }
  }, [router]);

  useEffect(() => {
    const fetchSavedRestaurants = async () => {
      try {
        const restaurants = await getSavedRestaurants();
        setSavedRestaurants(restaurants);
      } catch (err) {
        setError('Failed to fetch saved restaurants. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedRestaurants();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-2 pb-2">
      <Background />
      <Header token={token} />
      <Separator className='mt-1 bg-gray-200 dark:bg-gray-700' />
      <Grid />
      <main className="flex-col flex justify-center items-center flex-grow py-6">
        {savedRestaurants.length === 0 ? 
        <Alert className="h-1/2 w-1/2">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No saved restaurants</AlertTitle>
          <AlertDescription>You haven&apos;t saved any restaurants yet. Start exploring to add some favorites!</AlertDescription>
        </Alert> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRestaurants.map((restaurant) => (
            <SavedRestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>}
      </main>
      <Footer />
    </div>
  );
}

