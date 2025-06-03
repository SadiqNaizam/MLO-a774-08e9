import React from 'react';
import { cn } from '@/lib/utils';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';

export interface CircularProgressCardProps {
  title: string;
  value: number; // Percentage value 0-100
  className?: string;
}

const PRIMARY_COLOR = '#00CDEE'; // hsl(var(--primary))
const BACKGROUND_CIRCLE_COLOR = '#FFFFFF'; // White as per image

const CircularProgressCard: React.FC<CircularProgressCardProps> = ({
  title,
  value,
  className,
}) => {
  const data = [{ name: title, value: value, fill: PRIMARY_COLOR }];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        className
      )}
    >
      <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={12} 
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{
                fill: BACKGROUND_CIRCLE_COLOR,
                opacity: 0.1,
              }}
              dataKey="value"
              cornerRadius={10}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-bold text-primary">
            {value}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground">{title}</p>
    </div>
  );
};

export default CircularProgressCard;
