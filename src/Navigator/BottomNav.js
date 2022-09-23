/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile/Profile';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';
import TabBar from '../TabBar/TabBar';
import { View } from 'react-native';
import Access from '../Access';
import { useNavigation } from '@react-navigation/native';


const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
      backgroundColor: mainGreen,
      justifyContent: 'flex-end',
    }}>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#86888D',
          tabBarActiveTintColor: '#FFFFFF',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          headerShown: false,
          tabBarStyle: {
            height: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          abBarButton: () => null,
          tabBarVisible: false,
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          abBarButton: () => null,
          tabBarVisible: false,
        }} />
        <Tab.Screen name="Categories" component={Categories} options={{
          abBarButton: () => null,
          tabBarVisible: false,
        }} />
        <Tab.Screen name="Maps" component={Access} options={{
          abBarButton: () => null,
          tabBarVisible: false,
        }} />

        {/* <Tab.Screen name="Root" component={Access} options={{ headerShown: false }} /> */}
      </Tab.Navigator>
      <TabBar navigation={navigation} />
    </View>
  );
};
export default MyTabs;
