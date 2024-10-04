import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { logout } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '@/components/theme-switcher';
import FoodSVG from "@/public/food-pink.svg";
import NavBar from '@/components/navbar';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import SettingsMenu from '@/components/settings-menu'; 

interface HeaderProps {
  token: string | null;
}

const Header = ({ token }: HeaderProps) => {
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
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-2">
      <div className="flex items-center">
        <h1 className="text-black dark:text-white text-2xl flex font-medium items-center mr-4 md:mr-8">
          <Link href='/' className="flex flex-row">
            <Image src={FoodSVG} alt="Food" width={24} height={24} className="mr-2 mt-0.5 h-7 w-7" priority/>
            foodie radar
          </Link>
        </h1>
      </div>
      <div className="flex items-center">
        <NavBar onNavigate={handleNavigate} />
        <div className="ml-5 mr-2 h-8">
          <Separator orientation="vertical" className="h-full" />
        </div>
        <ThemeSwitcher />
        <div className="ml-2 mr-2">
          <Link href="https://github.com/arandito/foodie-radar" target="_blank">
            <Icons.gitHub className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
          </Link>
        </div>
        <SettingsMenu token={token} onLogout={handleLogout} />
      </div>
    </header>
  );
};

export default Header;