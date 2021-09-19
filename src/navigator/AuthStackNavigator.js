import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthOptionScreen from 'features/auth/AuthOption';
import EmailLoginScreen from 'features/auth/EmailLogin';
import EmailSignUpScreen from 'features/auth/EmailSignUp';
import ForgotPassword from '../features/auth/ForgotPassword';
import VerifyCode from '../features/auth/VerifyCode';
import routes from '../navigator/routes';
import CreateUsername from '../features/auth/CreateUsername';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const selector = useSelector(state => state.auth);
  return (
    <Stack.Navigator headerMode="none">
      {selector.loggedIn && selector?.user?.verified !== 'true' ? (
        <Stack.Screen name={routes.verifyCode} component={VerifyCode} />
      ) : null}
      <Stack.Screen name={routes.authOption} component={AuthOptionScreen} />
      <Stack.Screen name={routes.emailLogin} component={EmailLoginScreen} />
      <Stack.Screen name={routes.emailSignup} component={EmailSignUpScreen} />
      <Stack.Screen name={routes.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={routes.createUsername} component={CreateUsername} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
