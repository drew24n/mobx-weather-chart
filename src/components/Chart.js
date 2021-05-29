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
import { getChartData, getCityName, getError } from '../store/weather/weather.selectors';

function Chart() {
  const data = useSelector(getChartData);
  const city = useSelector(getCityName);
  const error = useSelector(getError);

  return (
    <div data-testid="chart">
      {city && <h1>Weather in {city}</h1>}
      {error && <p>{error}</p>}
      {data.length >= 1 && (
        <ResponsiveContainer width="95%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temp" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;
