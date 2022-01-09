import "./Header.css";

const Header = ({ filterByCat, sortByChoice, categories, sortOpt }) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select id="cat" onChange={(v) => filterByCat(v.target.value)}>
            {categories.map((category) => (
              <option
                key={category}
                value={`${category}`}
              >{`${category}`}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select onChange={(v) => sortByChoice(v.target.value)}>
            {sortOpt.map((sort) => (
              <option key={sort} value={sort}>
                {`${sort}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
