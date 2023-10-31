import {
  PixelRatio,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';
import { Typography } from '../../atoms';

interface ContainerProps extends TouchableOpacityProps {
  buttonType: 'primary' | 'secondary' | 'link';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  margin: ${PixelRatio.roundToNearestPixel(5)}px;
  padding-horizontal: ${PixelRatio.roundToNearestPixel(6)}px;
  padding-vertical: ${PixelRatio.roundToNearestPixel(6)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ buttonType, theme }) => {
    switch (buttonType) {
      case 'primary':
        return theme.primary10;
      case 'secondary':
        return theme.secondary10;
      default:
        return theme.primary10;
    }
  }};
  border-radius: ${PixelRatio.roundToNearestPixel(25)}px;
  shadow-opacity: 0.37;
  shadow-radius: 7px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  elevation: 12;
`;

export const Text = styled(Typography)`
  font-weight: 600;
`;
