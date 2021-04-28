import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {FloatingButton} from '@components';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {RouteStackParamList} from '@types';

type HomeScreenNavigationProp = StackNavigationProp<
  RouteStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}></ScrollView>
      <FloatingButton onPress={() => navigation.push('Creation')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
