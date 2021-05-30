import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

const useStyles = createUseStyles({
  '@global': {
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
  wrapper: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  circle: {
    border: '10px solid #f3f3f3',
    borderTop: '10px solid #3498db',
    borderRadius: '50%',
    width: '175px',
    height: '175px',
    animation: 'spin 1.5s linear infinite',
    margin: 'auto',
  },
});

function Loader() {
  const classes = useStyles();

  const { isLoading } = useSelector((state) => state.weather);

  return (
    <>
      {isLoading && (
        <div className={classes.wrapper} data-testid="loader">
          <div className={classes.circle} />
        </div>
      )}
    </>
  );
}

export default Loader;
