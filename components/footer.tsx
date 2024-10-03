import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-border py-4 text-muted-foreground">
      <div className="container mx-auto">
        built by <Link href="https://github.com/arandito" className="underline underline-offset-4 hover:text-foreground transition-colors">arandito</Link>.
      </div>
    </footer>
  );
};

export default Footer;