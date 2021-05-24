import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import routes from '../../navigator/routes';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import UserIcon from '../../assets/images/UserIcon';
import YNButton from '../../components/YNButton';
import SendIcon from '../../assets/images/SendIcon';
import ReceiveIcon from '../../assets/images/RecieveIcon';

const Home = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
    >
      <View style={styles.container}>
        <YNHeaderTitle category="h3" title="Hi, Sophia" />
        <View style={styles.profileIconWrapper}>
          <View />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.account);
            }}
          >
            <UserIcon />
          </TouchableOpacity>
        </View>
        <YNHeaderTitle category="h6" title="Available balance" />
        <View style={styles.amountWrapper}>
          <View style={styles.currencyWrapper}>
            <Text style={styles.currencyText}>USD</Text>
          </View>

          <YNHeaderTitle category="h3" title="$1,156.76" />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.financialAccount)}
        >
          <YNHeaderTitle
            category="h10"
            title="Financial account"
            style={{ color: theme['color-primary-100'] }}
          />
        </TouchableOpacity>

        <View style={styles.buttonsWrapper}>
          <YNButton
            onPress={() => navigation.navigate(routes.sendMoney)}
            title="   SEND"
            AccessorIcon={() => <SendIcon />}
          />

          <YNButton
            onPress={() => navigation.navigate(routes.receiveMoney)}
            title="RECEIVE"
            AccessorIcon={() => <ReceiveIcon />}
          />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('10%'),
  },
  amountWrapper: {
    flexDirection: 'row',
    backgroundColor: 'light-purple-color',
    padding: 15,
    borderRadius: 50,
    flex: 1,
    minWidth: wp('70%'),
    marginVertical: hp('3%'),
  },
  currencyWrapper: { alignContent: 'center', alignSelf: 'center' },
  currencyText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    padding: 6,
  },
  buttonsWrapper: { width: wp('60%'), marginTop: hp('10%') },
  profileIconWrapper: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 12,
    marginTop: hp('5%'),
  },
});

export default Home;
