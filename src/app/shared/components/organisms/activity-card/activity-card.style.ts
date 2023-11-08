import { Card, Typography } from '../../atoms';
import { PixelRatio, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  margin-right: ${PixelRatio.roundToNearestPixel(24)}px;
`;

export const Container = styled(TouchableOpacity)`
  flex-direction: column;
  height: 350px;
  width: 250px;
  justify-content: space-between;
  padding: 15px;
`;

export const IconContainer = styled(View)`
  margin-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Title = styled(Typography)`
  margin-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Description = styled(Typography)`
  margin-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Content = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
`;
