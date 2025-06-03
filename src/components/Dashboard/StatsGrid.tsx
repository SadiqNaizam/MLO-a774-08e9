import React from 'react';
import { cn } from '@/lib/utils';
import StatCard, { StatCardProps } from './StatCard';

interface StatsGridProps {
  className?: string;
}

const statsData: StatCardProps[] = [
  {
    title: 'REVENUE',
    value: '$92,463',
  },
  {
    title: 'PRODUCTION OUTPUT',
    value: '315',
  },
  {
    title: 'CUSTOMER SATISFACTION SCORE',
    value: '91%',
  },
  {
    title: 'EMPLOYEE ATTENDANCE',
    value: '96%',
  },
];

const StatsGrid: React.FC<StatsGridProps> = ({ className }) => {
  return (
    <div
      className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}
    >
      {statsData.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatsGrid;
