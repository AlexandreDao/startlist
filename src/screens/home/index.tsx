import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {FloatingButton} from '@components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}></ScrollView>
      <FloatingButton onPress={() => 0} />
    </SafeAreaView>
  );
};

export default HomeScreen;
