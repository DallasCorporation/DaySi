import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from '../Screen/Profile/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';
import Access from '../Access';
import IconFont from '../iconfont';

Icon.loadFont();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: '#86888D',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle:{
          fontSize:14,
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: mainGreen,
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconFont color={focused ? '#FFFFFF' : '#86888D'} name="i-dianpu" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Near Me"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconFont color={focused ? '#FFFFFF' : '#86888D'} name="i-dingwei" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconFont color={focused ? '#FFFFFF' : '#86888D'} name="i-shenhe" size={26} />

          ),
        }}
      />

      {/* <Tab.Screen
        name="Access"
        component={Access}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconFont color={focused ? '#FFFFFF' : '#86888D'} name="i-dianpu" size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default MyTabs;
