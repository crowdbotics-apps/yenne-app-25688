import React, { useEffect, useState } from 'react';
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
import { connect, useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  usernameExist,
  clearLoginError,
  updateUsername,
} from './redux/actions';
import AppHeader from '../../components/AppHeader';
import TextInputField from '../../components/Form/TextInputField';
import { isLoggedIn } from '../../utils/helpers';
import routes from '../../navigator/routes';

const CreateUsername = ({
  navigation,
  usernameExist,
  loading,
  serverError,
  updateUsername,
}) => {
  const styles = useStyleSheet(themedStyles);
  const [inputs, setInputs] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

  const onChangeText = (field, value) => {
    dispatch(clearLoginError());
    setInputs({ ...inputs, [field]: value });
    setErrors({ ...errors, [field]: '' });
    if (value.length > 2) {
      usernameExist({ username: value });
    }
  };

  useEffect(() => {
    if (selector.usernameSet) {
      navigation.navigate(routes.home);
      setMounted(true);
    }
  }, [selector.usernameSet]);

  const onSubmit = () => {
    let errors = {};
    if (!inputs.username) {
      errors.username = 'Username is a required field';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      dispatch(updateUsername({ username: inputs.username }));
    }
  };

  const renderRightAccessory = () => {
    if (selector.usernameExist === undefined) {
      return;
    }
    if (selector.usernameExistLoading) {
      return <ActivityIndicator size="small" color="#000" />;
    }
    if (selector.usernameExist === true) {
      return <Entypo name="circle-with-cross" color="red" size={20} />;
    }
    return <AntDesign name="checkcircle" color="#6FCF97" size={20} />;
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
          <AppHeader />
          <View style={styles.logo}>
            <Text category="h5">Create username</Text>
          </View>
          <View style={styles.form}>
            <TextInputField
              onChangeText={text => onChangeText('username', text)}
              label="Username"
              error={errors.username}
              value={inputs.username}
              autoCapitalize="none"
              renderRightAccessory={renderRightAccessory}
            />

            <Text status="danger" style={{ marginBottom: 1 }}>
              {JSON.stringify(serverError)}
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
                GET STARTED
              </Button>
            </View>
            <View style={styles.bottomTextContent}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.home)}
              >
                <Text
                  appearance="alternative"
                  //   style={{ color: theme['color-primary-100'] }}
                >
                  CANCEL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.updateUsernameLoading,
  serverError: state.auth.loginError,
});

export default connect(mapStateToProps, {
  usernameExist,
  clearLoginError,
  updateUsername,
})(CreateUsername);

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
