import React from 'react';
import { TouchableOpacityStyled } from './more-button.style';
import { Icon } from '..';

interface Props {
  onPress: () => void;
}
export const MoreButton: React.FC<Props> = ({ onPress }) => {
  const handlePress = () => onPress();
  return (
    <TouchableOpacityStyled onPress={handlePress}>
      <Icon code='vertical-dots' />
    </TouchableOpacityStyled>
  );
};

export default MoreButton;
