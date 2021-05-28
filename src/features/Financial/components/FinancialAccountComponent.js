import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../../components/BackgroundWrapper';
import YNHeaderTitle from '../../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import routes from '../../../navigator/routes';
import ArrowDownIcon from '../../../assets/images/ArrowDownIcon';
import FinancialCard from './FinancialCard';
import YTTab from '../../../components/YTTab';
import YNButton from '../../../components/YNButton';
import { mapping } from '@eva-design/eva';

const FinancialAccountComponent = ({ navigation, cards }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [showAll, setShowAll] = useState(false);

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
              title="My cards"
              style={{ color: theme['color-primary-black'] }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.addNewCard)}
              style={[styles.row]}
            >
              <Ionicons
                name="add"
                color={theme['color-primary-100']}
                size={18}
              />
              <YNHeaderTitle
                category="h10"
                title="ADD NEW"
                style={{ color: theme['color-primary-100'] }}
              />
            </TouchableOpacity>
          </View>
          {cards.length === 0 ? <Text>No Record Found!</Text> : null}
          {cards.map((item, index) => {
            if (!showAll && index !== 0) return null;
            return (
              <FinancialCard
                key={'list-card-' + index}
                index={index}
                card={item}
              />
            );
          })}
          <View
            style={[
              styles.flexOne,
              styles.alignItemsCenter,
              styles.viewMoreWrapper,
            ]}
          >
            <TouchableOpacity onPress={() => setShowAll(!showAll)}>
              <ArrowDownIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainWrapper}>
          <YTTab />
          <View style={styles.buttonsWrapper}>
            <YNButton onPress={() => {}} title="CONFIRM" />
          </View>
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

export default FinancialAccountComponent;
