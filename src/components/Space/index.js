import React from 'react';
import PropTypes from 'prop-types';

import Choice from '../Choice';
import {
  Container,
  Heading,
} from './styles';

const Space = ({ option, onChooseOption, onBack, onReset, showBackButton }) => {
  const { options, message } = option;
  return (
    <Container>
      {showBackButton && <button onClick={onBack}>Back</button>}
      {message && <Heading>{message}</Heading>}
      {(options && options.length)
        ? options.map((option, index) => (
          <Choice
            key={option.prompt + index}
            onClick={() => onChooseOption(index)}
          >
            {option.prompt}
          </Choice>
        ))
        : <button onClick={onReset}>Start again</button>}
    </Container>
  );
};

Space.propTypes = {
  option: PropTypes.object.isRequired,
  onChooseOption: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool,
}

export default Space;
