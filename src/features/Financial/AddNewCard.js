import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import YNButton from '../../components/YNButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import routes from '../../navigator/routes';
import YTTab from '../../components/YTTab';
import CardForm from './CardForm';
import CloseIcon from '../../assets/images/CloseIcon';

const AddNewCard = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <BackgroundWrapper showBackButton>
      <View style={styles.container}>
        <YNHeaderTitle category="h3" title="Financial account" />

        <View style={styles.mainWrapper}>
          <View
            style={[
              styles.row,
              styles.flexOne,
              styles.justifyContent,
              styles.cardHeader,
            ]}
          >
            <YNHeaderTitle
              category="h6"
              title="Add new card"
              style={{ color: theme['color-primary-black'] }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.financialAccount)}
              style={[styles.row]}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <CardForm />
        </View>
      </View>
    </BackgroundWrapper>
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
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    shadowColor: 'black',
  },
  buttonsWrapper: {
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default AddNewCard;
