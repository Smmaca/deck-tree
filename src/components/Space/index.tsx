import Choice from '../Choice';
import {
  Container,
  Heading,
} from './styles';

interface ISpaceProps {
  option: any;
  onChooseOption: (index: number) => void;
  onBack: () => void;
  onReset: () => void;
  showBackButton?: boolean;
}

export default function Space({ option, onChooseOption, onBack, onReset, showBackButton }: ISpaceProps) {
  const { options, message } = option;

  return (
    <Container>
      {showBackButton && <button onClick={onBack}>Back</button>}
      {message && <Heading>{message}</Heading>}
      {(options && options.length)
        ? options.map((option: any, index: number) => (
          <Choice
            key={option.prompt + index}
            onClick={() => onChooseOption(index)}
          >
            {option.prompt}
          </Choice>
        ))
        : <button onClick={onReset}>Start again</button>}
    </Container>
  );
}
