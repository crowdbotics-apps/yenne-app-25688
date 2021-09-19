import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './tabs/TabBarIcon';
import HomeNavigator from './Home';
import ProfileNavigator from './Profile';
import CardsNavigator from './Cards';
import routes from '../routes';
import BankAccounts from '../../features/Accounts/screens/BankAccounts';

const Tab = createBottomTabNavigator();

export default function AuthNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon {...{ focused, route }} />
        ),
      })}
      tabBarOptions={{
        // activeTintColor: Colors.light.activeTintColor,
        // inactiveTintColor: Colors.light.inactiveTintColor,
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto-Light',
        },
        activeTintColor: 'red',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: 'red',
          paddingBottom: 3,
        },
      }}
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen name="Accounts" component={BankAccounts} />
      <Tab.Screen name="Cards" component={CardsNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Home" component={HomeNavigator} />
    </Tab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#A063D7' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (route?.name === 'Accounts') {
              navigation.navigate(routes.BankAccounts);
            } else {
              navigation.navigate(route);
            }

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 8,
              }}
            >
              <TabBarIcon {...{ route, focused: isFocused }} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Roboto-Light',
                  color: '#fff',
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
