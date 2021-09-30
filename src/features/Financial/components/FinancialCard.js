import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardIcon from '../../../components/CardIcon';
import RadioButton from '../../../components/Form/RadioButton';
import YNHeaderTitle from '../../../components/HeaderTitle';

const FinancialCard = ({
  card,
  index,
  handleDelete,
  handleUpdateCard,
  selectedCard,
  setSelectedCard,
}) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [isPrimary, setIsPrimary] = useState(card.is_primary);
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
        <View style={styles.centered}>
          <TouchableOpacity
            onPress={() => {
              setIsPrimary(!isPrimary);
              // handleUpdateCard({ ...card, is_primary: !isPrimary });
              setSelectedCard(index);
            }}
          >
            <RadioButton selected={index === selectedCard} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContent}>
          <View style={[styles.row, styles.cardIcon]}>
            <Text style={{ color: theme['color-basic-600'] }}>
              MY CARD {index + 1}
              {'  '}
            </Text>
            <CardIcon cardNumber={card?.number} style={{ top: 0 }} />
          </View>
          <YNHeaderTitle
            category="h7"
            title={
              '**** **** **** *' + card?.number?.slice(card?.number?.length - 3)
            }
            style={{
              color: theme['color-primary-black'],
              fontSize: 18,
              fontWeight: '500',
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleDelete(card.id)}
        style={[styles.row]}
      >
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
  centered: { justifyContent: 'center', alignItems: 'center' },
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
