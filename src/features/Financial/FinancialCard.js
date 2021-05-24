import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VisaIcon from '../../assets/images/VisaIcon';
import RadioButton from '../../components/Form/RadioButton';
import YNHeaderTitle from '../../components/HeaderTitle';

const FinancialCard = () => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <View
      style={[
        styles.row,
        styles.flexOne,
        styles.justifyContent,
        styles.cardWrapper,
      ]}
    >
      <View style={[styles.row]}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <RadioButton selected />
        </View>

        <View style={styles.cardContent}>
          <View style={[styles.row, styles.cardIcon]}>
            <Text style={{ color: theme['color-basic-600'] }}>
              MY CARD 1{'  '}
            </Text>
            <VisaIcon />
          </View>
          <YNHeaderTitle
            category="h7"
            title="**** **** **** *234"
            style={{
              color: theme['color-primary-black'],
              fontSize: 18,
              fontWeight: '500',
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={[styles.row]}>
        <YNHeaderTitle
          category="h10"
          title="Delete"
          style={{ color: theme['color-primary-100'] }}
        />
      </TouchableOpacity>
    </View>
  );
};

const themedStyles = StyleService.create({
  cardHeader: { paddingTop: hp('2%') },
  cardContent: { marginLeft: 10 },
  cardIcon: {
    alignItems: 'center',
  },
  cardWrapper: { marginTop: hp('6%') },
  viewMoreWrapper: { marginTop: hp('3%') },
  alignItemsCenter: { alignItems: 'center' },
  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
  justifyContent: { justifyContent: 'space-between' },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  mainWrapper: {
    marginTop: hp('5%'),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: wp('4.5%'),
    paddingVertical: wp('2%'),
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowColor: 'black',
  },
  buttonsWrapper: {
    marginTop: hp('1%'),
    justifyContent: 'center',
  },
});

export default FinancialCard;
