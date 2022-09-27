
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Access/Login';
import SignUp from '../Access/SignUp';

const LoginNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login" 
        screenOptions={{headerShown:false}}>
            <Stack.Screen
                options={{ headerLeft: () => <></> }}
                name="Login"
                component={Login} />
            <Stack.Screen
                options={{ headerLeft: () => <></> }}
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
    );
};
export default LoginNavigation;
