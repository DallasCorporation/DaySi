import { Button, Layout, Text } from '@ui-kitten/components';
import { Image, Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { windowWidth } from '../../constants/theme';
import { useSelector } from 'react-redux';

const CategoryCard = ({ element }: any) => {
    const lightTheme = useSelector((state: any) => state.user.lightTheme);

    return (
        <Layout level={lightTheme ? '1' : '4'} key={element.name} style={styles(lightTheme).mainCategory}>
            <View >
                <Text style={styles(lightTheme).title}>{element.name}</Text>
                <Text style={styles(lightTheme).description}>{element.desc}</Text>
                <Button status='primary' style={styles(lightTheme).button}>Cerca ora</Button>
            </View >
            <View style={{ alignItems: 'flex-end' }}>
                <Image source={element.img} style={styles(lightTheme).image} />
            </View>
        </Layout>
    );
};
export default CategoryCard;


const styles = (lightTheme: boolean) => StyleSheet.create({
    mainCategory: {
        // backgroundColor: 'white',
        width: windowWidth - 50,
        height: 165,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: lightTheme ? '#0F0F0F' : '#FFF',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    title: { fontSize: 25, fontWeight: 'bold' },
    description: { fontSize: 15, },
    button: {
        marginTop: 10,
        width: 138,
        height: 39,
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonText: { textAlign: 'center', color: 'white' },
    image: { width: 140, height: 140 },
});
