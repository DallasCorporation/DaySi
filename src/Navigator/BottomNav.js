import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '../Loading';
import React from 'react';
import Profile from '../Screen/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import Home from '../Screen/Home/Home';

Ionicons.loadFont();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: '#86888D',
        tabBarActiveTintColor: '#FFFFFF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height:90
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              style={styles(focused).iconColor}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Near Me"
        component={Loading}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'earth' : 'earth-outline'}
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
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
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
