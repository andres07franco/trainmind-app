import { Typography } from '@shared/components';
import { View } from 'react-native';
import styled from 'styled-components';

export const AvatarContainer = styled(View)`
  margin-top: -100px;
`;

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-start;
  align-items: center;
  padding-bottom: 30px;
`;

export const CarouselContainer = styled(View)`
  flex-direction: column;
  justify-content: felx-start;
  align-items: center;
  padding-bottom: 30px;
`;

export const Title = styled(Typography)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

Title.defaultProps = {
  type: 'Subtitle2',
  color: 'neutral90',
};
