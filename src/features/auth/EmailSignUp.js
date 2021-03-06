import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import { Text, useStyleSheet, Button, useTheme } from '@ui-kitten/components';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { themedStyles } from './EmailLogin';
import { signUp, clearSignUpError, login, logOut } from './redux/actions';
import AppHeader from '../../components/AppHeader';
import TextInputField from '../../components/Form/TextInputField';
import AlertModal from '../../components/AlertModal';
import routes from '../../navigator/routes';

const EmailSignUp = ({
  navigation,
  signUp,
  login,
  logOut,
  clearSignUpError,
  loading,
  serverError,
}) => {
  const route = useRoute();
  const styles = useStyleSheet(themedStyles);
  const [inputs, setInputs] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);

  

  const onChangeText = (field, value) => {
    dispatch(clearSignUpError());
    setInputs({ ...inputs, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const onSubmit = () => {
    logOut();
    let errors = {};

    if (!inputs.username) {
      errors.username = 'Username is a required field';
    }
    if (!inputs.email) {
      errors.email = 'Email is a required field';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
      errors.email = 'Invalid email address';
    }

    if (!inputs.password) {
      errors.password = 'Password is a required field';
    }
    if (!inputs.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is a required field';
    }

    if (
      inputs.confirmPassword &&
      inputs.password &&
      inputs.password != inputs.confirmPassword
    ) {
      errors.confirmPassword = 'Password and Confirm Password should be same';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      signUp(inputs, onSuccess);
    }
  };

  const onSuccess = data => {
    setModalVisible(true);
  };

  const handleRedirect = () => {
    setModalVisible(!modalVisible);
    navigation.navigate(routes.verifyCode);
  };

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[{ flex: 4 }]}
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />
          <AppHeader showBackButton={true} />
          <View style={styles.logo}>
            <Text category="h5" style={{ color: theme['color-basic-100'] }}>
              Sign up
            </Text>
          </View>
          <View style={styles.form}>
            <TextInputField
              onChangeText={text => onChangeText('username', text)}
              label="Username"
              error={errors.username}
              value={inputs.username}
              autoCapitalize="none"
            />
            <TextInputField
              onChangeText={text => onChangeText('email', text)}
              label="Email"
              error={errors.email}
              value={inputs.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInputField
              onChangeText={text => onChangeText('password', text)}
              label="Password"
              secureTextEntry={true}
              error={errors.password}
              value={inputs.password}
            />
            <TextInputField
              onChangeText={text => onChangeText('confirmPassword', text)}
              label="Re-type password"
              secureTextEntry={true}
              error={errors.confirmPassword}
              value={inputs.confirmPassword}
            />

            <Text status="danger" style={{ marginBottom: 10 }}>
              {serverError}
            </Text>

            <View style={[styles.buttonContent, { justifyContent: 'center' }]}>
              <Button
                accessoryLeft={() =>
                  loading ? (
                    <ActivityIndicator size="small" color="#ffff" />
                  ) : (
                    <></>
                  )
                }
                style={[styles.button, { flex: 0.7 }]}
                disabled={loading}
                onPress={onSubmit}
              >
                Sign Up
              </Button>
            </View>
            <View style={styles.bottomTextContent}>
              <Text appearance="hint">Already a member </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EmailLoginScreen')}
              >
                <Text style={{ color: theme['color-primary-100'] }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <AlertModal
            modalVisible={modalVisible}
            setModalVisible={() => setModalVisible(!modalVisible)}
            description=" Verification code has been sent to your email"
          >
            <TouchableOpacity
              onPress={handleRedirect}
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
  loading: state.auth.signUpLoading,
  serverError: state.auth.signUpErrorMsg,
});

export default connect(mapStateToProps, {
  signUp,
  clearSignUpError,
  login,
  logOut,
})(EmailSignUp);
