import React from "react";

function Search(props) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search for a Product"
        value = {props.searchText}
        onChange={(e) => //props.setSearch 
          props.setSearch(e.target.value)
        } 

      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
