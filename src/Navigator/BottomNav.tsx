import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile/Profile';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';
import TabBar from '../TabBar/TabBar';
import { StyleSheet, View } from 'react-native';
import Access from '../Access';
import { useNavigation } from '@react-navigation/native';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Maps" component={Access} />
      </Tab.Navigator>
      <TabBar navigation={navigation} />
    </View>
  );
};
export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainGreen,
    justifyContent: 'flex-end',
  },
});
