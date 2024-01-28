import React from 'react';
import { Cell, PieChart, Pie } from 'recharts';

import './Spectrum.scss';

import dataset from './data.json';
import Label from './Label';

export type DatasetValue = {
  name: string | string[];
  value: number;
  color: string;
};

export type Dataset = {
  [key: string]: DatasetValue[];
}

const Spectrum = () => {
  const pieProps = {
    cx: '50%',
    cy: '50%',
    label: Label,
    labelLine: false,
    fill: '#8884d8',
    dataKey: 'value',
  };

  const renderCells = (dataset: DatasetValue[]) =>
    dataset.map((entry, index) => (
      <Cell key={`cell-${index * 2}`} fill={entry.color} />
    ));

  return (
    <PieChart width={960} height={960}>
      <Pie {...pieProps} data={dataset.level1} outerRadius={120}>
        {renderCells(dataset.level1)}
      </Pie>
      <Pie {...pieProps} data={dataset.level2} innerRadius={120} outerRadius={320}>
        {renderCells(dataset.level2)}
      </Pie>
      <Pie {...pieProps} data={dataset.level3} innerRadius={300} outerRadius={480}>
        {renderCells(dataset.level3)}
      </Pie>
    </PieChart>
  );
};

export default Spectrum;
