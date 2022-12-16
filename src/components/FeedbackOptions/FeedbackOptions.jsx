import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Wrapper, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Wrapper>
        {options.map(item => {
          return (
            <Button type="button" onClick={onLeaveFeedback} value={item} key={item}>
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </Button>
          );
        })}
      </Wrapper>
    );
  }
}

export default FeedbackOptions;
