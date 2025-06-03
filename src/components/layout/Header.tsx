import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarRange } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Data for display, matching the screenshot
  const startDate = "06/19/2024";
  const endDate = "06/25/2024";

  return (
    <header
      className={cn(
        'flex items-center justify-between h-[70px] bg-background px-6 border-b border-border text-foreground',
        className
      )}
    >
      <h1 className="text-2xl font-bold">
        WEEKLY STATUS DASHBOARD
      </h1>
      <div className="flex items-center space-x-4">
        <CalendarRange className="h-5 w-5 text-primary" />
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-muted-foreground">ENTER START DATE -&gt;&gt;</span>
          <span className="font-semibold text-foreground">{startDate}</span>
          <span className="text-muted-foreground">THROUGH</span>
          <span className="font-semibold text-foreground">{endDate}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
