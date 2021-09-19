import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../routes';
import TermsAndConditionsScreen from '../../features/TermsAndConditions/TermsAndConditionsScreen';
import Account from '../../features/auth/Account';
import SendMoney from '../../features/home/SendMoney';
import ReceiveMoney from '../../features/home/ReceiveMoney';
import FinancialAccount from '../../features/Financial/containers/FinancialAccountContainer';
import AddNewCard from '../../features/Financial/containers/AddNewCardContainers';
import HomeScreen from '../../features/home';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
  const selector = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {selector.termsAgreed ? (
        <Stack.Screen
          name={routes.termsAndConditions}
          component={TermsAndConditionsScreen}
        />
      ) : null}
      <Stack.Screen name={routes.home} component={HomeScreen} />
      <Stack.Screen name={routes.account} component={Account} />
      <Stack.Screen name={routes.sendMoney} component={SendMoney} />
      <Stack.Screen name={routes.receiveMoney} component={ReceiveMoney} />
      <Stack.Screen name={routes.addNewCard} component={AddNewCard} />
      <Stack.Screen
        name={routes.financialAccount}
        component={FinancialAccount}
      />
    </Stack.Navigator>
  );
}
