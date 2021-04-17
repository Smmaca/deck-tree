import { Card } from '../../dataTypes';
import Choice from '../Choice';
import {
  Container,
  Heading,
} from './styles';

interface ICardProps {
  card: Card;
  onChooseCardUUID: (uuid: string) => void;
  onBack: () => void;
  onReset: () => void;
  showBackButton?: boolean;
}

export default function PromptCard({ card, onChooseCardUUID, onBack, onReset, showBackButton }: ICardProps) {
  const { prompts, message } = card;

  return (
    <Container>
      {showBackButton && <button onClick={onBack}>Back</button>}
      {message && <Heading>{message}</Heading>}
      {prompts?.length
        ? prompts.map((prompt) => (
          <Choice
            key={prompt.goTo}
            onClick={() => onChooseCardUUID(prompt.goTo)}
          >
            {prompt.text}
          </Choice>
        ))
        : <button onClick={onReset}>Start again</button>}
    </Container>
  );
}
