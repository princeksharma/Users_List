import React, { Component } from 'react';

class Search extends Component {
  searchUpdates = () => {
    const val = this.myValue.value;
    this.props.searchUpdate(val);
  };

  render() {
    return (
      <div>
        <form className='form'>
          <input
            type='text'
            ref={(value) => {
              this.myValue = value;
            }}
            onChange={this.searchUpdates}
            placeholder='Search Users...'
          />
        </form>
      </div>
    );
  }
}

export default Search;
