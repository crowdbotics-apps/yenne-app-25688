import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import AppLogo from './AppLogo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from './BackButton';

const AppHeader = ({ showBackButton }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.overlay}>
      {showBackButton && <BackButton />}
      <AppLogo />
    </View>
  );
};
const themedStyles = StyleService.create({
  overlay: {
    backgroundColor: 'header-background-color',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: hp('5.278688524590164%'),
    paddingTop: hp('7.278688524590164%'),
    height: hp('40%'),
  },
});

export default AppHeader;
