import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Accounts/redux/actions';

import { errorsToString } from '../../../utils/helpers';
import BankAccountsComponent from '../components/BankAccountsComponent';

const BankAccounts = ({ navigation }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state =>
    state.fundingSource.fundingSources
      ?.filter(item => !item.removed)
      .filter(i => i.type !== 'balance'),
  );
  const isLoading = useSelector(state => state.fundingSource.isLoading);
  const isDeleting = useSelector(state => state.fundingSource.isDeleting);
  const showDepositSuccess = useSelector(
    state => state.fundingSource.showDepositSuccess,
  );
  const isLoadingDeposit = useSelector(
    state => state.fundingSource.isLoadingDeposit,
  );
  const [selectedFundingSource, setSelectedFundingSource] = useState(0);
  const [successModalVisible, setSuccessModalVisible] = React.useState(true);
  const [confirmModalVisible, setConfirmModalVisible] = React.useState(false);
  const [depositSuccess, setDepositSuccess] = useState(false);
  const [deleteSourceId, setDeleteSourceId] = useState();
  const [amount, setAmount] = useState('');

  useEffect(() => {
    dispatch(actions.listFundingSource());
    setSuccessModalVisible(false);
  }, []);

  const handleShowDeleteConfirmationModal = id => {
    setConfirmModalVisible(true);
    setDeleteSourceId(id);
  };

  const handleDepositSuccessModal = () => {
    dispatch(actions.depositSuccess());
  };

  const handleDelete = id => {
    dispatch(
      actions.deleteFundingSource({
        payload: { funding_source_id: id },
        onSuccess: data => {
          dispatch(actions.listFundingSource());
          setConfirmModalVisible(false);
          setSuccessModalVisible(true);
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
  };

  const handleDeposit = () => {
    if (!amount) {
      alert('Amount required');
      return;
    }
    if (cards.length === 0) {
      alert('You must have and active account to deposit.');
      return;
    }

    dispatch(
      actions.depositToBalance({
        payload: {
          source_id: cards[selectedFundingSource].id,
          amount,
          destination_id: 'self',
        },
        onSuccess: data => {
          setDepositSuccess(true);
          dispatch(actions.getBalance());
        },
        onError: error => {
          alert(errorsToString(error?.response?.data));
        },
      }),
    );
  };

  return (
    <>
      <BankAccountsComponent
        navigation={navigation}
        cards={cards}
        handleDelete={handleShowDeleteConfirmationModal}
        isLoading={isLoading}
        isDeleting={isDeleting}
        isLoadingDeposit={isLoadingDeposit}
        setSelectedFundingSource={setSelectedFundingSource}
        selectedFundingSource={selectedFundingSource}
        successModalVisible={successModalVisible}
        setSuccessModalVisible={setSuccessModalVisible}
        confirmModalVisible={confirmModalVisible}
        setConfirmModalVisible={setConfirmModalVisible}
        handleConfirmedDelete={handleDelete}
        deleteSourceId={deleteSourceId}
        amount={amount}
        setAmount={setAmount}
        depositSuccess={depositSuccess}
        setDepositSuccess={setDepositSuccess}
        handleDeposit={handleDeposit}
        handleDepositSuccessModal={handleDepositSuccessModal}
        showDepositSuccess={showDepositSuccess}
      />
    </>
  );
};

export default BankAccounts;
