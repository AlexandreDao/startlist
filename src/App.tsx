import React from 'react';
import {SafeAreaView, Linking, Platform, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import MyBottomTabs from 'Route';

type Props = Record<string, never>;
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App: React.FC<Props> = () => {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#2B4DE0" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>
        <MyBottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
