import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logOut } from '../auth/redux/actions';
import { useDispatch } from 'react-redux';
import routes from '../../navigator/routes';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(logOut());
          navigation.navigate(routes.authOption);
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
