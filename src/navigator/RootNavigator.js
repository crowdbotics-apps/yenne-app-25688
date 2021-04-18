import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { navigationRef } from './service';
import AppStackNavigator from './AppStackNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffff',
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
