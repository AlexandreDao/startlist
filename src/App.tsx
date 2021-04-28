import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyBottomTabs from 'Route';

type Props = Record<string, never>;

const App: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MyBottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
