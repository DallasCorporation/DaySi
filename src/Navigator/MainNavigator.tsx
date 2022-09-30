import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginNavigation from './LoginNavigation';
import DrawerNavigator from './DrawerNavigator';


const MainNavigator = () => {
    const logged = useSelector((state: any) => state.user.logged);
    return (
        <NavigationContainer>
            {logged ? <DrawerNavigator /> : <LoginNavigation />}
        </NavigationContainer>
    );
};
export default MainNavigator;
