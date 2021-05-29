import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getWeatherData } from '../store/weather/weather.actions';

const useStyles = createUseStyles({
  wrapper: {
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

  const handleSearch = (e) => {
    e.preventDefault();
    const city = search.trim();
    if (!city) {
      setSearch('');
      return;
    }
    dispatch(getWeatherData({ city }));
    setSearch('');
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
