import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import * as accountActions from '../Accounts/redux/actions';
import SendMoneyComponent from './components/SendMoneyComponent';
import { errorsToString } from '../../utils/helpers';

const SendMoney = ({ navigation }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(actions.getProfiles({ payload: { params: 'with_balance=true' } }));
  }, []);

  const handleSendMoney = ({ amount, fundingSourceId, callBack }) => {
    if (!amount) {
      alert('Amount required');
      return;
    }
    if (!fundingSourceId) {
      alert('Source email required!');
      return;
    }

    dispatch(
      accountActions.depositToBalance({
        payload: {
          source_id: 'self',
          amount,
          destination_id: fundingSourceId,
        },
        onSuccess: data => {
          setShowSuccessModal(true);
          callBack && callBack();
          dispatch(accountActions.getBalance());
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
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
