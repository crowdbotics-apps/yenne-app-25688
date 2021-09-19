import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import routes from '../../navigator/routes';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Spinner,
} from '@ui-kitten/components';
import YNButton from '../../components/YNButton';
import SendIcon from '../../assets/images/SendIcon';
import ReceiveIcon from '../../assets/images/RecieveIcon';
import AlertModal from '../../components/AlertModal';
import { ACCOUNT_SOURCE } from '../../constants';
import RadioButton from '../../components/Form/RadioButton';
import YNSmallButton from '../../components/YNSmallButton';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../Accounts/redux/actions';

const Home = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [source, setSource] = useState(ACCOUNT_SOURCE.bank_account);
  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.auth);
  const fundingSelector = useSelector(state => state.fundingSource);
  const fundingLoading = useSelector(
    state => state.fundingSource.isLoadingBalance,
  );

  useState(() => {
    dispatch(actions.getBalance());
  }, []);

  const nextScreen = () => {
    setModalVisible(false);
    if (source === ACCOUNT_SOURCE.bank_account) {
      navigation.navigate(routes.plaidConnect);
    } else {
      navigation.navigate(routes.financialAccount);
    }
  };

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
    >
      <View style={styles.container}>
        <YNHeaderTitle
          category="h3"
          title={`Hi, ${userSelector?.user?.username}`}
        />
        <View style={styles.profileIconWrapper}>
          <View />
        </View>
        <YNHeaderTitle category="h6" title="Available balance" />
        <View style={styles.amountWrapper}>
          <View style={styles.currencyWrapper}>
            <Text style={styles.currencyText}>USD</Text>
          </View>

          <YNHeaderTitle
            category="h3"
            title={
              fundingLoading ? (
                <Spinner size="tiny" />
              ) : (
                fundingSelector?.balance
              )
            }
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <YNHeaderTitle
            category="h10"
            title="+ ADD NEW"
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
      <AlertModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
        description=""
      >
        <View style={{ marginHorizontal: 10 }}>
          <View style={[styles.row]}>
            <TouchableOpacity
              onPress={() => {
                setSource(ACCOUNT_SOURCE.bank_account);
              }}
              style={{ flexDirection: 'row' }}
            >
              <RadioButton selected={source === ACCOUNT_SOURCE.bank_account} />
              <Text style={{ color: theme['color-primary-black'] }}>
                &nbsp; Bank account
              </Text>
            </TouchableOpacity>
            <View style={{ padding: 10 }} />
            <TouchableOpacity
              onPress={() => {
                setSource(ACCOUNT_SOURCE.credit_card);
              }}
              style={{ flexDirection: 'row' }}
            >
              <RadioButton selected={source === ACCOUNT_SOURCE.credit_card} />
              <Text style={{ color: theme['color-primary-black'] }}>
                &nbsp; Credit card
              </Text>
            </TouchableOpacity>
          </View>
          <YNSmallButton style={{}} onPress={nextScreen} title="NEXT" />
        </View>
      </AlertModal>
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
    // justifyContent: 'center'
  },
  currencyWrapper: { alignContent: 'center', alignSelf: 'center' },
  currencyText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    padding: 6,
    marginHorizontal: 10,
  },
  buttonsWrapper: { width: wp('60%'), marginTop: hp('10%') },
  profileIconWrapper: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 12,
    marginTop: hp('10%'),
  },
});

export default Home;
