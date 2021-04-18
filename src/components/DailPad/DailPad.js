import React from 'react';
import { View } from 'react-native';

import Digit from './Digit';

const DigitWrapper = ({ children }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
      }}
    >
      {children}
    </View>
  );
};

const DialPad = ({ onPress }) => {
  return (
    <View>
      <DigitWrapper>
        <Digit value={1} onPress={() => onPress('1')} />
        <Digit value={2} onPress={() => onPress('2')} />
        <Digit value={3} onPress={() => onPress('3')} />
      </DigitWrapper>
      <DigitWrapper>
        <Digit value={4} onPress={() => onPress('4')} />
        <Digit value={5} onPress={() => onPress('5')} />
        <Digit value={6} onPress={() => onPress('6')} />
      </DigitWrapper>
      <DigitWrapper>
        <Digit value={7} onPress={() => onPress('7')} />
        <Digit value={8} onPress={() => onPress('8')} />
        <Digit value={9} onPress={() => onPress('9')} />
      </DigitWrapper>
      <DigitWrapper>
        <Digit />
        <Digit value={'0'} onPress={() => onPress('0')} />
        <Digit value={0} icon="delete" onPress={() => onPress(-1)} />
      </DigitWrapper>
    </View>
  );
};

export default DialPad;
