import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';
import BackgroundWrapper from '../../../components/BackgroundWrapper';
import YNHeaderTitle from '../../../components/HeaderTitle';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import ArrowDownIcon from '../../../assets/images/ArrowDownIcon';
import YTTab from '../../../components/YTTab';
import YNCard from '../../../components/YNCard/YNCard';
import YNCardTitle from '../../../components/YNCard/YNCardTitle';
import YNButton from '../../../components/YNButton';
import BankCard from './BankCard';
import YNModal from '../../../components/YNModal';

const BankAccountsComponent = ({
  navigation,
  cards = [],
  handleDelete,
  handleUpdateCard,
  isLoading,
  isDeleting,
  selectedFundingSource,
  setSelectedFundingSource,
  successModalVisible,
  setSuccessModalVisible,
  confirmModalVisible,
  setConfirmModalVisible,
  handleConfirmedDelete,
  deleteSourceId,
  amount,
  setAmount,
  isLoadingDeposit,
  depositSuccess,
  setDepositSuccess,
  handleDeposit,
  handleDepositSuccessModal,
  showDepositSuccess,
}) => {
  const styles = useStyleSheet(themedStyles);

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {successModalVisible ? (
        <YNModal
          success
          modalVisible={successModalVisible}
          setModalVisible={() => setSuccessModalVisible(!successModalVisible)}
          description="Your account has been deleted!"
        />
      ) : null}
      {showDepositSuccess ? (
        <YNModal
          success
          modalVisible={showDepositSuccess}
          setModalVisible={() => handleDepositSuccessModal()}
          description="Your funds are on the way!"
        />
      ) : null}
      {confirmModalVisible ? (
        <YNModal
          modalVisible={confirmModalVisible}
          setModalVisible={() => setConfirmModalVisible(false)}
          description="Would you like to delete your account?"
          actionable
          onOkyPress={() => {
            handleConfirmedDelete(deleteSourceId);
          }}
        />
      ) : null}
      <BackgroundWrapper showBackButton>
        <View style={styles.container}>
          <Spinner
            visible={isLoading || isDeleting}
            textContent={'Loading...'}
            textStyle={{ color: 'white' }}
          />

          <YNHeaderTitle category="h3" title="Bank accounts" />

          <YNCard style={styles.mainWrapper}>
            <YNCardTitle title="My accounts" />
            {cards.length === 0 && !isLoading ? (
              <Text style={{ textAlign: 'center', padding: 24 }}>
                No Record Found!
              </Text>
            ) : null}
            {cards.map((item, index) => {
              if (!showAll && index !== 0) return null;
              return (
                <BankCard
                  key={'list-card-' + index}
                  index={index}
                  card={item}
                  handleDelete={handleDelete}
                  handleUpdateCard={() => {}}
                  selectedFundingSource={selectedFundingSource}
                  setSelectedFundingSource={setSelectedFundingSource}
                />
              );
            })}
            <View
              style={[
                styles.flexOne,
                styles.alignItemsCenter,
                styles.viewMoreWrapper,
              ]}
            >
              <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                <ArrowDownIcon />
              </TouchableOpacity>
            </View>
          </YNCard>
          <YNCard>
            <YTTab amount={amount} setAmount={setAmount} />
            <View style={styles.buttonsWrapper}>
              <YNButton
                onPress={handleDeposit}
                title="CONFIRM"
                loading={isLoadingDeposit}
              />
            </View>
          </YNCard>
        </View>
      </BackgroundWrapper>
    </>
  );
};

const themedStyles = StyleService.create({
  cardHeader: { paddingTop: hp('2%') },
  cardContent: { marginLeft: 10 },
  cardIcon: {
    alignItems: 'center',
  },
  cardWrapper: { marginTop: hp('6%') },
  viewMoreWrapper: { marginTop: hp('3%') },
  alignItemsCenter: { alignItems: 'center' },
  row: { flexDirection: 'row' },
  flexOne: { flex: 1 },
  justifyContent: { justifyContent: 'space-between' },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  mainWrapper: {
    marginTop: hp('5%'),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: wp('4.5%'),
    paddingVertical: wp('2%'),
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    shadowColor: 'black',
  },
  buttonsWrapper: {
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default BankAccountsComponent;
