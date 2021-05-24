import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import YNHeaderTitle from '../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import Input from '../../components/Form/Input';
import { Formik } from 'formik';
import { validateRegistration } from '../../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAccount } from '../auth/redux/actions';
import { request, setAuthorizationToken } from '../../utils/http';
import { errorsToString } from '../../utils/helpers';

const Account = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth?.user || {});

  const [showPassword, setShowPassword] = useState(true);
  const [showConPassword, setShowConPassword] = useState(true);

  const handleUpdateSubmit = values => {
    request
      .post('api/v1/account/update-account/', values)
      .then(res => {
        alert('Account details updated successfully');
      })
      .catch(err => {
        alert(errorsToString(err.response.data));
        throw errorsToString(err.response.data);
      });
  };

  return (
    <BackgroundWrapper
      style={{ backgroundColor: theme['header-background-color'] }}
      showBackButton
    >
      <View style={styles.container}>
        <YNHeaderTitle category="h3" title="Account" />
        <Formik
          initialValues={{
            username: user?.username || '',
            email: user?.email || '',
            currentPassword: '',
            password: '',
          }}
          validate={validateRegistration}
          onSubmit={values =>
            handleUpdateSubmit({ ...values, userName: values.username })
          }
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
                placeholder=""
                name="username"
                label="Username"
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
              <Input
                secureTextEntry={false}
                iconShow={false}
                placeholder=""
                name="email"
                label="Email"
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
              <View style={styles.inputWrapper}>
                <Input
                  secureTextEntry={showPassword}
                  handlePassword={() => setShowPassword(!showPassword)}
                  iconShow={true}
                  showPasswordData={true}
                  placeholder=""
                  label="Current password"
                  name="currentPassword"
                  iconName={showPassword ? 'eye' : 'eye-slash'}
                  onChange={value => setFieldValue('currentPassword', value)}
                  value={values.currentPassword}
                />
              </View>
              {errors.currentPassword && touched.currentPassword && (
                <View>
                  <Text style={styles.errorText}>{errors.currentPassword}</Text>
                </View>
              )}
              <View style={styles.inputWrapper}>
                <Input
                  secureTextEntry={showConPassword}
                  iconShow={true}
                  placeholder=""
                  iconName={showConPassword ? 'eye' : 'eye-slash'}
                  showPasswordData={false}
                  handleConPassword={() => setShowConPassword(!showConPassword)}
                  label="New password"
                  name="password"
                  onChange={value => setFieldValue('password', value)}
                  value={values.password}
                />
              </View>
              {errors.password && touched.password && (
                <View>
                  <Text style={styles.errorText}>{errors.password}</Text>
                </View>
              )}
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.saveBtn}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </BackgroundWrapper>
  );
};

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('10%'),
    marginHorizontal: wp('5%'),
  },
  formWrapper: {
    marginTop: hp('10%'),
  },
  buttonsWrapper: {
    marginTop: hp('14%'),
    justifyContent: 'center',
  },
  saveBtn: {
    fontSize: 20,
    color: 'color-primary-500',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Account;
