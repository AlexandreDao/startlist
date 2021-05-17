import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {CreationScreen} from '@screens';
import {RouteStackParamList} from '@types';
import {HeaderCloseButton} from '@components';
import BottomTabs from './BottomTab';

type Props = Record<string, never>;

const Stack = createStackNavigator<RouteStackParamList>();

const MyBottomTabs: React.FC<Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={BottomTabs}
      />
      <Stack.Screen
        name="Creation"
        options={({navigation}): StackNavigationOptions => ({
          title: 'Create',
          headerTitleAlign: 'center',
          headerLeft: () => <></>,
          headerRight: () => <HeaderCloseButton onPress={navigation.goBack} />,
        })}
        component={CreationScreen}
      />
    </Stack.Navigator>
  );
};

export default MyBottomTabs;
