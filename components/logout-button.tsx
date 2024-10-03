import React from 'react';
import { useRouter } from 'next/router';
import { LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { logout } from '@/lib/api';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Button variant="outline" onClick={handleLogout} className="h-8">
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
};

export default LogoutButton;