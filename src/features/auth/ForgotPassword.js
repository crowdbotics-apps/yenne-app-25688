import React from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import {
  Text,
  useStyleSheet,
  Button,
  StyleService,
  useTheme,
} from '@ui-kitten/components';
import { connect, useDispatch } from 'react-redux';

import { login, clearLoginError } from './redux/actions';
import AppHeader from '../../components/AppHeader';
import TextInputField from '../../components/Form/TextInputField';

const ForgotPassword = ({ navigation, login, loading, serverError }) => {
  const styles = useStyleSheet(themedStyles);
  const [inputs, setInputs] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const theme = useTheme();

  const onChangeText = (field, value) => {
    dispatch(clearLoginError());
    setInputs({ ...inputs, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const onSubmit = () => {
    let errors = {};
    if (!inputs.email) {
      errors.email = 'Email is a required field';
    }
    if (!inputs.password) {
      errors.password = 'Password is a required field';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      login(inputs);
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.signUpLoading,
  serverError: state.auth.loginError,
});

export default connect(mapStateToProps, { login, clearLoginError })(
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
