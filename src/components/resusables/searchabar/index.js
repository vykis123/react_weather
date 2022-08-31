import "./index.scss";

const SearchBar = ({ getCityName }) => {
  return (
    <input
      placeholder="Enter City Name Here"
      required
      onChange={(event) => {
        getCityName(event.target.value);
      }}
    ></input>
  );
};

export default SearchBar;
