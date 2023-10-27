import React from 'react';
import { Headline } from '../../molecules';
import { Container } from './basic-layout.style';

interface Props {
  title: string;
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
}
const BasicLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Headline text={title} />
      {children}
    </Container>
  );
};

export { BasicLayout };
