import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

type Props = Record<string, never>;

const CreationScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default CreationScreen;
