import React from 'react';
import styles from './Chart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import config from '../../../config.json';

const data = [
  {
    name: 'USA',
    value: 5148,
  },
  {
    name: 'China',
    value: 669,
  },
  {
    name: 'Great Britain',
    value: 665,
  },
  {
    name: 'Russia',
    value: 214,
  },
  {
    name: 'Japan',
    value: 89,
  },
  {
    name: 'Others',
    value: 1049,
  },
];

const colors = config.colors_owners;

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return <div className={styles.tooltip}>{value}</div>;
  }

  return null;
}

function OwnerChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" width={300} height={400}>
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          axisLine={false}
        />
        <Tooltip active={true} content={<CustomTooltip />} />

        <Bar dataKey="value">
          {colors.map((color, index) => {
            return <Cell key={index} fill={color}></Cell>;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OwnerChart;
