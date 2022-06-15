import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { cultured, windowHeight } from '../../../constants/theme';

const Home = () => {
    const suggestedShop = {
        barber: {
            title: 'Barber Shop',
            link: null,
        }, dentist: {
            title: 'Dentist',
            link: null,
        }, hairSaloon: {
            title: 'Hair Saloon',
            link: null,
        }, handCare: {
            title: 'hand Care',
            link: null,
        },
        a0: {
            title: 'Other',
            link: null,
        },
        a1: {
            title: 'Other1',
            link: null,
        },
        a2: {
            title: 'Other2',
            link: null,
        },
    };

    return (
        <SafeAreaView style={styles().container}>
            <ScrollView style={styles().container} persistentScrollbar={true} >
                
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cultured,
    },
});

export default Home;