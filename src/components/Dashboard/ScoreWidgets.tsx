import React from 'react';
import { cn } from '@/lib/utils';
import CircularProgressCard, { CircularProgressCardProps } from './CircularProgressCard';

interface ScoreWidgetsProps {
  className?: string;
}

const scoresData: CircularProgressCardProps[] = [
  { title: 'SCORE #1', value: 85 },
  { title: 'SCORE #2', value: 73 },
  { title: 'SCORE #3', value: 92 },
  { title: 'SCORE #4', value: 54 },
  { title: 'SCORE #5', value: 75 },
];

const ScoreWidgets: React.FC<ScoreWidgetsProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-6 bg-card rounded-lg',
        className
      )}
    >
      {scoresData.map((score) => (
        <CircularProgressCard
          key={score.title}
          title={score.title}
          value={score.value}
        />
      ))}
    </div>
  );
};

export default ScoreWidgets;
