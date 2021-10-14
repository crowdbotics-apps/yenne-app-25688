import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AuthStackNavigator from './AuthStackNavigator';
import { getLoggedUser } from 'features/auth/redux/actions';
import routes from './routes';
import AppTabNavigator from './AppTabNavigator/index';
import PlaidConnect from '../features/Accounts/screens/PlaidConnect';
import BankAccounts from '../features/Accounts/screens/BankAccounts';
import { isLoggedIn } from '../utils/helpers';
import Notification from '../features/Notification';
import TermsAndConditionsScreen from '../features/TermsAndConditions/TermsAndConditionsScreen';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);
  // isLoggedIn() // logout user
  useEffect(() => {
    SplashScreen.hide();
    dispatch(getLoggedUser());
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      {!selector.loggedIn || selector?.user?.verified !== 'true' ? (
        <>
          <Stack.Screen name={routes.auth} component={AuthStackNavigator} />
          <Stack.Screen name={routes.home} component={AppTabNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name={routes.home} component={AppTabNavigator} />
        </>
      )}

      <Stack.Screen name={routes.BankAccounts} component={BankAccounts} />
      <Stack.Screen name={routes.plaidConnect} component={PlaidConnect} />
      <Stack.Screen name={routes.notification} component={Notification} />
      <Stack.Screen
        name={routes.termsAndConditions}
        component={TermsAndConditionsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
