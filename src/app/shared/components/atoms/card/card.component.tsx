import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Card = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.neutral100};
  border-radius: ${PixelRatio.roundToNearestPixel(10)}px;
  margin: ${PixelRatio.roundToNearestPixel(5)}px;
  padding: ${PixelRatio.roundToNearestPixel(10)}px;
  shadow-opacity: 0.37;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  elevation: 3;
`;
