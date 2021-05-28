import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';

import FinancialAccountComponent from '../components/FinancialAccountComponent';

const FinancialAccountContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.financial.cards);

  useEffect(() => {
    dispatch(actions.listCards());
  }, []);

  return <FinancialAccountComponent navigation={navigation} cards={cards} />;
};

export default FinancialAccountContainer;
