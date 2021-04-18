import { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Deck } from "../dataTypes";

interface DeckManager {
  startCard: Card | undefined;
  currentCard: Card | undefined;
  goToNextCard: (cardUUID: string) => void;
  goToPreviousCard: () => void;
  resetDeck: () => void;
}

export default function useDeckManager(deck?: Deck): DeckManager {
  const [decisionRoute, setDecisionRoute] = useState<string[]>([]);

  if (!deck) {
    console.error("ERROR: Can't create deck manager for undefined deck");
  }

  const currentCard = useMemo(() => {
    return deck?.cards.find(card => card.uuid === decisionRoute[decisionRoute.length - 1]);
  }, [decisionRoute, deck]);

  const startCard = deck?.cards[0];

  const goToFirstCard = useCallback(() => {
    if (startCard) {
      setDecisionRoute([startCard.uuid]);
    }
  }, [startCard]);

  useEffect(() => {
    goToFirstCard();
  }, [goToFirstCard]);

  const goToNextCard = (uuid: string) => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.push(uuid);
    setDecisionRoute(_decisionRoute);
  };

  const goToPreviousCard = () => {
    const _decisionRoute = [...decisionRoute];
    _decisionRoute.pop();
    setDecisionRoute(_decisionRoute);
  };

  return {
    startCard,
    currentCard,
    goToNextCard,
    goToPreviousCard,
    resetDeck: goToFirstCard,
  };
}