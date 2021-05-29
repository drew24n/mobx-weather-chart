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
import { createUseStyles } from 'react-jss';
import { getChartData, getCityName, getError } from '../store/weather/weather.selectors';

const useStyles = createUseStyles({
  wrapper: {
    width: '100%',
    textAlign: 'center',
  },
  error: {
    color: '#ff0000',
  },
});

function Chart() {
  const classes = useStyles();

  const data = useSelector(getChartData);
  const city = useSelector(getCityName);
  const error = useSelector(getError);

  return (
    <div data-testid="chart" className={classes.wrapper}>
      {city && <h2>{city}</h2>}
      {error && <p className={classes.error}>{error}</p>}
      {data.length >= 1 && (
        <ResponsiveContainer width="100%" height={400}>
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
