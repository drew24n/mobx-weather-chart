import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getError } from '../store/weather/weather.selectors';

const useStyles = createUseStyles({
  error: {
    color: '#ff0000',
  },
});

function Error() {
  const classes = useStyles();

  const error = useSelector(getError);

  return (
    <>
      {error && (
        <p className={classes.error} data-testid="error">
          {error}
        </p>
      )}
    </>
  );
}

export default Error;
