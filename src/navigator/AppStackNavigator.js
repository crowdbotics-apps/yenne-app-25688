import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import AuthStackNavigator from './AuthStackNavigator';
// import TabNavigator from './TabNavigator';
import { getLoggedUser } from 'features/auth/redux/actions';
import TermsAndConditions from '../features/TermsAndConditions/TermsAndConditionsScreen';
import HomeScreen from '../features/home';
import routes from './routes';
import Account from '../features/auth/Account';
import SendMoney from '../features/home/SendMoney';
import ReceiveMoney from '../features/home/ReceiveMoney';
import FinancialAccount from '../features/Financial/FinancialAccount';
import AddNewCard from '../features/Financial/AddNewCard';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.auth} component={AuthStackNavigator} />
      <Stack.Screen
        name={routes.termsAndConditions}
        component={TermsAndConditions}
      />
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
};

export default AppStackNavigator;
