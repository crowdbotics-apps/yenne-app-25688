import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import cardValidator from 'card-validator';
import TextInputField from '../../components/Form/TextInputField';
import YNButton from '../../components/YNButton';
import { cardNumberFormatter, expirationDateFormatter } from './formatters';
import CardIcon from '../../components/CardIcon';

const CardForm = () => {
  const styles = useStyleSheet(themedStyles);
  const onSubmit = () => {
    setErrors({});
    // validation
    const errors = {};
    if (!cardValidator.number(cardNumber.trim()).isValid) {
      errors.cardNumber = 'Please enter a valid card';
      //   return;
    }
    if (!cardValidator.expirationDate(cardExpiry).isValid) {
      errors.cardExpiry = 'Expiry date';
      //   return;
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
    console.warn(errors);
    setErrors(errors);
  };
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvv, setCvv] = useState();
  const [errors, setErrors] = useState({});

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
          onPress={() => {
            onSubmit();
          }}
          title="SUBMIT"
        />
      </View>
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
});

export default CardForm;
