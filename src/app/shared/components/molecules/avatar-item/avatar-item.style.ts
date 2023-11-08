import { Card, Typography } from '../../atoms';
import { PixelRatio, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  padding: 4px;
`;

export const IconContainer = styled(View)``;

export const TextContainer = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const Title = styled(Typography)``;

export const Description = styled(Typography)`
  margin-top: -3px;
`;
