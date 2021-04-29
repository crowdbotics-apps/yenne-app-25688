import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Text,
  useStyleSheet,
  Button,
  useTheme,
  StyleService,
} from '@ui-kitten/components';
import { connect, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  verifyCode,
  verifyCodeError,
  resetCodeError,
  resendCode,
  clearSignUpError,
} from './redux/actions';
import AlertModal from '../../components/AlertModal';
import DailPad from '../../components/DailPad/DailPad';
import CancelButton from '../../components/CancelButton';
import Digit from '../../components/DailPad/Digit';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import routes from '../../navigator/routes';

const VerifyCode = ({
  navigation,
  verifyCode,
  resendCode,
  verifyCodeError,
  loading,
  serverError,
}) => {
  const styles = useStyleSheet(themedStyles);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showResendModal, setShowResendModal] = React.useState(false);
  const selector = useSelector(state => state.auth);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selector.resetSuccess) {
      setShowResendModal(true);
    }
  }, [selector.resetSuccess]);

  useEffect(() => {
    if (selector.verified) {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate(routes.termsAndConditions);
        verifyCodeError('');
      }, 3000);
    }
  }, [selector.verified]);

  const theme = useTheme();

  const deleteFromBottom = value => {
    if (fourth) {
      return setFourth(value);
    }

    if (third) {
      return setThird(value);
    }

    if (second) {
      return setSecond(value);
    }

    if (first) {
      return setFirst(value);
    }
  };

  const addFromTop = value => {
    if (!first) {
      return setFirst(value);
    }
    if (!second) {
      return setSecond(value);
    }
    if (!third) {
      return setThird(value);
    }
    if (!fourth) {
      return setFourth(value);
    }
  };

  const onSubmit = () => {
    if (first && second && third && fourth) {
      const verificationCode = first + second + third + fourth;
      verifyCode(verificationCode);
    } else {
      setError('Please select four digits!');
    }
  };

  const handleButtonPress = value => {
    setError('');
    if (value === -1) {
      // delete from top
      deleteFromBottom('');
    } else {
      // add from top
      addFromTop(value);
    }
  };

  const handleResendCode = () => {
    resendCode();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />

        <View style={styles.header}>
          <CancelButton />
          <View style={styles.headerView}>
            <Text category="h5" style={styles.headerTitle}>
              Verification code
            </Text>
            <View style={styles.digits}>
              <Digit
                backgroundColor="light-purple-color"
                textColor="white"
                value={first}
              />
              <Digit
                backgroundColor="light-purple-color"
                textColor="white"
                styles={styles.digitWrapper}
                value={second}
              />
              <Digit
                backgroundColor="light-purple-color"
                textColor="white"
                styles={styles.digitWrapper}
                value={third}
              />
              <Digit
                backgroundColor="light-purple-color"
                textColor="white"
                styles={styles.digitWrapper}
                value={fourth}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={handleResendCode}>
            <Text
              style={{ color: theme['color-primary-100'], marginBottom: 17 }}
            >
              {selector.resetLoading ? (
                <ActivityIndicator size="small" color="#ffff" />
              ) : (
                <></>
              )}
              Resend code
            </Text>
          </TouchableOpacity>
          {error ? <Text style={styles.errorText}> {error}</Text> : null}
          {serverError ? (
            <Text style={styles.errorText}> {serverError}</Text>
          ) : null}
          <Button
            accessoryLeft={() =>
              loading ? <ActivityIndicator size="small" color="#ffff" /> : <></>
            }
            style={[styles.button]}
            disabled={loading}
            onPress={onSubmit}
          >
            VERIFY NOW
          </Button>
        </View>
        <DailPad onPress={handleButtonPress} />
        <AlertModal
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
          description="Your account has been verified"
        >
          <View style={{ alignItems: 'center' }}>
            <AntDesign name="checkcircle" color="#6FCF97" size={20} />
          </View>
        </AlertModal>
        <AlertModal
          modalVisible={showResendModal}
          setModalVisible={() => setShowResendModal(!showResendModal)}
          description="New verification code has been sent to your email"
        >
          <TouchableOpacity
            onPress={() => setShowResendModal(false)}
            style={[
              styles.button,
              { backgroundColor: theme['color-primary-500'], padding: 10 },
            ]}
          >
            <Text style={{ textAlign: 'center', fontWeight: '500' }}>Ok</Text>
          </TouchableOpacity>
        </AlertModal>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.appLoading,
  serverError: state.auth.verifyError,
});

export default connect(mapStateToProps, {
  verifyCode,
  resendCode,
  clearSignUpError,
  resetCodeError,
  verifyCodeError,
})(VerifyCode);

export const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'header-background-color',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: hp('3.278688524590164%'),
    paddingTop: hp('4.278688524590164%'),
    height: hp('30%'),
  },
  digits: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
    paddingHorizontal: wp('10%'),
  },
  digitText: {
    color: 'red',
  },
  headerView: { alignItems: 'center' },
  headerTitle: { color: 'text-white-color' },
  button: {
    backgroundColor: 'color-primary-500',
    borderColor: 'color-primary-500',
    borderRadius: 50,
    paddingHorizontal: 30,
  },
  buttonArea: {
    alignItems: 'center',
    padding: 12,
    marginBottom: hp('7.278688524590164%'),
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});
