export interface Prompt {
  text: string;
  goTo: string;
}

export interface Card {
  uuid: string;
  message: string;
  prompts: Prompt[];
}

export interface Deck {
  name: string;
  cards: Card[];
}
