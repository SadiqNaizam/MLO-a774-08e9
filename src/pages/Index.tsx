import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsGrid from '../components/Dashboard/StatsGrid';
import BarChartCard from '../components/Dashboard/BarChartCard';
import LineChartCard from '../components/Dashboard/LineChartCard';
import ScoreWidgets from '../components/Dashboard/ScoreWidgets';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <StatsGrid />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BarChartCard visually takes more space, typically 2/3 of the row */}
          <BarChartCard className="md:col-span-2" />
          {/* LineChartCard takes the remaining 1/3 of the row */}
          <LineChartCard className="md:col-span-1" />
        </div>
        <ScoreWidgets />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
