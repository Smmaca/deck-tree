import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { faBackward, faFastBackward, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import useDeck from '../../../hooks/useDeck';
import useDeckManager from '../../../hooks/useDeckManager';
import Header from '../../../components/Header';
import PromptCard from '../../../components/PromptCard';
import IconButton from '../../../components/IconButton';
import { Wrapper } from '../styles';

export default function DeckView() {
  const { deckUUID } = useParams<{ deckUUID: string }>();

  const deck = useDeck(deckUUID);

  const {
    startCard,
    currentCard,
    goToNextCard,
    goToPreviousCard,
    resetDeck,
  } = useDeckManager(deck);

  const isCurrentStartCard = startCard?.uuid === currentCard?.uuid;

  if (!currentCard) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Header title={deck?.name || ''}>
        {!isCurrentStartCard ? <IconButton onClick={resetDeck} icon={faFastBackward} /> : ''}
        {!isCurrentStartCard ? <IconButton onClick={goToPreviousCard} icon={faBackward} /> : ''}
        <Link to='/deck'>
          <IconButton icon={faLayerGroup} />
        </Link>
      </Header>
      <PromptCard
        card={currentCard}
        onChooseCardUUID={goToNextCard}
        onBack={goToPreviousCard}
        onReset={resetDeck}
        showBackButton={currentCard?.uuid !== startCard?.uuid}
      />
    </Wrapper>
  );
}