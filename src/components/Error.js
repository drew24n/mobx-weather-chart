import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import weather from '../store/weather';

const useStyles = createUseStyles({
  error: {
    color: '#ff0000',
  },
});

function Error() {
  const classes = useStyles();

  return (
    <>
      {weather.error && (
        <p className={classes.error} data-testid="error">
          {weather.error}
        </p>
      )}
    </>
  );
}

export default observer(Error);
