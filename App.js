import React from 'react';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider as ReduxProvider } from 'react-redux';
import RootNavigator from './src/navigator/RootNavigator';
import { store } from './src/store';
import { crowdboticsTheme } from './src/config/crowdboticsTheme';
import { default as customMapping } from './src/config/mapping.json';
import { useOneSignal } from './src/hooks/useOnesignal';

export default function App() {
  
  return (
    <ReduxProvider store={store}>
      <ApplicationProvider
        mapping={mapping}
        customMapping={customMapping}
        theme={crowdboticsTheme}
      >
        <RootNavigator />
      </ApplicationProvider>
    </ReduxProvider>
  );
}
