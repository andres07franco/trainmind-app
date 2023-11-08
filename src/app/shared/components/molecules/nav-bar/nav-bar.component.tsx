import React from 'react';

import { BackButton, MoreButton, Typography } from '../../atoms';
import { Container } from './nav-bar.style';
import { useNavigation } from '@react-navigation/native';

interface Props {
  onPressDots: () => void;
}
const NavBar: React.FC<Props> = ({ onPressDots }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <MoreButton onPress={onPressDots} />
    </Container>
  );
};

export { NavBar };
