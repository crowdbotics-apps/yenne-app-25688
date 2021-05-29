import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';

import FinancialAccountComponent from '../components/FinancialAccountComponent';
import { Alert } from 'react-native';
import routes from '../../../navigator/routes';
import { errorsToString } from '../../../utils/helpers';

const FinancialAccountContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.financial.cards);

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
    />
  );
};

export default FinancialAccountContainer;
