import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <Text>{message}</Text>;
  }
}

export default Notification;
