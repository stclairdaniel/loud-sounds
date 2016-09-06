import React from 'react';
import SearchResultsContainer from './search_results_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    if (e.target.value === "") {
      this.props.clearSearchResults();
    } else {
      this.props.clearSearchResults();
      this.props.requestUsersLike(e.target.value);
      this.props.requestTracksLike(e.target.value);
      document.addEventListener("click", () => {this.clearForm();});
    }
  }

  clearForm() {
    let form = document.getElementById("search");
    form.value="";
    this.props.clearSearchResults();
  }


  render () {
    return (
    <div className="search">
      <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_25/v1473181301/search-icon-png-14_sjmxpp.png"></img>
      <input id="search" placeholder="Artist or track" name="searchString" onChange={this.handleChange}></input>
      <SearchResultsContainer />
    </div>
    );
  }
}

export default Search;
