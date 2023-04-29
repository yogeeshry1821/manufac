import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Wine } from './WineData';

type LineChartProps = {
  data: Wine[];
};

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Extract flavanoids and ash values from the wine data
  const flavanoids = data.map((wine) => wine.flavanoids);
  const ash = data.map((wine) => wine.ash);

  // Define chart options
  const options = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids',
    },
    yAxis: {
      type: 'value',
      name: 'Ash',
    },
    series: [
      {
        type: 'line',
        data: flavanoids.map((value, index) => [value, ash[index]]),
      },
    ],
  };

  return <ReactECharts option={options} />;
};
export default LineChart;