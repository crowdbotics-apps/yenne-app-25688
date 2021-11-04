import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import usePlaidLink from '../../../hooks/usePlaidLink';
import PlaidLink from 'react-native-plaid-link-sdk';
import { postPublicToken } from '../../Financial/redux/api';
import BackgroundWrapper from '../../../components/BackgroundWrapper';

const PlaidConnect = ({ navigation }) => {
  /**
   * https://plaid.com/docs/auth/partnerships/dwolla/#integrate-with-plaid-link
   * launch Link then, in the onSuccess callback, you can call a server handler to exchange the Link public_token for a Plaid access_token and a Dwolla processor_token.
   */
  const styles = useStyleSheet(themedStyles);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading...');
  const linkToken = usePlaidLink();
  useEffect(() => {
    if (linkToken) {
      setLoading(false);
    }
  }, [linkToken]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7C03E9" barStyle="light-content" />
      <BackgroundWrapper showBackButton>
        {linkToken ? (
          <PlaidLink
            tokenConfig={{
              token: linkToken,
            }}
            onSuccess={success => {
              console.log(JSON.stringify(success));
              setLoading(true);
              setLoadingText('Creating a funding source...');
              postPublicToken(success)
                .then(res => {
                  alert('Bank connected successfully');
                  setLoadingText('Loading...');
                  setLoading(false);
                })
                .catch(err => {
                  alert(JSON.stringify(err?.response?.data));
                  setLoadingText('Loading...');
                  setLoading(false);
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
        ) : null}
      </BackgroundWrapper>
      <Spinner
        visible={loading}
        textContent={loadingText}
        textStyle={styles.spinnerTextStyle}
      />
    </SafeAreaView>
  );
};

export default PlaidConnect;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'header-background-color',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    margin: 10,
  },
  button: {
    margin: 2,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    paddingVertical: 5,
    width: 210,
  },
});
