import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart
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
        <Area type='monotone' dataKey='count' stroke='#285297' fill='#3b82f6' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
