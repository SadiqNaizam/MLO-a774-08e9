import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Boxes } from 'lucide-react';

interface BarChartCardProps {
  className?: string;
}

const productSalesData = [
  { name: 'Region 1', sales: 70 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 5', sales: 40 },
];

const PRIMARY_COLOR = '#00CDEE'; // hsl(var(--primary))

const BarChartCard: React.FC<BarChartCardProps> = ({ className }) => {
  const totalProductsSold = productSalesData.reduce(
    (sum, item) => sum + item.sales,
    0
  );

  return (
    <Card className={cn('bg-card text-card-foreground', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          PRODUCT SALES
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productSalesData} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
              <XAxis type="number" stroke="#99AAB5" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="#99AAB5" fontSize={12} width={80} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                contentStyle={{ backgroundColor: '#2E3440', border: '1px solid #3B4048', borderRadius: '0.375rem' }}
                labelStyle={{ color: '#FFFFFF' }}
              />
              <Bar dataKey="sales" fill={PRIMARY_COLOR} radius={[0, 4, 4, 0]}>
                {productSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PRIMARY_COLOR} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="md:col-span-1 flex flex-col items-center justify-center bg-background/50 p-6 rounded-md h-full">
          <Boxes className="h-16 w-16 text-primary mb-3" />
          <p className="text-sm text-muted-foreground">TOTAL PRODUCTS SOLD</p>
          <p className="text-5xl font-bold text-primary mt-1">
            {totalProductsSold}
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            06/19/2024 - 06/25/2024
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
