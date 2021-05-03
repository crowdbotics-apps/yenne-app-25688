import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import AppLogo from '../../components/AppLogo';
import { isLoggedIn } from '../../utils/helpers';
import routes from '../../navigator/routes';

const SplashScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const nextScreen = async () => {
    const { hasToken, verified, termsAgreed } = await isLoggedIn();

    if (!hasToken) {
      return navigation.navigate(routes.authOption);
    }

    if (!verified) {
      return navigation.navigate(routes.verifyCode);
    } else if (!termsAgreed) {
      return navigation.navigate(routes.termsAndConditions);
    }

    return navigation.navigate(routes.home);
  };
  useEffect(() => {
    setTimeout(() => {
      nextScreen();
    }, 3000);
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
