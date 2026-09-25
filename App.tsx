import React from 'react';
import { StatusBar } from 'react-native';

import { RootNavigator } from '@app/navigation';

import '@app/styles/global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
