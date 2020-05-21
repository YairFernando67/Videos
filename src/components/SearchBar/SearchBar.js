import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  
  state = {
    input: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }
  
  render() {
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;