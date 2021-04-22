import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import AuthStackNavigator from './AuthStackNavigator';
// import TabNavigator from './TabNavigator';
import { getLoggedUser } from 'features/auth/redux/actions';
import TermsAndConditions from '../features/TermsAndConditions/TermsAndConditionsScreen';
import HomeScreen from '../features/home';
import routes from './routes';
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
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
