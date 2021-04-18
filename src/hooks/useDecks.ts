import { Deck } from "../dataTypes";
import excuseDeck from '../decks/excuses.json';

const decks = [
  excuseDeck,
];

export default function useDecks(): Deck[] {
  return decks;
}