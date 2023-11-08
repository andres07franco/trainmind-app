import { Typography } from '../../atoms';
import { PixelRatio, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: column;
  height: 140px;
  width: 140px;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
