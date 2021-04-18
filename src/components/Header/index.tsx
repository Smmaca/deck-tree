import { ReactChild } from 'react';
import { Wrapper, Toolbar } from './styles';

interface IHeaderProps {
  title: string;
  children?: ReactChild | ReactChild[];
}

export default function Header({ title, children }: IHeaderProps) {
  return (
    <Wrapper>
      {title}
      <Toolbar>
        {children}
      </Toolbar>
    </Wrapper>
  );
}
