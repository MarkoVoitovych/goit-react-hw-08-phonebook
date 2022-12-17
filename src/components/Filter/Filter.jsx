import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Label, Input, Span } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    OnFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, OnFilterChange } = this.props;
    return (
      <Label>
        <Span>Find contacts by name</Span>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={OnFilterChange}
        />
      </Label>
    );
  }
}

export default Filter;
