import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import AuthStackNavigator from './AuthStackNavigator';
// import TabNavigator from './TabNavigator';
import { getLoggedUser } from 'features/auth/redux/actions';
import TermsAndConditions from '../features/TermsAndConditions/TermsAndConditionsScreen';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);
  // console.warn(selector);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      {/* {!selector.loggedIn ? ( */}
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      {/* ) : ( */}
      <Stack.Screen name="Main" component={TermsAndConditions} />
      {/* )} */}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
