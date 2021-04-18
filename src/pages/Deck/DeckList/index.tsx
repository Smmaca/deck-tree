import { useHistory } from "react-router";
import Header from "../../../components/Header";
import PromptCard from "../../../components/PromptCard";
import { Card } from "../../../dataTypes";
import useDecks from "../../../hooks/useDecks";
import { Wrapper } from "../styles";

export default function DeckList() {
  const history = useHistory();
  const decks = useDecks();

  const selectDeckCard: Card = {
    uuid: "choose-deck",
    message: 'Select a deck',
    prompts: decks.map(deck => ({
      text: deck.name,
      goTo: deck.uuid,
    })),
  };

  const onSelectDeck = (deckUUID: string) => {
    history.push(`/deck/${deckUUID}`);
  };

  return (
    <Wrapper>
      <Header title='Deck Selector' />
      <PromptCard
        card={selectDeckCard}
        onChooseCardUUID={onSelectDeck}
        onBack={() => {}}
        onReset={() => {}}
      />
    </Wrapper>
  );
}