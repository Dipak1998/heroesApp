import React, { Component } from 'react'

export class SearchField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <input
          type='search'
          className='pa3  ba b-green bg-light-blue'
          onChange={this.props.searchChange}
        />
      </>
    )
  }
}

export default SearchField
