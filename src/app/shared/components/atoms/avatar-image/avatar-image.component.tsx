import { Image } from 'react-native';
import React from 'react';
import { ImageContainer, ImageContent } from './avatar-image.style';

export enum AvatarSizes {
  small = 64,
  medium = 100,
  large = 140,
}

interface Props {
  name: string;
  size: AvatarSizes;
}
export const AvatarImage: React.FC<Props> = ({ name, size }) => {
  let icon = require('../../../../../../assets/avatars/wamba.png');
  switch (name) {
    case 'sakura':
      icon = require('../../../../../../assets/avatars/sakura.png');
      break;
    case 'gero':
      icon = require('../../../../../../assets/avatars/gero.png');
      break;
    default:
      icon = require('../../../../../../assets/avatars/wamba.png');
  }
  return (
    <ImageContainer>
      <ImageContent {...{ size }}>
        <Image
          source={icon}
          style={{ width: size, height: size }}
        />
      </ImageContent>
    </ImageContainer>
  );
};

export default AvatarImage;
