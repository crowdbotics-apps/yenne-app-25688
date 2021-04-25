import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  Text,
  StyleService,
  useStyleSheet,
  Button,
  Divider,
} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { facebookSignUp, getLoggedUser, googleSignUp } from './redux/actions';
import AppHeader from '../../components/AppHeader';
import { ScrollView } from 'react-native-gesture-handler';
import routes from '../../navigator/routes';

const Icon = ({ name }) => {
  return (
    <View style={{ position: 'absolute', left: wp('17%') }}>
      <FontAwesome name={name} size={14} color="#000" />
    </View>
  );
};

GoogleSignin.configure({
  scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '1019078873013-t9l37q1jk67rok4fpudbgfqm7fuso3rt.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId:
    '1019078873013-qeemg0n9p4bu10ujgupnkiev6ja1ed5r.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
});

const AuthOptionScreen = ({
  navigation,
  getLoggedUser,
  facebookSignUp,
  loading,
  googleSignUp,
  googleSignUpLoading,
  error,
}) => {
  const styles = useStyleSheet(themedStyles);
  const [selectedPage, setSelectedPage] = React.useState(0);

  const signInWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            facebookSignUp({ access_token: data?.accessToken }, () => {
              navigation.navigate(routes.home);
            });
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

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.warn(userInfo);
      googleSignUp({ access_token: userInfo?.idToken }, () => {
        navigation.navigate(routes.home);
      });
    } catch (error) {
      console.warn(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
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
          {error ? <Text>{error}</Text> : null}
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

          <GoogleSigninButton
            style={[styles.googleButton]}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={signIn}
            disabled={googleSignUpLoading}
          />
          {/* <Button
            accessoryLeft={() => <Icon name="google" color="black" />}
            style={[styles.button, styles.socialButton]}
            onPress={() => {}}
          >
            {selectedPage === 0 ? 'Sign up' : 'Login'} via Google
          </Button> */}
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.fbSignUpLoading,
  googleSignUpLoading: state.auth.googleSignUpLoading,
  error: state.auth.socialAuthError,
});

export default connect(mapStateToProps, {
  facebookSignUp,
  googleSignUp,
  getLoggedUser,
})(AuthOptionScreen);

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
    paddingVertical: 20,
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
  googleButton: {
    width: wp('90%'),
  },
  socialButton: {
    backgroundColor: 'text-white-color',
    borderColor: 'color-info-900',
    borderRadius: 50,
  },
  ghostButton: {
    color: 'color-primary-100',
    fontWeight: '500',
  },
  icon: {},
});
