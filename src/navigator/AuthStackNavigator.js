import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'features/splash/SplashScreen';
import AuthOptionScreen from 'features/auth/AuthOption';
import EmailLoginScreen from 'features/auth/EmailLogin';
import EmailSignUpScreen from 'features/auth/EmailSignUp';
import ForgotPassword from '../features/auth/ForgotPassword';
import VerifyCode from '../features/auth/VerifyCode';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthOptionScreen" component={AuthOptionScreen} />
      <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <Stack.Screen name="EmailSignUpScreen" component={EmailSignUpScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
      <Stack.Screen name="VerifyCodeScreen" component={VerifyCode} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
