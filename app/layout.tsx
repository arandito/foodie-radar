import { ThemeProvider } from 'next-themes';
import './globals.css';
import localFont from 'next/font/local';

const interLocal = localFont({
  src: '../public/fonts/InterVariable.ttf',
  variable: '--font-inter-local',
});

export const metadata = {
  title: 'Foodie Radar',
  description: 'An app to find your next favorite restaurant.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interLocal.variable} font-local`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}