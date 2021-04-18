import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CancelButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Feather name="x" size={24} color="white" />
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: 15,
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingTop: 0,
    top: hp('7%'),
  },
});

export default CancelButton;
