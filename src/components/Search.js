import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getWeatherData } from '../store/weather/weather.actions';
import { getCityName } from '../store/weather/weather.selectors';

const useStyles = createUseStyles({
  wrapper: {
    marginBottom: '20px',
    '& input:focus': {
      outline: 'none',
    },
    '& [type=submit]': {
      cursor: 'pointer',
    },
  },
});

function Search() {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const city = search.trim().toLowerCase();
  const previousSearchCity = useSelector(getCityName).toLowerCase();

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      if (!city || city === previousSearchCity) return;
      dispatch(getWeatherData({ city }));
    } finally {
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSearch} data-testid="search" className={classes.wrapper}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="enter city"
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
