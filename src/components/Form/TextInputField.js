import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { OutlinedTextField } from 'rn-material-ui-textfield';

const TextInputField = ({ label, onChangeText, value, ...rest }) => {
  const theme = useTheme();
  return (
    <View style={styles.input}>
      <OutlinedTextField
        value={value}
        style={styles.inputText}
        placeholderTextColor="#666"
        onChangeText={onChangeText}
        tintColor={theme['color-primary-500']}
        label={label}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 3,
  },
  inputText: { color: '#333' },
});
export default TextInputField;
