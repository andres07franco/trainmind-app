import { PixelRatio, View } from 'react-native';
import styled from 'styled-components/native';
import { Typography, Input } from '../../atoms';

export const Label = styled(Typography)`
  text-align: left;
  font-weight: 600;
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(20)}px;
`;

export interface InputProps {
  hasError: boolean;
}
export const InputStyled = styled(Input)<InputProps>`
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.error : theme.primary40};
  border-radius: ${PixelRatio.roundToNearestPixel(20)}px;
  padding: ${PixelRatio.roundToNearestPixel(8)}px;
  padding-left: ${PixelRatio.roundToNearestPixel(15)}px;
  padding-right: ${PixelRatio.roundToNearestPixel(15)}px;
  width: 100%;
`;

export const ErrorText = styled(Typography)`
  padding-top: ${PixelRatio.roundToNearestPixel(10)}px;
`;

export const Container = styled(View)`
  margin: ${PixelRatio.roundToNearestPixel(5)}px;
`;
