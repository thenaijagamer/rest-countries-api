import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

class Search extends React.Component {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <div className="search">
        <div className="search__icon-box">
          <SearchIcon className="search__icon" />
        </div>

        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            value={this.props.searchValue}
            onChange={this.props.handleChange}
            placeholder="Search for a country..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
