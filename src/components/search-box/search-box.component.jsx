import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input // Renders new array with filtered monster names //
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
