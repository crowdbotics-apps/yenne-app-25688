import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  Text,
  StyleService,
  useStyleSheet,
  Button,
  useTheme,
  Divider,
} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { connect } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { facebookSignUp, getLoggedUser } from './redux/actions';
import AppHeader from '../../components/AppHeader';

const Icon = ({ name }) => {
  return (
    <View style={{ position: 'absolute', left: wp('17%') }}>
      <FontAwesome name={name} size={14} color="#000" />
    </View>
  );
};

const AuthOptionScreen = ({
  navigation,
  getLoggedUser,
  facebookSignUp,
  loading,
  error,
}) => {
  const styles = useStyleSheet(themedStyles);
  const [selectedPage, setSelectedPage] = React.useState(0);

  const signInWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            //onSuccess({ access_token: data?.accessToken });
            facebookSignUp({ access_token: data?.accessToken }, () =>
              getLoggedUser(),
            );
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const onAppleButtonPress = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.signUpContent}>
        <View style={styles.menuContent}>
          <Button
            appearance="filled"
            status="primary"
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                selectedPage === 0 ? 'EmailSignUpScreen' : 'EmailLoginScreen',
              )
            }
          >
            {selectedPage === 0 ? 'SIGN UP' : 'LOGIN'}
          </Button>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text} appearance="hint">
              {selectedPage === 0
                ? 'Already a member'
                : "Don't have an account?"}
            </Text>
            <TouchableOpacity
              style={styles.ghostButton}
              onPress={() => setSelectedPage(selectedPage === 0 ? 1 : 0)}
            >
              <Text style={styles.ghostButton}>
                {selectedPage === 0 ? 'Login' : 'Sign up'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerWrapper}>
            <Divider style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <Divider style={styles.divider} />
          </View>
        </View>

        <View style={styles.signUpBtnContent}>
          <Button
            onPress={signInWithFacebook}
            accessoryLeft={() =>
              loading ? (
                <ActivityIndicator size="small" color="#ffff" />
              ) : (
                <Icon name="facebook-f" />
              )
            }
            style={[styles.button, styles.socialButton]}
          >
            {selectedPage === 0 ? 'Sign up' : 'Login'} via Facebook
          </Button>
          <Button
            style={[styles.button, styles.socialButton]}
            accessoryLeft={() => <Icon name="apple" />}
            onPress={onAppleButtonPress}
          >
            {selectedPage === 0 ? 'Sign up' : 'Login'} via AppleID
          </Button>

          <Button
            accessoryLeft={() => <Icon name="google" color="black" />}
            style={[styles.button, styles.socialButton]}
            onPress={() => {}}
          >
            {selectedPage === 0 ? 'Sign up' : 'Login'} via Google
          </Button>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.fbSignUpLoading,
  error: state.auth.signUpErrorMsg,
});

export default connect(mapStateToProps, { facebookSignUp, getLoggedUser })(
  AuthOptionScreen,
);

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  text: {
    marginRight: 5,
  },
  dividerWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp('3%'),
  },
  divider: { flex: 1, backgroundColor: 'color-basic-600' },
  dividerText: {
    flex: 0.3,
    textAlign: 'center',
    color: 'color-basic-600',
    fontSize: 12,
  },
  signUpContent: {
    marginBottom: 30,
    flex: 1,
    marginHorizontal: 20,
  },
  signUpBtnContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContent: {
    alignItems: 'center',
  },
  menu: {
    paddingHorizontal: 15,
  },
  menuText: {
    paddingBottom: 5,
  },
  selected: {
    borderBottomColor: 'color-primary-500',
    borderBottomWidth: 4,
  },
  button: {
    borderRadius: 50,
    width: '100%',
    marginBottom: 14,
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: '100',
  },
  socialButton: {
    backgroundColor: 'text-white-color',
    borderColor: 'color-info-900',
  },
  ghostButton: {
    color: 'color-primary-100',
    fontWeight: '500',
  },
  icon: {},
});
