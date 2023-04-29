import React from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import wineData from './components/WineData';
import './App.css';
import './index.css';
import {createRoot} from 'react-dom/client'

function App1() {
  return (
    <div className='container'>
      <div className="charts">
      <h1>Wine Data Visualization</h1>
        <div className='linecharts'>
          <LineChart data={wineData}/>
        </div>
        <div className='barcharts'>
          <BarChart data={wineData} />
        </div>
      </div>
    </div>
  );
}
const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App1/>);