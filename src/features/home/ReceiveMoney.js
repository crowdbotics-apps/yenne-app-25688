import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleService } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import { requestMoney } from '../Accounts/redux/api';
import * as notificationActions from '../Notification/redux/actions';
import { errorsToString } from '../../utils/helpers';
import SendMoneyComponent from './components/SendMoneyComponent';

const ReceiveMoney = ({ navigation }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(
      actions.getProfiles({ payload: { params: 'with_balance_remove=true' } }),
    );
  }, []);

  const handleRequestMoney = ({ amount, recipient, callBack }) => {
    if (!amount) {
      alert('Amount required');
      return;
    }
    if (!recipient) {
      alert('Source email required!');
      return;
    }

    requestMoney({
      source_id: 'self',
      amount: amount * 100, // convert to cents
      recipient,
    })
      .then(res => {
        setShowSuccessModal(true);
        callBack && callBack();
        dispatch(notificationActions.getNotifications());
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
      handleSendMoney={handleRequestMoney}
    />
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

export default ReceiveMoney;
