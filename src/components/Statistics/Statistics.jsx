import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List, Item, Text } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <List>
        <Item>
          <Text>Good: {good}</Text>
        </Item>
        <Item>
          <Text> Neutral: {neutral}</Text>
        </Item>
        <Item>
          <Text>Bad: {bad}</Text>
        </Item>
        <Item>
          <Text> Total: {total()}</Text>
        </Item>
        <Item>
          <Text> Positive feedback: {positivePercentage() + '%'}</Text>
        </Item>
      </List>
    );
  }
}

export default Statistics;
