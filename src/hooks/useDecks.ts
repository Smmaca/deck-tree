import { Deck } from "../dataTypes";
import excuseDeck from '../decks/excuses.json';
import iFeelLikeShitDeck from '../decks/iFeelLikeShit.json';

const decks = [
  excuseDeck,
  iFeelLikeShitDeck
];

export default function useDecks(): Deck[] {
  return decks;
}