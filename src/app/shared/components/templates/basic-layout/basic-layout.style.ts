import { View } from 'react-native';
import styled from 'styled-components';
const Constants = {
  statusBarHeight: 0,
};

export const Container = styled(View)`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  background-color: ${({ theme }) => theme.primary40};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled(View)`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
`;

export const Body = styled(View)`
  background-color: ${({ theme }) => theme.secondary10};
  width: 100%;
  flex-grow: 1;
  border-radius: 40px 40px 0 0;
  padding-horizontal: 15px;
  padding-top: 40px;
`;

export const ImageContainer = styled(View)`
  width:  100%;
  align-items: center;
  justify-content: center;
`;


export const ImageContent = styled(View)`
  background-color: ${({ theme }) => theme.primary10};
  width:  150px;
  height:  150px;
  max-width:  150px;
  max-height:  150px;
  overflow:hidden;
  border-radius: 150px;
  align-items: center;
  margin-top: -100px;
  shadow-opacity: 0.37;
  shadow-radius: 7px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  elevation: 12;
`;
