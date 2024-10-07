import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Background = () => {
  const { resolvedTheme } = useTheme();
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
        className="fixed inset-0 z-[-2] bg-top bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/backgrounds/background-${isDarkMode ? 'dark' : 'light'}.png')`,
        }}
      />
      <div className="fixed inset-0 z-[-1] bg-background/50" />
    </>
  );
};

export default Background;