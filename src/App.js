import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import Search from './components/Search';
import Chart from './components/Chart';
import Loader from './components/Loader';
import Error from './components/Error';
import weather from './store/weather';

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

  return (
    <div className={classes.wrapper} data-testid="app">
      <h1>{`${weather.cityName} Weather`.trim()}</h1>
      <Search />
      <Error />
      <Chart />
      <Loader />
    </div>
  );
}

export default observer(App);
