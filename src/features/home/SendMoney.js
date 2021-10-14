import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import * as accountActions from '../Accounts/redux/actions';
import SendMoneyComponent from './components/SendMoneyComponent';
import { errorsToString } from '../../utils/helpers';
import { sendMoney } from '../Accounts/redux/api';

const SendMoney = ({ navigation }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(
      actions.getProfiles({ payload: { params: 'with_balance_remove=true' } }),
    );
  }, []);

  const handleSendMoney = ({ amount, recipient, callBack }) => {
    if (!amount) {
      alert('Amount required');
      return;
    }
    if (!recipient) {
      alert('Source email required!');
      return;
    }

    sendMoney({
      source_id: 'self',
      amount: amount * 100, // convert to cents
      recipient,
    })
      .then(res => {
        setShowSuccessModal(true);
        callBack && callBack();
        dispatch(accountActions.getBalance());
      })
      .catch(error => {
        alert(errorsToString(error?.response?.data));
      });
  };

  return (
    <SendMoneyComponent
      profiles={profiles}
      showSuccessModal={showSuccessModal}
      setShowSuccessModal={setShowSuccessModal}
      handleSendMoney={handleSendMoney}
    />
  );
};

export default SendMoney;
