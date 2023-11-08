import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const TouchableOpacityStyled = styled(TouchableOpacity)`
  width: 80px;
  height: 80px;
  flex-drection: column;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary10};
  width: 45px;
  height: 45px;
  border-radius: 32px;
  shadow-opacity: 0.37;
  shadow-radius: 7px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  elevation: 12;
  justify-content: center;
  align-items: center;
`;
