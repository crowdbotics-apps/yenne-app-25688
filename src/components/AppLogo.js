import React from 'react';
import { View } from 'react-native';

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import Logo from 'images/Logo';
import { Text } from '@ui-kitten/components';

const AppLogo = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.logo}>
      <Logo />
      <Text style={styles.textContent} category="h1">
        Yenne
      </Text>
    </View>
  );
};

export default AppLogo;

const themedStyles = StyleService.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContent: {
    color: 'text-white-color',
    marginTop: 10,
    marginBottom: 10,
    overflow: 'visible',
  },
});
