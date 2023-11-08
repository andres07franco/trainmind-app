import { Card, Typography } from '../../atoms';
import { PixelRatio, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const IconContainer = styled(View)`
  width: 45px;
  height: 45px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.secondary10};
  shadow-opacity: 0.37;
  shadow-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  elevation: 12;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  padding-horizontal: 10px;
  width: 85%;
`;

export const Title = styled(Typography)``;

export const Description = styled(Typography)`
  margin-top: -3px;
`;

export const Progress = styled(View)`
  height: 5px;
  background-color: ${({ theme }) => theme.quaternary10};
`;
