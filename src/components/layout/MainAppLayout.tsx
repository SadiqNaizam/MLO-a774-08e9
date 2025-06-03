import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "grid grid-rows-[70px_1fr] h-screen bg-background text-foreground",
      className
    )}>
      <Header />
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
