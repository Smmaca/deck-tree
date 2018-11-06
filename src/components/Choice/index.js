import React from 'react';
import {
  Wrapper,
} from './styles';

const Choice = ({ onClick, children }) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
);

export default Choice;
