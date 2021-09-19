import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Spinner } from '@ui-kitten/components';

const LoadingIndicator = props => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);

export const YNSmallButton = ({
  title,
  loading,
  AccessorIcon,
  onPress,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: '#F1C80D' }, style]}
      status="primary"
      onPress={onPress}
      accessoryLeft={
        loading ? LoadingIndicator : AccessorIcon ? AccessorIcon : null
      }
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    margin: 2,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YNSmallButton;
