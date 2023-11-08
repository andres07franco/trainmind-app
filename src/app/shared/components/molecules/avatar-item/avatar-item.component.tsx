import React from 'react';
import {
  Container,
  Description,
  IconContainer,
  TextContainer,
  Title,
} from './avatar-item.style';
import { AvatarImage, AvatarSizes } from '../../atoms';

interface Props {
  title: string;
  name: string;
  iconName: string;
  onPress?: () => void;
}

export const AvatarItem: React.FC<Props> = ({
  title,
  name,
  iconName,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <AvatarImage name={iconName} size={AvatarSizes.small} />
      </IconContainer>
      <TextContainer>
        <Title type="Caption" color="primary40">
          {title}
        </Title>
        <Description type="Caption" color="quaternary40">
          {name}
        </Description>
      </TextContainer>
    </Container>
  );
};

export default AvatarItem;
