"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import Background from '@/components/background';
import Grid from '@/components/grid'
import ScrollingHowItWorks from '@/components/how-it-works';

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);  
  }, [router]);

  const handleTryIt = () => {
    router.push('/explore')
  }

  const handleSignUp = () => {
    router.push('/auth/signup')
  }

  return (
    <div className="min-h-screen flex flex-col pt-5 pb-2">
      <Background />
      <Header token={token}/>
      <Grid />
      <main className="flex-col flex justify-center flex-grow pt-12">
        <div className="text-center px-4 max-w-3xl mx-auto mb-10 md:-mb-5">
          <h1 className="xs:text-4xl sm:text-5xl md:text-6xl text-4xl font-extrabold mb-6">
            Skip the debate. <br/>
            Find your next meal,
            <span className='bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'> fast.</span>
          </h1>
          <p className="sm:text-lg md:text-2xl text-lg mt-6 mb-4 text-muted-foreground font-light">
          Skip the back-and-forth. Tell us what you like, and we’ll find the perfect spot for you in seconds.
          </p>
          <div className="flex flex-row py-5 mb-2 gap-4 justify-center">
            <Button size="lg" className='w-1/4 md:w-1/6' onClick={handleTryIt}>Try it</Button>
            <Button size="lg" className='w-1/4 md:w-1/6' onClick={handleSignUp} variant="outline">Sign up</Button>
          </div>
        </div>
      </main>
      <ScrollingHowItWorks />
      <Footer />
    </div>
  );
}