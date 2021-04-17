import { useMemo, useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import Header from './Header';
import Space from './Space';
import { Wrapper } from './styles';

const getOption = (config: any, optionIndex: number) => {
  return config.options[optionIndex];
};

export default function App({ config }: { config: any }) {
  const [decisionRoute, setDecisionRoute] = useState([0]);

  const currentOption = useMemo(() => {
    let option = { ...config };
    decisionRoute.forEach((routeIndex) => {
      option = getOption(option, routeIndex);
    });
    return option;
  }, [decisionRoute, config]);

  const onChooseOption = (index: number) => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.push(index);
    setDecisionRoute(_decisionRoute);
  };

  const onBack = () => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.pop();
    setDecisionRoute(_decisionRoute);
  };

  const onReset = () => {
    setDecisionRoute([0]);
  };

  return (
    <Wrapper>
      <Header />
      <Space
        option={currentOption}
        onChooseOption={onChooseOption}
        onBack={onBack}
        onReset={onReset}
        showBackButton={decisionRoute.length > 1}
      />
      <GlobalStyles />
    </Wrapper>
  );
}
