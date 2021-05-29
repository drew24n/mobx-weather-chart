import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Search from './components/Search';
import Chart from './components/Chart';
import Loader from './components/Loader';

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
  const { isLoading } = useSelector((state) => state.weather);

  return (
    <div className={classes.wrapper} data-testid="app">
      {isLoading && <Loader />}
      <h1>Weather</h1>
      <Search />
      <Chart />
    </div>
  );
}

export default App;
