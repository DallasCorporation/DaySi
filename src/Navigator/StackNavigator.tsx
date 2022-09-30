import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './BottomNav';
import { useNavigation, useRoute } from '@react-navigation/native';


const Stack = createStackNavigator();

const StackNavigator = () => {
    const navigation = useNavigation();

    const route = useRoute();
    console.log(route, navigation);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={MyTabs} />
        </Stack.Navigator>
    );
};

export { StackNavigator };
