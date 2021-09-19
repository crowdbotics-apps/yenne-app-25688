import React from 'react';
import {
  TextInput,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({
  placeholder,
  iconShow,
  secureTextEntry,
  iconName,
  handlePassword,
  showPasswordData,
  handleConPassword,
  keyboardType,
  image,
  fromImage,
  onChange,
  value,
  label,
  ...rest
}) => {
  return (
    <View>
      {label ? (
        <View>
          <Text style={inputStyles.label}>{label}</Text>
        </View>
      ) : null}
      <View style={inputStyles.inputContainer}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={inputStyles.input}
          placeholderTextColor={'#D5AEF8'}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChange}
          defaultValue={value}
          {...rest}
        />
        {iconShow ? (
          <TouchableOpacity
            onPress={showPasswordData ? handlePassword : handleConPassword}
          >
            {image ? (
              <Image source={fromImage} />
            ) : (
              <Icon name={iconName} color="white" size={18} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export const inputStyles = ScaledSheet.create({
  inputContainer: {
    backgroundColor: '#9636ED',
    paddingLeft: '15@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10@s',
    marginTop: '3@s',
    borderRadius: '18@s',
  },
  input: {
    fontSize: '14@s',
    lineHeight: '18@s',
    width: '90%',
    padding: Platform.OS === 'ios' ? 10 : null,
    height: Platform.OS === 'ios' ? 40 : null,
    color: 'white',
  },
  label: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginLeft: 12,
    marginTop: '10@s',
  },
});

export default Input;
