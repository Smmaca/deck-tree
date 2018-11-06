import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Space from './Space';

const Wrapper = styled.div`
  padding: 0 20px
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const getOption = (config, optionIndex) => {
  return config.options[optionIndex];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decisionRoute: [0],
    };

    this.getCurrentOption = this.getCurrentOption.bind(this);
    this.onChooseOption = this.onChooseOption.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  getCurrentOption() {
    const { decisionRoute } = this.state;
    const { config } = this.props;

    let option = Object.assign({}, config);

    decisionRoute.forEach((routeIndex) => {
      option = getOption(option, routeIndex);
    });

    return option;
  }

  onChooseOption(index) {
    const { decisionRoute } = this.state;
    decisionRoute.push(index);
    this.setState({ decisionRoute });
  }

  onBack() {
    const { decisionRoute } = this.state;
    decisionRoute.pop();
    this.setState({ decisionRoute });
  }

  onReset() {
    this.setState({ decisionRoute: [0] });
  }

  render() {
    return (
      <Wrapper>
        <Space
          option={this.getCurrentOption()}
          onChooseOption={this.onChooseOption}
          onBack={this.onBack}
          onReset={this.onReset}
          showBackButton={this.state.decisionRoute.length > 1}
        />
        <GlobalStyles />
      </Wrapper>
    );
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
};

export default App;
