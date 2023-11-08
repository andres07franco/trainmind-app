import React from 'react';
import { Container, Header, Body, IconContainer } from './basic-layout.style';
import { Typography } from '../../atoms';
import { NavBar } from '../../molecules';

interface Props {
  title: string;
  subtitle?: string;
  icon?: JSX.Element;
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
  options?: { showNavBar: boolean };
}
const BasicLayout: React.FC<Props> = ({
  icon,
  title,
  subtitle,
  children,
  options,
}) => {
  return (
    <Container>
      {!!options?.showNavBar && (
        <NavBar
          onPressDots={() => {
            throw new Error('Function not implemented.');
          }}
        />
      )}
      <Header align={subtitle ? 'left' : 'center'}>
        <IconContainer>{icon}</IconContainer>
        <Typography type="Title" color="neutral100">
          {title}
        </Typography>
        <Typography type="Caption" color="neutral100">
          {subtitle}
        </Typography>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

BasicLayout.defaultProps = {
  subtitle: undefined,
  icon: undefined,
  options: { showNavBar: true },
};

export { BasicLayout };
