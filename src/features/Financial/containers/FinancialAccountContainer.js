import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';

import FinancialAccountComponent from '../components/FinancialAccountComponent';
import { Alert } from 'react-native';
import routes from '../../../navigator/routes';
import { errorsToString } from '../../../utils/helpers';

const FinancialAccountContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.financial.cards);
  const [selectedCard, setSelectedCard] = useState(0);
  const [amount, setAmount] = useState('');

  const handleDelete = id => {
    dispatch(
      actions.deleteCard({
        data: { id },
        onSuccess: data => {
          dispatch(actions.listCards());
          Alert.alert('Success', 'Card deleted successfully!', [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate(routes.financialAccount);
              },
            },
          ]);
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
  };

  const handleDepositFromCard = () => {
    if (cards.length === 0) {
      alert('Please select a card');
      return;
    }
    if (parseInt(amount, 10) <= 0) {
      alert('Please select an amount');
      return;
    }
    dispatch(
      actions.depositFromCard({
        data: {
          tilled_payment_method_id:
            cards[selectedCard].tilled_payment_method_id,
          cardId: cards[selectedCard].id,
          amount,
        },
        onSuccess: data => {
          dispatch(actions.listCards());
          Alert.alert('Success', 'Deposit successfully!', [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate(routes.financialAccount);
              },
            },
          ]);
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
  };

  const handleUpdateCard = data => {
    dispatch(
      actions.updateCard({
        data,
        onSuccess: data => {
          dispatch(actions.listCards());
          Alert.alert('Success', 'Card updated successfully!', [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate(routes.financialAccount);
              },
            },
          ]);
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
  };
  useEffect(() => {
    dispatch(actions.listCards());
  }, []);

  return (
    <FinancialAccountComponent
      navigation={navigation}
      cards={cards}
      handleDelete={handleDelete}
      handleUpdateCard={handleUpdateCard}
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
      amount={amount}
      setAmount={setAmount}
      handleDepositFromCard={handleDepositFromCard}
    />
  );
};

export default FinancialAccountContainer;
