import React from 'react';
import { Headline } from '../../molecules';
import {
  Container,
  Header,
  Body,
  ImageContent,
  ImageContainer,
} from './basic-layout.style';
import { Image } from 'react-native';
import { Typography } from '../../atoms';

interface Props {
  title: string;
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
}
const BasicLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <Typography type="Title" color="neutral100">
          {title}
        </Typography>
      </Header>
      <Body>
        <ImageContainer>
          <ImageContent>
            <Image
              source={require('../../../../../../assets/images/wamba.png')}
              style={{ width: 160, height: 160 }}
            />
          </ImageContent>
        </ImageContainer>

        {children}
      </Body>
    </Container>
  );
};

export { BasicLayout };
