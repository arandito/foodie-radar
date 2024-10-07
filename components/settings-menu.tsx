import React from 'react';
import { useRouter } from 'next/navigation';
import { Settings, LogOut, LogIn, UserPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SettingsMenuProps {
  token: string | null;
  onLogout: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ token, onLogout }) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="pl-2 py-2 focus:outline-none">
          <Settings className="h-5 w-5 hover:text-gray-400 dark:hover:text-gray-500" />
          </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {token ? (
          <DropdownMenuItem onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem onClick={() => router.push('/auth/login')}>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Log In</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/auth/signup')}>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Sign Up</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;