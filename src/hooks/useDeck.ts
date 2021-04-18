import { useMemo } from "react";
import { Deck } from "../dataTypes";
import useDecks from "./useDecks";

export default function useDeck(deckUUID: string): Deck | undefined {
  const decks = useDecks();

  const deck = useMemo(() => {
    return decks.find(deck => deck.uuid === deckUUID);
  }, [decks, deckUUID]);

  if (!deck) {
    console.error('ERROR: Could not find deck with uuid', deckUUID);
  }

  return deck;
};
