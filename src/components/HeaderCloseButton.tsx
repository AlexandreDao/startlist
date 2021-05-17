import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TouchableOpacityProps {
  color?: string;
  size?: number;
}

const HeaderCloseButton: React.FC<Props> = props => {
  const {color, size} = props;

  return (
    <TouchableOpacity
      style={{
        padding: 15,
      }}
      {...props}>
      <Icon name="close" color={color || 'black'} size={size || 24} />
    </TouchableOpacity>
  );
};

export default HeaderCloseButton;
