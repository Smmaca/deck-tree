import { Wrapper } from './styles';

interface IHeaderProps {
  title: string;
}

export default function Header({ title }: IHeaderProps) {
  return (
    <Wrapper>
      {title}
    </Wrapper>
  );
}
