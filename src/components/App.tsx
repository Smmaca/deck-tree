import { useEffect, useMemo, useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import excuseDeck from '../decks/excuses.json';
import { Deck } from '../dataTypes';
import Header from './Header';
import PromptCard from './PromptCard';
import { Wrapper } from './styles';

export default function App() {
  const [decisionRoute, setDecisionRoute] = useState<string[]>([]);

  const deck: Deck = excuseDeck;

  const startingCard = useMemo(() => {
    return deck.cards[0];
  }, [deck]);

  const currentCard = useMemo(() => {
    return deck.cards.find(card => card.uuid === decisionRoute[decisionRoute.length - 1]);
  }, [decisionRoute, deck]);

  useEffect(() => {
    setDecisionRoute([startingCard.uuid]);
  }, [startingCard]);

  const onChooseCardUUID = (uuid: string) => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.push(uuid);
    setDecisionRoute(_decisionRoute);
  };

  const onBack = () => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.pop();
    setDecisionRoute(_decisionRoute);
  };

  const onReset = () => {
    setDecisionRoute([startingCard.uuid]);
  };

  if (!currentCard) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Header title={deck.name} />
      <PromptCard
        card={currentCard}
        onChooseCardUUID={onChooseCardUUID}
        onBack={onBack}
        onReset={onReset}
        showBackButton={decisionRoute.length > 1}
      />
      <GlobalStyles />
    </Wrapper>
  );
}
