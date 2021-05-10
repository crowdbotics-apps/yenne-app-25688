import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppLogo from './AppLogo';
import BackButton from './BackButton';
import BgLogo from '../assets/images/bg.png';

const AppHeader = ({ showBackButton }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.overlay}>
      <ImageBackground source={BgLogo} style={styles.ImageBackground_1_7} />
      {showBackButton && <BackButton />}
      <AppLogo />
    </View>
  );
};
const themedStyles = StyleService.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: hp('10.278688524590164%'),
    paddingTop: hp('7.278688524590164%'),
    height: hp('30%'),
    overflow: 'visible',
  },
  ImageBackground_1_7: {
    width: wp('130%'),
    minWidth: wp('120.33333333333334%'),
    height: hp('100%'),
    minHeight: hp('100%'),
    marginLeft: 0,
    position: 'absolute',
    top: hp('-60.00546448087431%'),
  },
});

export default AppHeader;
