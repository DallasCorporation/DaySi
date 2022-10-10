
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Icon, Layout, Text, Toggle } from '@ui-kitten/components';
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import avatars from '../assets/exportAvatar';
import Booking from '../Booking/Booking';
import Chat from '../Chat/Chat';
import IconFont from '../iconfont';
import { changeTheme, logout } from '../reducer/userSlice';
import MyTabs from './BottomNav';
import Settings from '../Settings/Settings';
import api from '../api';


const renderAvatar = (Item: any) => <Item width={70} height={90} />;

const CustomDrawer = (props: any) => {
    const dispatch = useDispatch();
    const updateTheme = async (light: boolean) => {
        dispatch(changeTheme(light));
        await api.user.updateTheme(user._id, { lightTheme: light });
    };
    const { user, toggleTheme, light } = props;
    return (
        <Layout style={{ flex: 1 }} level="1">
            <DrawerContentScrollView {...props}>
                <Layout>
                    <Layout style={styles.drawerView} level="3">
                        <View>
                            <Text>{user.name}</Text>
                            <Text>{user.email}</Text>
                        </View>
                        <Avatar style={styles.avatar} size="large" ImageComponent={() => renderAvatar(avatars[user.avatar])} />
                    </Layout>
                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 25, right: 20 }}>
                        <Text>🌞</Text>
                        <Toggle
                            status="basic"
                            checked={!user.lightTheme}
                            onChange={() => {
                                updateTheme(!light);
                                toggleTheme((old: boolean) => !old);
                            }}
                        />
                        <Text>🌚</Text>
                    </View>
                </Layout>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Layout level="3" style={styles.logout}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(logout())}>
                    <IconFont name={'i-exit'} size={24} color={'red'} style={{ marginRight: 25 }} />
                    <Text status="danger">Log Out</Text>
                </TouchableOpacity>
            </Layout>
        </Layout>
    );
};

const IconSimpleUsageShowcase = (navigation: any, light: boolean) => {
    return <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
            name="menu-2-outline"
            fill={light ? '#00F' : '#FFF'}
            style={styles.icon}
        />
    </TouchableOpacity >;
};

const DrawerNavigator = ({ toggleTheme, light }: any) => {
    const user = useSelector((state: any) => state.user);
    const Drawer = createDrawerNavigator();


    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: props => <Text category="s1">{props.children}</Text>,
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                drawerActiveTintColor: light ? '#4253ff' : 'white',
                drawerInactiveTintColor: light ? '#4253ff' : 'white',
            }}
            drawerContent={props => <CustomDrawer light={light} toggleTheme={toggleTheme} user={user} {...props} />}
        >
            <Drawer.Screen component={MyTabs} name="DashBoard"
                options={{
                    drawerIcon: ({ size, color }) => <IconFont name={'i-gaishuai'} size={size} color={color} />,
                }}
            />
            <Drawer.Screen component={Booking} name="Prenotazioni"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerStyle: { backgroundColor: light ? 'white' : 'black' },
                    headerLeft: () => (IconSimpleUsageShowcase(navigation, light)),
                    drawerIcon: ({ size, color }) => <IconFont name={'i-riqi'} size={size} color={color} />,
                    headerRight: () => (<IconFont name={'i-riqi'} color={light ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
                })}
            />
            <Drawer.Screen component={Chat} name="Conversazioni"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerStyle: { backgroundColor: light ? 'white' : 'black' },
                    headerLeft: () => (IconSimpleUsageShowcase(navigation, light)),
                    drawerIcon: ({ size, color }) => <IconFont name={'i-liaotian'} size={size} color={color} />,
                    headerRight: () => (<IconFont name={'i-liaotian'} color={light ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
                })} />
            <Drawer.Screen children={()=> <Settings toggleTheme={toggleTheme}/>}  name="Impostazioni"
                options={({ navigation }) => ({
                    headerShown: true,
                    headerStyle: { backgroundColor: light ? 'white' : 'black' },
                    headerLeft: () => (IconSimpleUsageShowcase(navigation, light)),
                    drawerIcon: ({ size, color }) => <IconFont name={'i-shezhi'} size={size} color={color} />,
                    headerRight: () => (<IconFont name={'i-shezhi'} color={light ? '#4253ff' : 'white'} size={20} style={styles.iconFont} />),
                })} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;

const styles = StyleSheet.create({
    drawerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: '#f6f6f6',
        marginBottom: 20,
    },
    logout: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        right: 0,
        left: 0,
        bottom: 50,
        // backgroundColor: '#f6f6f6',
        padding: 20,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 180,
        height: 180,
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
