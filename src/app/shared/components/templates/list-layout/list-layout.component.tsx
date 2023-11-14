import React from 'react';
import {
  Container,
  Header,
  Body,
  AvatarContainer,
  HeaderContent,
} from './list-layout.style';
import { AvatarImage, AvatarSizes, Icon, Typography } from '../../atoms';
import { NavBar } from '../../molecules';

interface Props {
  title: string;
  subtitle?: string;
  icon: string;
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
}
const ListLayout: React.FC<Props> = ({ icon, title, subtitle, children }) => {
  return (
    <Container>
      <Header>
        <NavBar
          onPressDots={() => {
            throw new Error('Function not implemented.');
          }}
        />
        <HeaderContent>
          <Icon code={icon} />
          <Typography type="Title" color="neutral100">
            {title}
          </Typography>
          <Typography type="Caption" color="neutral100">
            {subtitle}
          </Typography>
        </HeaderContent>
      </Header>
      <Body>
        <AvatarContainer>
          <AvatarImage name="sakura" size={AvatarSizes.medium} />
        </AvatarContainer>
        {children}
      </Body>
    </Container>
  );
};

ListLayout.defaultProps = {
  subtitle: undefined,
  icon: undefined,
};

export { ListLayout };
