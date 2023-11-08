import React from 'react';
import StarIcon from '@assets/icons/star.svg';
import StartOutlineIcon from '@assets/icons/star-outline.svg';
import StartBigIcon from '@assets/icons/star-big.svg';
import StartOutlineBigIcon from '@assets/icons/star-outline-big.svg';
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
interface Props {
  testID?: string;
  filled: boolean;
  size?: 'small' | 'medium' | 'big';
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export const StarRate: React.FC<Props> = ({
  testID,
  filled,
  size,
  onPress,
}) => {
  const styleFilled = { marginTop: 5, marginLeft: 5 };
  const styleOutline = { marginTop: 3, marginLeft: 5 };
  const containerStyle = { width: 20 };

  let Icon = StarIcon;
  let IconOutline = StartOutlineIcon;

  if (size === 'big') {
    Icon = StartBigIcon;
    IconOutline = StartOutlineBigIcon;
    containerStyle.width = 40;
  }

  return (
    <TouchableWithoutFeedback testID={testID} onPress={onPress}>
      <View style={containerStyle}>
        {filled ? (
          <Icon style={styleFilled} />
        ) : (
          <IconOutline style={styleOutline} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

StarRate.defaultProps = {
  testID: 'star-rate',
  size: 'small',
  onPress: undefined,
};

export default StarRate;
