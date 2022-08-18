import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input // Renders new array with filtered monster names //
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
