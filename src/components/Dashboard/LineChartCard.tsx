import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from 'recharts';

interface LineChartCardProps {
  className?: string;
}

const websiteTrafficData = [
  { date: '06/19', visits: 65, pageViews: 95 },
  { date: '06/20', visits: 88, pageViews: 125 },
  { date: '06/21', visits: 72, pageViews: 100 },
  { date: '06/22', visits: 110, pageViews: 150 },
  { date: '06/23', visits: 95, pageViews: 130 },
  { date: '06/24', visits: 55, pageViews: 80 },
  { date: '06/25', visits: 78, pageViews: 110 },
];

const PRIMARY_COLOR = '#00CDEE'; // hsl(var(--primary))
const SECONDARY_COLOR = '#FFFFFF'; // Using white for the second line as per image fill
const MUTED_COLOR = '#99AAB5'; // hsl(var(--muted-foreground))
const BORDER_COLOR = '#3B4048'; // hsl(var(--border))
const CARD_BACKGROUND_COLOR = '#2E3440'; // hsl(var(--card))

const LineChartCard: React.FC<LineChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          WEBSITE TRAFFIC
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={websiteTrafficData} margin={{ top: 5, right: 20, left: -20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={PRIMARY_COLOR} stopOpacity={0.5}/>
                <stop offset="95%" stopColor={PRIMARY_COLOR} stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={SECONDARY_COLOR} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={SECONDARY_COLOR} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={BORDER_COLOR} vertical={false} />
            <XAxis dataKey="date" stroke={MUTED_COLOR} fontSize={12} tickLine={false} axisLine={{stroke: BORDER_COLOR}}/>
            <YAxis yAxisId="left" stroke={MUTED_COLOR} fontSize={12} tickLine={false} axisLine={false} domain={[0, 'dataMax + 20']}/>
            <YAxis yAxisId="right" orientation="right" stroke={MUTED_COLOR} fontSize={12} tickLine={false} axisLine={false} domain={[0, 'dataMax + 20']}/>
            <Tooltip
              cursor={{ stroke: PRIMARY_COLOR, strokeWidth: 1, fill: 'transparent' }}
              contentStyle={{ backgroundColor: CARD_BACKGROUND_COLOR, border: `1px solid ${BORDER_COLOR}`, borderRadius: '0.375rem' }}
              labelStyle={{ color: SECONDARY_COLOR, marginBottom: '4px' }}
              itemStyle={{ color: SECONDARY_COLOR }}
            />
            <Legend verticalAlign="bottom" height={36} iconSize={10} formatter={(value) => <span className="text-muted-foreground text-xs ml-1">{value}</span>}/>
            <Area yAxisId="left" type="monotone" dataKey="visits" name="Website Visits" stroke={PRIMARY_COLOR} fillOpacity={1} fill="url(#colorVisits)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2, fill: PRIMARY_COLOR }} />
            <Area yAxisId="right" type="monotone" dataKey="pageViews" name="Website Page Views" stroke={SECONDARY_COLOR} fillOpacity={1} fill="url(#colorPageViews)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2, fill: SECONDARY_COLOR }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
