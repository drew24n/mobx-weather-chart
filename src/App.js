import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import Search from './components/Search';
import Chart from './components/Chart';
import Loader from './components/Loader';
import Error from './components/Error';
import { getCityName } from './store/weather/weather.selectors';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: '0px',
      padding: '0px',
    },
  },
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {
  const classes = useStyles();

  const city = useSelector(getCityName);

  return (
    <div className={classes.wrapper} data-testid="app">
      <h1>{`${city} Weather`.trim()}</h1>
      <Search />
      <Error />
      <Chart />
      <Loader />
    </div>
  );
}

export default App;
