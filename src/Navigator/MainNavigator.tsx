import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginNavigation from './LoginNavigation';
import DrawerNavigator from './DrawerNavigator';


const MainNavigator = ({ toggleTheme, light }: any) => {
    const logged = useSelector((state: any) => state.user.logged);
    console.log(logged)
    return (
        <NavigationContainer>
            {!logged ? <DrawerNavigator toggleTheme={toggleTheme} light={light} /> : <LoginNavigation />}
        </NavigationContainer>
    );
};
export default MainNavigator;
