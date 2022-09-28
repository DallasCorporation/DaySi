import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile/Profile';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';
import TabBar from '../TabBar/TabBar';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Maps from '../Maps/Maps';

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
          tabBarStyle: {
            height: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Account" component={Profile} />
        <Tab.Screen name="Categorie" component={Categories} />
        <Tab.Screen name="Maps" component={Maps}
          options={{
            headerShown: false,
          }} />
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
