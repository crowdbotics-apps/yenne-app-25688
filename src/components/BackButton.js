import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Feather name="chevron-left" size={24} color="white" />
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 20,
    alignSelf: 'flex-start',
  },
});

export default BackButton;
