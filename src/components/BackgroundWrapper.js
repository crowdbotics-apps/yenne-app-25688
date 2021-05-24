import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackButton from './BackButton';
import BgLogo from '../assets/images/bg.png';
import { ScrollView } from 'react-native';

const BackgroundWrapper = ({ showBackButton, children, style }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.overlay, style]}>
      <View style={{ alignItems: 'center' }}>
        <ImageBackground source={BgLogo} style={styles.ImageBackground_1_7} />
      </View>

      {showBackButton && <BackButton />}
      <ScrollView style={{ flex: 7, height: '100%' }}>{children}</ScrollView>
    </View>
  );
};
const themedStyles = StyleService.create({
  overlay: {
    paddingTop: hp('7.278688524590164%'),
    height: hp('100%'),
    overflow: 'visible',
    flex: 1,
  },
  ImageBackground_1_7: {
    alignItems: 'center',
    width: wp('130%'),
    minWidth: wp('120.33333333333334%'),
    height: hp('100%'),
    minHeight: hp('100%'),
    marginLeft: 0,
    position: 'absolute',
    top: hp('-60.00546448087431%'),
  },
});

export default BackgroundWrapper;
