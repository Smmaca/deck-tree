import { Deck } from "../dataTypes";
import iFeelLikeShitDeck from '../decks/iFeelLikeShit.json';

const decks = [
  iFeelLikeShitDeck
];

export default function useDecks(): Deck[] {
  return decks;
}