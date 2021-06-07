import {
  BarChart,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { getChartData } from '../store/weather/weather.selectors';

function Chart() {
  const data = useSelector(getChartData);

  return (
    data.length >= 1 && (
      <ResponsiveContainer data-testid="chart" width="95%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    )
  );
}

export default Chart;
