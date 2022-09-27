import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { useSelector } from "react-redux";
import MyTabs from "./BottomNav"
import LoginNavigation from "./LoginNavigation"


const MainNavigator = () => {
    const logged = useSelector((state: any) => state.user.logged);
    return (
        <NavigationContainer>
            {logged ? <MyTabs /> : <LoginNavigation />}
        </NavigationContainer>
    )
}
export default MainNavigator