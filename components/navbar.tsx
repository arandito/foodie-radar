import React from 'react';
import Link from 'next/link';
import { Menu, Compass, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavBarProps {
  onNavigate: (path: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
  const NavItems = () => (
    <>
      <DropdownMenuItem onClick={() => onNavigate('/explore')}>
        <Compass className="mr-2 h-4 w-4" />
        <span>Explore</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onNavigate('/saved')}>
        <Star className="mr-2 h-4 w-4" />
        <span>Saved</span>
      </DropdownMenuItem>
    </>
  );

  const NavLinks = () => (
    <>
      <Link href="/explore" className='text-sm transition-colors font-medium text-black hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
        Explore
      </Link>
      <Link href="/saved" className='text-sm transition-colors font-medium text-black hover:text-pink-600 dark:text-white dark:hover:text-pink-600'>
        Saved
      </Link>
    </>
  );

  return (
    <nav>
      <div className="hidden md:flex space-x-6">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="-mr-3">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex flex-col">
              <NavItems />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;