"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; 
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
    router.push('/explore');
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col pt-5 pb-2">
      <Background />
      <Grid />
      <Header token={token} />
      <main className="flex-grow flex flex-col md:flex-row justify-center items-center px-4 max-w-[1200px] mx-auto w-full">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0 px-4 md:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            variants={itemVariants}
          >
            Skip the debate. <br /> Find your next meal,
            <span className='bg-gradient-to-r text-transparent bg-clip-text from-pink-600 to-amber-400'> fast.</span>
          </motion.h1>
          <motion.p
            className="sm:text-lg md:text-2xl text-lg mt-6 mb-4 text-muted-foreground font-light"
            variants={itemVariants}
          >
            Skip the back-and-forth. Tell us what you like, and we&apos;ll find the perfect spot for you in seconds.
          </motion.p>
          <motion.div
            className="flex flex-row py-5 mb-2 gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Button size="lg" className='w-1/3 md:w-1/4' onClick={handleTryIt}>Try it</Button>
            <Button size="lg" className='w-1/3 md:w-1/4' onClick={handleSignUp} variant="outline">Sign up</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 pb-7 md:pb-0 px-4 md:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <RestaurantCarousel restaurants={homePageRestaurants} />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}