import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Loading from '../Loading';
import React from 'react';
import Profile from '../Screen/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../Screen/Search';
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
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Loading}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              style={{color: focused ? '#FFFFFF' : '#86888D'}}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Near Me"
        component={Loading}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'earth' : 'earth-outline'}
              size={25}
              style={{color: focused ? '#FFFFFF' : '#86888D'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={25}
              style={{color: focused ? '#FFFFFF' : '#86888D'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={25}
              style={{color: focused ? '#FFFFFF' : '#86888D'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
