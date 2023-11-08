import React from 'react';
import { Container, TouchableOpacityStyled } from './resource-button.style';
import { Typography, Icon } from '../../atoms';

interface Props {
  icon: string;
  title: string;
  onPress?: () => void;
}
export const ResourceButton: React.FC<Props> = ({ icon, title, onPress }) => {
  const handlePress = () => onPress?.();
  return (
    <TouchableOpacityStyled onPress={handlePress}>
      <Container>
        <Icon code={icon} />
      </Container>
      <Typography type="Caption" color="primary10">
        {title}
      </Typography>
    </TouchableOpacityStyled>
  );
};

export default ResourceButton;
