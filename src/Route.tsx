import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ManageScreen, SettingsScreen} from '@screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

const BottomTab = createBottomTabNavigator();

const MyBottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="playlist-play"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="playlist-edit"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MyBottomTabs;
