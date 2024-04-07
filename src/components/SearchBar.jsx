const SearchBar = ({ placeholder, search, setSearch, setPage }) => {
  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setPage(1);
  };

  return (
    <div className="searchbar">
      <input
        onChange={handleChange}
        className=""
        type="text"
        placeholder={placeholder}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
