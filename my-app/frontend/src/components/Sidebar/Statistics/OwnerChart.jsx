import React, { PureComponent } from 'react';
import styles from './OwnerChart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Country',
    value: 2500,
    // country_2: 1300,
    // country_3: 600,
    // country_4: 800,
    // country_5: 450,
  },
  {
    name: 'Country',
    value: 1300,
  },
  {
    name: 'Country',
    value: 600,
  },
  {
    name: 'Country',
    value: 800,
  },
  {
    name: 'Country',
    value: 450,
  },
];

const colors = ['#8884d8', '#82ca9d', '#ff4000', '#581f18', '#f6Ae2d'];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return <div className={styles.tooltip}>{value}</div>;
  }

  return null;
}

function OwnerChart() {
  //   static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  return (
    // width={'100%'} height={'100%'}
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" width={300} height={400}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          // tick={{ marginRight: 10, strokeWidth: 1 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          active={true}
          content={<CustomTooltip />}
          //   labelFormatter={() => ''}
          //   formatter={(value) => `${value}`}
        />
        {/* <Legend /> */}
        <Bar dataKey="value">
          {colors.map((color, index) => {
            console.log(color);
            return <Cell key={index} fill={color}></Cell>;
          })}
        </Bar>
        {/* <Bar dataKey="country_2" fill="#82ca9d" />
      <Bar dataKey="country_3" fill="#FF4000" />
      <Bar dataKey="country_4" fill="#581F18" />
      <Bar dataKey="country_5" fill="#F6AE2D" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OwnerChart;
