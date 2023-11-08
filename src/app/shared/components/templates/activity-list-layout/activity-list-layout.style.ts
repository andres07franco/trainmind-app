import { Dimensions, Platform, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 15 : 0;

const Constants = {
  statusBarHeight: STATUSBAR_HEIGHT,
};

export const Container = styled(ScrollView)`
  background-color: ${({ theme }) => theme.secondary10};
`;

export const Header = styled.View`
padding-top: ${Constants.statusBarHeight}px;
  background-color: ${({ theme }) => theme.primary40};
  width: 100%;
  height: 300px;
  align-items: left;
  justify-content: flex-start;
  padding-bottom: 50px;
  border: 1px solid red;
`;

export const HeaderContent = styled.View`
  padding-horizontal: 25px;
`;

export const AvatarContainer = styled(View)`
  margin-top: -90px;
  padding-horizontal: 30px;
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Body = styled(View)`
  background-color: ${({ theme }) => theme.secondary10};
  margin-top: -70px;
  border-radius: 40px 40px 0 0;
  padding-horizontal: 15px;
  padding-top: 40px;
`;
