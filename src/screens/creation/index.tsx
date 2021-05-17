import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StickyBottom} from '@components';

type Props = Record<string, never>;

const CreationScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}></ScrollView>
      <StickyBottom />
    </SafeAreaView>
  );
};

export default CreationScreen;
