import React from 'react';
import { TouchableOpacityStyled } from './back-button.style';
import { Icon } from '..';

interface Props {
  onPress: () => void;
}
export const BackButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacityStyled onPress={handlePress}>
      <Icon code="back" />
    </TouchableOpacityStyled>
  );
};

export default BackButton;
