import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
} from './styles';

const Choice = ({ onClick, children }) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
);

Choice.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
}

export default Choice;
