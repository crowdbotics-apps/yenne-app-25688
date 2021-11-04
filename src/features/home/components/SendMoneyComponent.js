import React from 'react';
import { View, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackgroundWrapper from '../../../components/BackgroundWrapper';
import YNHeaderTitle from '../../../components/HeaderTitle';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import YNButton from '../../../components/YNButton';
import Input from '../../../components/Form/Input';
import { Formik } from 'formik';
import { validateSendMoney } from '../../../utils/validation';
import SearchableDropDown from '../../../components/Form/SearchableDropdown';
import YNModal from '../../../components/YNModal';

const SendMoneyComponent = ({
  navigation,
  profiles,
  setShowSuccessModal,
  showSuccessModal,
  handleSendMoney,
  receive = false,
}) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <Formik
      initialValues={{
        email: '',
        amount: '',
        fundingSourceId: '',
        recipient: '',
      }}
      validate={validateSendMoney}
      onSubmit={(values, { resetForm }) =>
        handleSendMoney({
          ...values,
          callBack: () =>
            resetForm({
              email: '',
              recipient: '',
              amount: '',
              fundingSourceId: '',
            }),
        })
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
        <>
          <YNModal
            success
            modalVisible={showSuccessModal}
            setModalVisible={() => setShowSuccessModal(false)}
            description="Funds sent successfully"
          />
          <BackgroundWrapper
            style={{ backgroundColor: theme['header-background-color'] }}
            showBackButton
          >
            <View style={styles.container}>
              <YNHeaderTitle
                category="h3"
                title={receive ? 'Receive Money' : 'Send money'}
              />
              <Text style={styles.helperText}>
                Send money from your Yenne balance
              </Text>

              <View style={styles.formWrapper}>
                <SearchableDropDown
                  onItemSelect={item => {
                    setFieldValue('email', item.name);
                    setFieldValue('recipient', item.id);
                  }}
                  // containerStyle={{ padding: 5 }}
                  itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#9636ED',
                    color: '#fff',
                  }}
                  itemTextStyle={{ color: '#fff' }}
                  itemsContainerStyle={{ maxHeight: 140 }}
                  items={profiles.map(item => ({
                    id: item.id,
                    name: item?.user?.email,
                  }))}
                  defaultIndex={2}
                  resetValue={false}
                  textInputProps={{
                    placeholder: values.email || 'Email',
                    placeholderTextColor: '#D5AEF8',
                    color: '#fff',
                    underlineColorAndroid: 'transparent',
                    style: {
                      padding: 12,
                      borderRadius: 20,
                      paddingLeft: 25,
                      backgroundColor: '#9636ED',
                    },
                  }}
                  listProps={{
                    nestedScrollEnabled: true,
                  }}
                />

                {errors.email && touched.email && (
                  <View>
                    <Text style={styles.errorText}>{errors.email}</Text>
                  </View>
                )}

                <View style={styles.row}>
                  <View style={{ flex: 1, marginRight: 4 }}>
                    <Input
                      placeholder="USD"
                      placeholderTextColor="#fff"
                      editable={false}
                    />
                  </View>
                  <View style={{ flex: 2.5 }}>
                    <Input
                      secureTextEntry={false}
                      keyboardType="numeric"
                      iconShow={false}
                      placeholder="Type amount"
                      name="amount"
                      onChange={value => {
                        handleChange('amount');
                        setFieldValue(
                          'amount',
                          value?.replace(/[^0-9.,]/g, ''),
                        );
                      }}
                      value={values.amount?.replace(/[^0-9.,]/g, '')}
                    />
                    {errors.amount && touched.amount && (
                      <View>
                        <Text style={styles.errorText}>{errors.amount}</Text>
                      </View>
                    )}
                  </View>
                </View>

                <View style={styles.buttonsWrapper}>
                  <YNButton onPress={handleSubmit} title="CONFIRM" />
                </View>
              </View>
            </View>
          </BackgroundWrapper>
        </>
      )}
    </Formik>
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
    width: wp('80%'),
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
  errorText: {
    color: 'red',
  },
});

export default SendMoneyComponent;
