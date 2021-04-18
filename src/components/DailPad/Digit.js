import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStyleSheet, StyleService, useTheme } from '@ui-kitten/components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

const Digit = ({
  value,
  letters,
  textColor,
  backgroundColor,
  icon,
  ...rest
}) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.digitWrapper,
        backgroundColor ? { backgroundColor: theme[backgroundColor] } : {},
      ]}
      {...rest}
    >
      {value ? (
        <Text style={[styles.text, textColor ? { color: textColor } : {}]}>
          {value}
        </Text>
      ) : (
        <Feather
          name={icon ? icon : 'minus'}
          size={30}
          color={
            value === undefined
              ? 'transparent'
              : textColor
              ? 'white'
              : '#6B6B6B'
          }
        />
      )}
    </TouchableOpacity>
  );
};
const themedStyles = StyleService.create({
  digitWrapper: {
    backgroundColor: 'white',
    height: hp('6.6%'),
    width: hp('6.6%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#6B6B6B',
    fontSize: 30,
    fontWeight: '600',
  },
});
export default Digit;
