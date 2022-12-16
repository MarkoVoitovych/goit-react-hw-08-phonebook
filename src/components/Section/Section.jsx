import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatSection, Title } from './Section.styled';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <StatSection>
        <Title>{title}</Title>
        {children}
      </StatSection>
    );
  }
}

export default Section;
