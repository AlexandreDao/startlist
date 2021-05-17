import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TouchableOpacityProps {
  iconName?: string;
  size?: number;
  color?: string;
  label?: string;
  labelProps?: TextProps;
}

const DEFAULT_ICON_SIZE = 35;
const DEFAULT_COLOR = '#3574FC';
const DEFAULT_ICON_COLOR = '#EBF0FF';
const DEFAULT_WIDTH = 150;
const DEFAULT_HEIGHT = 45;
const DEFAULT_BORDER_RADIUS = 7;
const DEFAULT_LABEL_COLOR = '#EBF0FF';

const Button: React.FC<Props> = props => {
  const {size, color, iconName, label, children, labelProps} = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: DEFAULT_COLOR,
        borderRadius: DEFAULT_BORDER_RADIUS,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      {...props}>
      {iconName === undefined ? null : (
        <Icon
          name={iconName}
          size={size || DEFAULT_ICON_SIZE}
          color={color || DEFAULT_ICON_COLOR}
        />
      )}
      <Text style={{color: DEFAULT_LABEL_COLOR}} {...labelProps}>
        {label || children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
