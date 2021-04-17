import { Wrapper } from './styles';

interface IChoiceProps {
  onClick: () => void;
  children: string;
}

export default function Choice({ onClick, children }: IChoiceProps) {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  );
}
