import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import AppLogo from '../../components/AppLogo';
import { isLoggedIn } from '../../utils/helpers';

const SplashScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const nextScreen = async () => {
    const { hasToken, verified } = await isLoggedIn();

    if (!hasToken) {
      return navigation.navigate('AuthOptionScreen');
    }
    if (!verified) {
      return navigation.navigate('VerifyCodeScreen');
    }
    return navigation.navigate('Main');
  };
  useEffect(() => {
    setTimeout(() => {
      nextScreen();
    }, 300);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />
      <AppLogo />
    </SafeAreaView>
  );
};

export default SplashScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'header-background-color',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
