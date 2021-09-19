import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../routes';
import Account from '../../features/auth/Account';
const Stack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.account} component={Account} />
    </Stack.Navigator>
  );
}
