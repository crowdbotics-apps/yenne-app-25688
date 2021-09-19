import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../routes';
import FinancialAccount from '../../features/Financial/containers/FinancialAccountContainer';
const Stack = createStackNavigator();

export default function CardsNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.account} component={FinancialAccount} />
    </Stack.Navigator>
  );
}
