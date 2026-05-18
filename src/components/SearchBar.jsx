import useProducts from "../hooks/useProducts";

function SearchBar() {
  const { search, setSearch } = useProducts();

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search coffee or flavor..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;