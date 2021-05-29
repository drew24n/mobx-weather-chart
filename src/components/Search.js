import { useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="enter city"
      />
      <input type="button" value="Search" />
    </>
  );
}

export default Search;
