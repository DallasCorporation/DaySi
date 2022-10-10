import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile/Profile';
import Home from '../Screen/Home/Home';
import Categories from '../Screen/Categories/Categories';
import { mainGreen } from '../constants/theme';
import TabBar from '../TabBar/TabBar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Maps from '../Maps/Maps';
import { Icon, Text } from '@ui-kitten/components';
import IconFont from '../iconfont';
import { useSelector } from 'react-redux';

const MyTabs = (props: any) => {
  const IconSimpleUsageShowcase = (isLight: boolean) => (
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
      <Icon
        style={styles.icon}
        name="menu-2-outline"
        fill={isLight ? "#00F" : "#FFF"}
      />
    </TouchableOpacity >
  );

  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const isLight = useSelector((state: any) => state.user.lightTheme);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerLeft: () => (IconSimpleUsageShowcase(isLight)),
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarStyle: {
            height: 0,
            display: "none"
          },
          headerStyle: { backgroundColor: isLight ? 'white' : 'black' },
          headerTitle: props => <Text category='s1'>{props.children}</Text>,
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          headerRight: () => (<IconFont name={'i-dianpu'} color={isLight ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
        }} />
        <Tab.Screen name="Account" component={Profile}
          options={{
            headerRight: () => (<IconFont name={'i-shouye'} color={isLight ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
          }}
        />
        <Tab.Screen name="Categorie" component={Categories} options={{
          headerRight: () => (<IconFont name={'i-search'} color={isLight ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
        }} />
        <Tab.Screen name="Maps" component={Maps} options={{
          headerRight: () => (<IconFont name={'i-dingwei'} color={isLight ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
        }} />
      </Tab.Navigator>
      <TabBar navigation={navigation} isLight={isLight} />
    </View>
  );
};
export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4253ff",
    justifyContent: 'flex-end',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  iconFont: {
    marginRight: 15,
  },
});
