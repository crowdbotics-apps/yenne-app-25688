import React from 'react';
import { View } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

const YNCard = ({ children }) => {
  const styles = useStyleSheet(themedStyles);

  return <View style={styles.mainWrapper}>{children}</View>;
};

const themedStyles = StyleService.create({
  mainWrapper: {
    marginTop: hp('5%'),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: wp('4.5%'),
    paddingVertical: wp('2%'),
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    shadowColor: 'black',
  },
});

export default YNCard;
