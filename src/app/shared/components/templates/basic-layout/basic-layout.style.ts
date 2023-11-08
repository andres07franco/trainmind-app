import { Platform, View } from 'react-native';
import styled from 'styled-components/native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 15 : 0;

const Constants = {
  statusBarHeight: STATUSBAR_HEIGHT,
};

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.primary40};
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: ${Constants.statusBarHeight}px;
`;

export type HeaderProps = {
  align?: string;
};

export const Header = styled.View<HeaderProps>`
  width: 100%;
  height: 210px;
  align-items: ${({ align }) => align};
  justify-content: center;
  padding-horizontal: 25px;
  padding-bottom: 25px;
`;

export const IconContainer = styled.View`
  padding-top: 0px;
  padding-bottom: 10px;
`;

export const Body = styled(View)`
  background-color: ${({ theme }) => theme.secondary10};
  width: 100%;
  flex-grow: 1;
  border-radius: 40px 40px 0 0;
  padding-horizontal: 15px;
  padding-top: 40px;
`;
