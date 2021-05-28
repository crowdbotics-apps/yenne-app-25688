import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import cardValidator from 'card-validator';
import YNButton from '../../../components/YNButton';
import { cardNumberFormatter, expirationDateFormatter } from '../formatters';
import CardIcon from '../../../components/CardIcon';
import TextInputField from '../../../components/Form/TextInputField';
import AlertModal from '../../../components/AlertModal';

const CardForm = ({ handleSubmit, isLoading, setFormText }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const onSubmit = () => {
    setErrors({});
    // validation
    const errors = {};
    if (!cardValidator.number(cardNumber.trim()).isValid) {
      errors.cardNumber = 'Please enter a valid card';
    }
    if (!cardValidator.expirationDate(cardExpiry).isValid) {
      errors.cardExpiry = 'Expiry date';
    }
    if (!cardValidator.cardholderName(cardHolder).isValid) {
      errors.cardHolder = 'Please enter a valid name';
    }
    const { card } = cardValidator.number(cardNumber);
    const isAmex = card?.type === 'american-express';
    const cvvLength = isAmex ? 4 : 3;
    if (cardValidator.cvv(cvv, cvvLength).isValid) {
      errors.cvv = 'Invalid CVV';
    }
    setErrors(errors);
    /**
     *  "number": "4263982640269299",
    "holder": "Paul K.",
    "cvv": "123",
    "expiry": "06/24",
     */
    handleSubmit({
      number: cardNumber,
      holder: cardHolder,
      cvv,
      expiry: cardExpiry,
      is_primary,
    });
  };
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvv, setCvv] = useState();
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(true);
  const [is_primary, setIsPrimary] = useState(false);

  return (
    <View style={styles.formWrapper}>
      <View>
        <TextInputField
          onChangeText={text => {
            setCardNumber(cardNumberFormatter(cardNumber, text));
            setErrors({ ...errors, cardNumber: '' });
          }}
          label="Card number"
          autoCapitalize="none"
          error={errors.cardNumber}
          value={cardNumber}
          formatter={cardNumberFormatter}
          renderRightAccessory={() => <CardIcon cardNumber={cardNumber} />}
        />
      </View>
      <View>
        <TextInputField
          onChangeText={text => setCardHolder(text)}
          label="Card holder"
          error={errors.cardHolder}
          value={cardHolder}
        />
      </View>
      <View style={[styles.row, styles.flexOne]}>
        <View style={{ flex: 2 }}>
          <TextInputField
            onChangeText={text =>
              setCardExpiry(expirationDateFormatter(cardExpiry, text))
            }
            label="MM YY"
            autoCapitalize="none"
            error={errors.cardExpiry}
            value={cardExpiry}
          />
        </View>
        <View style={styles.flexOne}>
          <TextInputField
            onChangeText={text => setCvv(text)}
            label="CVV"
            autoCapitalize="none"
            error={errors.cvv}
            value={cvv}
          />
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <YNButton
          loading={isLoading}
          onPress={() => {
            onSubmit();
          }}
          title="SUBMIT"
        />
      </View>
      <AlertModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
        description="Would you like to create a business account?"
      >
        <View style={[styles.row, styles.spaceBetween]}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={[
              styles.button,
              { color: theme['color-primary-100'], padding: 10 },
            ]}
          >
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: theme['color-primary-100'],
              }}
            >
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsPrimary(true);
              setModalVisible(false);
              setFormText('Add new card for business');
            }}
            style={[
              styles.button,
              { backgroundColor: theme['color-primary-500'], padding: 10 },
            ]}
          >
            <Text style={{ textAlign: 'center', fontWeight: '500' }}>Yes</Text>
          </TouchableOpacity>
        </View>
      </AlertModal>
    </View>
  );
};

const themedStyles = StyleService.create({
  formWrapper: {
    marginTop: 20,
  },
  inputWrapper: {
    marginTop: 30,
  },
  contentWrapper: {
    paddingTop: 20,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  tabBtn: {
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'color-primary-100',
  },
  spaceBetween: { justifyContent: 'space-between' },
  alignItemsCenter: { alignItems: 'center' },
  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
  button: {
    borderRadius: 50,
    minWidth: 100,
  },
});

export default CardForm;
