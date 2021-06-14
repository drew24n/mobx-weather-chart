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
import { observer } from 'mobx-react-lite';
import weather from '../store/weather';

function Chart() {
  return (
    weather.chartData.length >= 1 && (
      <ResponsiveContainer data-testid="chart" width="95%" height={400}>
        <BarChart data={weather.chartData}>
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

export default observer(Chart);
