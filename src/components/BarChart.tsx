import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Wine } from './WineData';

type BarChartProps = {
  data: Wine[];
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Extract unique alcohol categories
  const alcoholCategories = Array.from(
    new Set(data.map((wine) => wine.alcohol))
  );

  const magnesiumValues = alcoholCategories.map((alcohol) => {
    const wines = data.filter((wine) => wine.alcohol === alcohol);
    const minMagnesium = Math.min(...wines.map((wine) => wine.magnesium));
    return minMagnesium;
  });

  // Define chart options
  const options = {
    xAxis: {
      type: 'category',
      data: alcoholCategories.map((alcohol) => alcohol.toFixed(2)),
      name: 'Alcohol',
    },
    yAxis: {
      type: 'value',
      name: 'Minimum Magnesium',
    },
    series: [
      {
        type: 'bar',
        data: magnesiumValues,
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default BarChart;