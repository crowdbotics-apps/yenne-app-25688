import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  useStyleSheet,
  Button,
  StyleService,
  useTheme,
} from '@ui-kitten/components';
import { connect, useDispatch } from 'react-redux';

import { forgotPassword, clearLoginError } from './redux/actions';
import AppHeader from '../../components/AppHeader';
import TextInputField from '../../components/Form/TextInputField';
import AlertModal from '../../components/AlertModal';
import { useRoute } from '@react-navigation/core';
import routes from '../../navigator/routes';

const ForgotPassword = ({
  navigation,
  forgotPassword,
  loading,
  serverError,
  passwordSent,
  clearLoginError,
}) => {
  const styles = useStyleSheet(themedStyles);
  const [inputs, setInputs] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const route = useRoute();

  const onChangeText = (field, value) => {
    dispatch(clearLoginError());
    setInputs({ ...inputs, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  useEffect(() => {
    if (route.name === routes.forgotPassword && passwordSent) {
      setModalVisible(true);
    }
  }, [passwordSent]);

  const onSubmit = () => {
    let errors = {};
    if (!inputs.email) {
      errors.email = 'Email is a required field';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      forgotPassword(inputs);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />
          <AppHeader showBackButton={true} />
          <View style={styles.logo}>
            <Text category="h5">Forgot password?</Text>
          </View>
          <View style={styles.form}>
            <TextInputField
              onChangeText={text => onChangeText('email', text)}
              label="Email"
              error={errors.email}
              value={inputs.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text status="danger" style={{ marginBottom: 1 }}>
              {serverError}
            </Text>

            <View>
              <Button
                accessoryLeft={() =>
                  loading ? (
                    <ActivityIndicator size="small" color="#ffff" />
                  ) : (
                    <></>
                  )
                }
                style={styles.button}
                onPress={onSubmit}
              >
                RESET PASSWORD
              </Button>
            </View>
          </View>
          <AlertModal
            modalVisible={modalVisible}
            setModalVisible={() => setModalVisible(!modalVisible)}
            description="Single use password has been sent to your email"
          >
            <TouchableOpacity
              onPress={() => {
                clearLoginError();
                setModalVisible(!modalVisible);
              }}
              style={[
                styles.button,
                { backgroundColor: theme['color-primary-500'], padding: 10 },
              ]}
            >
              <Text style={{ textAlign: 'center', fontWeight: '500' }}>Ok</Text>
            </TouchableOpacity>
          </AlertModal>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.forgotPasswordLoading,
  serverError: state.auth.forgotPasswordError,
  passwordSent: state.auth.passwordSent,
});

export default connect(mapStateToProps, { forgotPassword, clearLoginError })(
  ForgotPassword,
);

export const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(0, 31, 87, 0.05)',
    borderRadius: 50,
    marginBottom: 14,
  },
  form: {
    flex: 3,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'color-primary-500',
    borderColor: 'color-primary-500',
    borderRadius: 50,
    paddingHorizontal: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomTextContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  forgotPassword: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 14,
  },
  forgotPasswordText: {
    color: 'color-primary-100',
  },
});
