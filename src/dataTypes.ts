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
  uuid: string;
  name: string;
  cards: Card[];
}
