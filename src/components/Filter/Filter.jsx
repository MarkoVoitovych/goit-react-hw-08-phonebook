import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    OnFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, OnFilterChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={OnFilterChange} />
      </label>
    );
  }
}

export default Filter;
