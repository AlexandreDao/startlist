import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress: () => void;
  color?: string;
  size?: number;
}

const HeaderCloseButton: React.FC<Props> = ({onPress, color, size}) => {
  return (
    <Icon.Button
      name="close"
      color={color || 'black'}
      size={size || 24}
      onPress={onPress}
    />
  );
};

export default HeaderCloseButton;
