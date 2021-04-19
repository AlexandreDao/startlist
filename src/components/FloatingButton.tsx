import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Position = number | string;

interface Props {
  circleSize?: number;
  plusSize?: number;
  backgroundColor?: string;
  plusColor?: string;
  bottom?: Position;
  right?: Position;
  disableShadow?: boolean;
  onPress: () => void;
}

const DEFAULT_CIRCLE_SIZE = 50;
const DEFAULT_ICON_SIZE = 40;
const DEFAULT_COLOR = 'blue';
const DEFAULT_ICON_COLOR = 'white';

const FloatingButton: React.FC<Props> = ({
  circleSize,
  plusSize,
  backgroundColor,
  plusColor,
  bottom,
  right,
  disableShadow,
  onPress,
}) => {
  const size = circleSize || DEFAULT_CIRCLE_SIZE;
  const iconSize = plusSize || DEFAULT_ICON_SIZE;

  return (
    <TouchableOpacity
      style={{
        borderRadius: size / 2,
        position: 'absolute',
        bottom: bottom || 80,
        right: right || 25,
        backgroundColor: backgroundColor || DEFAULT_COLOR,
        width: size,
        height: size,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: disableShadow === false ? 0 : 8,
      }}
      onPress={onPress}>
      <Icon
        name="plus"
        size={iconSize}
        color={plusColor || DEFAULT_ICON_COLOR}
      />
    </TouchableOpacity>
  );
};

export default FloatingButton;
