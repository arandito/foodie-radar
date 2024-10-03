import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Grid = () => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 z-[-1] bg-transparent overflow-hidden pointer-events-none h-screen">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor="white" stopOpacity="0" />
            <stop offset="15%" stopColor="white" stopOpacity="0.5" />
            <stop offset="25%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
          <pattern id="grid" width="35" height="35" patternUnits="userSpaceOnUse">
            <path d="M100 0H0V100" fill="none" stroke={isDarkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.05)"} strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
      </svg>
    </div>
  );
};

export default Grid;