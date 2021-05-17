import React from 'react';
import {TouchableOpacity, View, ViewProps, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends ViewProps {}

const StickyBottom: React.FC<Props> = props => {
  const {style: overwriteStyle} = props;
  return (
    <View
      {...props}
      style={[
        {
          height: 25,
          backgroundColor: 'red',
        },
        overwriteStyle,
        {
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        },
      ]}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', width: '51%'}}>
        <Icon name="plus" size={24} color={'black'} />
        <Text>New clock</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '49%',
          justifyContent: 'flex-end',
        }}>
        <Icon name="content-save-outline" size={24} color={'black'} />
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StickyBottom;
