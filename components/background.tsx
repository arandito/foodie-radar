import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Background = () => {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <>
      <div
        className="absolute inset-0 z-[-1] bg-top bg-no-repeat bg-cover transition-opacity duration-300"
        style={{
          backgroundImage: `url('/backgrounds/background-${isDarkMode ? 'dark' : 'light'}.png')`,
        }}
      />
      <div className="bg-background"></div>
    </>
  );
};

export default Background;
