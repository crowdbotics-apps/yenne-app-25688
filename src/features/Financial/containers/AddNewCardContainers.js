import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../../../navigator/routes';
import { errorsToString } from '../../../utils/helpers';
import AddNewCard from '../components/AddNewCard';
import * as actions from '../redux/actions';

const AddNewCardContainers = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.financial.listCardsLoading);
  const handleSubmit = data => {
    dispatch(
      actions.addCard({
        onSuccess: res => {
          dispatch(actions.listCards());
          Alert.alert('Success', 'Card added successfully!', [
            {
              text: 'Return',
              onPress: () => {
                navigation.navigate(routes.financialAccount);
              },
            },
          ]);
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
        data,
      }),
    );
  };
  return (
    <AddNewCard
      handleSubmit={handleSubmit}
      navigation={navigation}
      isLoading={isLoading}
    />
  );
};

export default AddNewCardContainers;
