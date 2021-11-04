import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
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
  Spinner as KTSpinner,
} from '@ui-kitten/components';
import PlaidLink from 'react-native-plaid-link-sdk';
import Spinner from 'react-native-loading-spinner-overlay';
import YNButton from '../../components/YNButton';
import SendIcon from '../../assets/images/SendIcon';
import ReceiveIcon from '../../assets/images/RecieveIcon';
import AlertModal from '../../components/AlertModal';
import YNModal from '../../components/YNModal';
import { ACCOUNT_SOURCE } from '../../constants';
import RadioButton from '../../components/Form/RadioButton';
import YNSmallButton from '../../components/YNSmallButton';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../Accounts/redux/actions';
import * as notifActions from '../Notification/redux/actions';
import usePlaidLink from '../../hooks/usePlaidLink';
import { postPublicToken } from '../Financial/redux/api';
import NotificationOn from '../../assets/images/NotificationOn';
import NotificationOff from '../../assets/images/NotificationOff';

const Home = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  // const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [connectPlaidModalVisible, setConnectPlaidModalVisible] =
    useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');
  const [creatingSource, setCreatingSource] = useState(false);
  const [source, setSource] = useState(ACCOUNT_SOURCE.bank_account);

  const [hasNewNotifcation, setHasNewNotification] = useState(false);

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.auth);
  const fundingSelector = useSelector(state => state.fundingSource);
  const notifications = useSelector(state => state.notifications.data || []);
  const fundingLoading = useSelector(
    state => state.fundingSource.isLoadingBalance,
  );
  const { linkToken, fetchToken, loading } = usePlaidLink();

  useState(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(actions.getBalance());
      dispatch(notifActions.getNotifications());
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (notifications.filter(item => item.unread).length !== 0) {
      setHasNewNotification(true);
    }
  }, [notifications, navigation]);

  const nextScreen = () => {
    setModalVisible(false);
    if (source === ACCOUNT_SOURCE.bank_account) {
      setConnectPlaidModalVisible(true);
      fetchToken();
    } else {
      navigation.navigate(routes.addNewCard);
    }
  };

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
    >
      <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.notification}>
          <View />
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.notification)}
          >
            {notifications.filter(item => item.unread).length !== 0 ? (
              <NotificationOn />
            ) : (
              <NotificationOff />
            )}
          </TouchableOpacity>
        </View>
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
                <KTSpinner size="tiny" />
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
      {connectPlaidModalVisible ? (
        <YNModal
          modalVisible={connectPlaidModalVisible}
          setModalVisible={() =>
            setConnectPlaidModalVisible(!connectPlaidModalVisible)
          }
          description=""
        >
          {linkToken ? (
            <PlaidLink
              tokenConfig={{
                token: linkToken,
              }}
              onSuccess={success => {
                console.log(JSON.stringify(success));
                // alert(JSON.stringify(success));
                setConnectPlaidModalVisible(false);
                setCreatingSource(true);
                setLoadingText('Creating a funding source...');
                postPublicToken(success)
                  .then(res => {
                    alert('Account connected successfully');
                    setLoadingText('Loading...');
                    setCreatingSource(false);
                    navigation.navigate(routes.BankAccounts);
                  })
                  .catch(err => {
                    alert(JSON.stringify(err?.response?.data));
                    setLoadingText('Loading...');
                    setCreatingSource(false);
                  });
              }}
              onExit={exit => {
                console.log(exit);
              }}
            >
              <View style={[styles.button, { backgroundColor: '#F1C80D' }]}>
                <Text style={styles.text}>CONNECT BANK ACCOUNT</Text>
              </View>
            </PlaidLink>
          ) : (
            <View
              style={[
                styles.button,
                { justifyContent: 'center', aligtems: 'center' },
              ]}
            >
              <Text style={styles.text}>Loading...</Text>
            </View>
          )}
          <YNSmallButton
            style={[styles.button]}
            textStyle={styles.text}
            onPress={nextScreen}
            title="Cancel"
          />
        </YNModal>
      ) : null}
      <Spinner
        visible={loading || creatingSource}
        textContent={loadingText}
        textStyle={styles.spinnerTextStyle}
      />
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
  notification: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minWidth: wp('70%'),
    marginHorizontal: hp('10%'),
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
  spinnerTextStyle: {
    color: '#FFF',
  },
  button: {
    margin: 2,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    paddingVertical: 5,
    width: 210,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    margin: 10,
  },
});

export default Home;
