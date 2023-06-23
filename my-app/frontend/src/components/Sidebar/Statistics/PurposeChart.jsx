import React from 'react';
import styles from './Chart.module.css';
import config from '../../../config.json';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Communications',
    value: 5769,
  },
  {
    name: 'Weather',
    value: 447,
  },
  {
    name: 'Navigation',
    value: 165,
  },
  {
    name: 'Science',
    value: 92,
  },
  {
    name: 'Others',
    value: 1353,
  },
];

const colors = config.colors_purpose;

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return <div className={styles.tooltip}>{value}</div>;
  }

  return null;
}

function PurposeChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" width={300} height={400}>
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          axisLine={false}
          width={100}
        />
        <Tooltip active={true} content={<CustomTooltip />} />

        <Bar dataKey="value">
          {colors.map((color, index) => {
            console.log(color);
            return <Cell key={index} fill={color}></Cell>;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PurposeChart;
