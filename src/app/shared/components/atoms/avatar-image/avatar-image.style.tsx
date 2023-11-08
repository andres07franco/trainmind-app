import { View } from 'react-native';
import styled from 'styled-components';

export const ImageContainer = styled(View)`
`;

type Props = {
  size: number;
};
export const ImageContent = styled(View)<Props>`
  background-color: ${({ theme }) => theme.primary10};
  width: ${({ size }) => size * 0.93}px;
  height: ${({ size }) => size * 0.93}px;
  max-width: ${({ size }) => size * 0.93}px;
  max-height: ${({ size }) => size * 0.93}px;
  border-radius: ${({ size }) => size * 0.93}px;
  overflow: hidden;
  align-items: center;
  shadow-opacity: 0.37;
  shadow-radius: 7px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  elevation: 12;
`;
