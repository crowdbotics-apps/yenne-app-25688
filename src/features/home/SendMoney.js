import React from 'react';
import { View, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import YNButton from '../../components/YNButton';
import Input from '../../components/Form/Input';
import { Formik } from 'formik';
import { validateRegistration } from '../../utils/validation';
import SelectField from '../../components/Form/SelectField';

const SendMoney = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
      showBackButton
    >
      <View style={styles.container}>
        <YNHeaderTitle category="h3" title="Send money" />
        <Text style={styles.helperText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <Formik
          initialValues={{
            username: '',
            amount: '',
          }}
          validate={validateRegistration}
          onSubmit={values => console.warn(values)}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View style={styles.formWrapper}>
              <Input
                secureTextEntry={false}
                iconShow={false}
                placeholder="Money Recipient"
                name="username"
                onChange={value => {
                  handleChange('username');
                  setFieldValue('username', value);
                }}
                value={values.username}
              />
              {errors.username && touched.username && (
                <View>
                  <Text style={styles.errorText}>{errors.username}</Text>
                </View>
              )}

              <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 4 }}>
                  <SelectField />
                </View>
                <View style={{ flex: 1.5 }}>
                  <Input
                    secureTextEntry={false}
                    iconShow={false}
                    placeholder="Amount"
                    name="email"
                    onChange={value => {
                      handleChange('email');
                      setFieldValue('email', value);
                    }}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <View>
                      <Text style={styles.errorText}>{errors.email}</Text>
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.buttonsWrapper}>
                <YNButton onPress={handleSubmit} title="CONFIRM" />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </BackgroundWrapper>
  );
};

const themedStyles = StyleService.create({
  row: { flexDirection: 'row', marginTop: hp('2%') },
  column: { flexDirection: 'column' },
  helperText: { color: '#D5AEF8', marginTop: hp('10%'), fontSize: 18 },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  formWrapper: {
    marginTop: hp('10%'),
  },
  buttonsWrapper: {
    marginTop: hp('2%'),
    justifyContent: 'center',
  },
  saveBtn: {
    fontSize: 20,
    color: 'color-primary-500',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SendMoney;
