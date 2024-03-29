/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Reanimated 2',
]);

function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}

export default App;
