"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { AuthForm } from "@/app/auth/components/auth-form"
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/api';
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button';

export const SignupCard: React.FC = () => {
  const router = useRouter();

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      await signUp(name, email, password);
      router.push('/explore');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Card className="flex flex-col p-8 bg-background/40 dark:bg-background/30">
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your info below to create your account
        </p>
      </div>
      <AuthForm isLogin={false} onSubmit={handleSignup} />
      <div className="relative flex items-center w-full py-4">
        <div className="flex-grow border-t bg-muted-foreground"></div>
        <span className="flex-shrink mx-4 text-sm text-muted-foreground">
          Don&apos;t have an account?
        </span>
        <div className="flex-grow border-t bg-muted-foreground"></div>
      </div>
      <Link
        href="/auth/login"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Continue to Log In
      </Link>
    </Card>
  );
};