import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '../Loading';
import React from 'react';
import Profile from '../Screen/Profile/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';

Icon.loadFont();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: '#86888D',
        tabBarActiveTintColor: '#FFFFFF',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: mainGreen,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'home'}
              style={styles(focused).iconColor}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Near Me"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'home'}
              size={25}
              style={styles(focused).iconColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'home'}
              size={25}
              style={styles(focused).iconColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Loading"
        component={Loading}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'home' : 'home'}
              size={25}
              style={styles(focused).iconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = (focused) => StyleSheet.create({
  iconColor: {
    color: focused ? '#FFFFFF' : '#86888D',
  },
});


export default MyTabs;
