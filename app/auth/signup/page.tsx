'use client';

import React from 'react';
import { SignupCard } from '@/app/auth/components/signup-card';
import Header from '@/components/header';
import Background from '@/components/background';
import Grid from '@/components/grid';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function SignupPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='pt-2 pb-4'>
        <Header token={null} />
        <Separator className='mt-1 bg-gray-200 dark:bg-gray-700' />
      </div>
      <Background />
      <Grid />
      <main className="mx-auto flex flex-col flex-grow mt-10 ustify-center space-y-6 w-[375px] md:w-[425px]">
        <SignupCard />
      </main>
      <Footer />
    </div>
  );
}