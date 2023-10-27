import { View } from 'react-native';
import styled from 'styled-components';
const Constants = {
  statusBarHeight: 10
}

export const Container = styled(View)`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  background-color: ${({ theme }) => theme.primary10};
  align-items: flex-start;
  justify-content: flex-start;
`;
