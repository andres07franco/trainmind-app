import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../atoms';

import {
  Container,
  StyledScrollView,
} from './navigation-layout.component.style';

interface Props {
  children: JSX.Element | (boolean | JSX.Element)[] | boolean;
}
const NavigationLayout: React.FC<Props> = ({ children }) => {
  const navigation = useNavigation();
  return (
    <StyledScrollView>
      <Container>
        <BackButton onPress={() => navigation.goBack()} />
        {children}
      </Container>
    </StyledScrollView>
  );
};

export { NavigationLayout };
