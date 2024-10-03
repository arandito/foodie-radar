"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { AuthForm } from "@/app/auth/components/auth-form"
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';

export const LoginCard: React.FC = () => {
  const router = useRouter();

  const handleLogin = async (name: string, email: string, password: string) => {
    try {
      const token = await login(email, password);
      localStorage.setItem('token', token);
      router.push('/explore');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card className="flex flex-col p-8 bg-background/40 dark:bg-background/30">
      <div className="flex flex-col space-y-2 text-center mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to log in
        </p>
      </div>
      <AuthForm isLogin={true} onSubmit={handleLogin} />
      <div className="relative flex items-center w-full py-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        <span className="flex-shrink mx-4 text-sm text-muted-foreground">
          Don&apos;t have an account?
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
      </div>
      <Link
        href="/auth/signup"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Continue to Sign Up
      </Link>
    </Card>
  );
};