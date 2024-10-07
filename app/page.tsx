"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import Background from '@/components/background';
import Grid from '@/components/grid';
import RestaurantCarousel from '@/components/restaurant-carousel';
import { homePageRestaurants } from '@/lib/constants';

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState([]);

  const handleTryIt = () => {
    router.push('/explore')
  }

  const handleSignUp = () => {
    router.push('/auth/signup')
  }

  return (
    <div className="min-h-screen flex flex-col pt-5 pb-2">
      <Header token={token}/>
      <Background />
      <Grid />
      <main className="flex-grow flex flex-col md:flex-row justify-center items-center px-4 max-w-9xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Skip the debate. <br/> Find your next meal, 
            <span className='bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'> fast.</span>
          </h1>
          <p className="sm:text-lg md:text-2xl text-lg mt-6 mb-4 text-muted-foreground font-light">
            Skip the back-and-forth. Tell us what you like, and we&apos;ll find the perfect spot for you in seconds.
          </p>
          <div className="flex flex-row py-5 mb-2 gap-4 justify-center md:justify-start">
            <Button size="lg" className='w-1/4 md:w-1/5' onClick={handleTryIt}>Try it</Button>
            <Button size="lg" className='w-1/4 md:w-1/5' onClick={handleSignUp} variant="outline">Sign up</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <RestaurantCarousel restaurants={homePageRestaurants} />
        </div>
      </main>
      <Footer />
    </div>
  );
}