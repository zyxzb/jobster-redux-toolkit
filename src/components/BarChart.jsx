import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='count' fill='#3b82f6' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
