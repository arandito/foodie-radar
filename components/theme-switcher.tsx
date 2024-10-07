"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, MoonStar, Laptop } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 focus:outline-none">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 focus:outline-none">
          {currentTheme === 'dark' ? (
            <MoonStar className="h-5 w-5 text-pink-600 hover:text-foreground" />
          ) : (
            <Sun className="h-5 w-5 text-pink-600 hover:text-foreground" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={theme === "light" ? "text-pink-600" : ""}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "text-pink-600" : ""}
        >
          <MoonStar className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={theme === "system" ? "text-pink-600" : ""}
        >
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};