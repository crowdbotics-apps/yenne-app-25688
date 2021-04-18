import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logOut } from '../auth/redux/actions';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => dispatch(logOut())}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
