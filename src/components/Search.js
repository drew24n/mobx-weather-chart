import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';
import weather from '../store/weather';

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

  const handleSearch = (e) => {
    e.preventDefault();
    const city = search.trim().toLowerCase();
    if (!city) return;
    weather.getWeatherData({ city }).then(() => setSearch(''));
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

export default observer(Search);
