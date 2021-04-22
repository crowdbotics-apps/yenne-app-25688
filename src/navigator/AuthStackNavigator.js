import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'features/splash/SplashScreen';
import AuthOptionScreen from 'features/auth/AuthOption';
import EmailLoginScreen from 'features/auth/EmailLogin';
import EmailSignUpScreen from 'features/auth/EmailSignUp';
import ForgotPassword from '../features/auth/ForgotPassword';
import VerifyCode from '../features/auth/VerifyCode';
import routes from '../navigator/routes';
import CreateUsername from '../features/auth/CreateUsername';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.splash} component={SplashScreen} />
      <Stack.Screen name={routes.authOption} component={AuthOptionScreen} />
      <Stack.Screen name={routes.emailLogin} component={EmailLoginScreen} />
      <Stack.Screen name={routes.emailSignup} component={EmailSignUpScreen} />
      <Stack.Screen name={routes.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={routes.verifyCode} component={VerifyCode} />
      <Stack.Screen name={routes.createUsername} component={CreateUsername} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
