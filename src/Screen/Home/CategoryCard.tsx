import { Layout, Text } from '@ui-kitten/components';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { windowWidth } from '../../constants/theme';
import { useSelector } from 'react-redux';

const CategoryCard = ({ element }: any) => {
    const lightTheme = useSelector((state: any) => state.user.lightTheme);

    return (
        <Layout level={lightTheme? '1': '4'} key={element.name} style={styles(lightTheme).mainCategory}>
            <Layout  level={lightTheme? '1': '4'}>
                <Text style={styles().title}>{element.name}</Text>
                <Text style={styles().description}>{element.desc}</Text>
                <TouchableOpacity style={styles().button}>
                    <Text style={styles().buttonText}>Cerca ora</Text>
                </TouchableOpacity>
            </Layout >
            <Layout  level={lightTheme? '1': '4'} style={{ alignItems: 'flex-end' }}>
                <Image source={element.img} style={styles().image} />
            </Layout>
        </Layout>
    );
};
export default CategoryCard;


const styles = (lightTheme) => StyleSheet.create({
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
    title: { fontSize: 25, color: '#9C841C8C', fontWeight: 'bold' },
    description: { fontSize: 15, },
    button: { marginTop: 10, width: 138, height: 39, backgroundColor: '#DAB741', borderRadius: 10, justifyContent: 'center' },
    buttonText: { textAlign: 'center', color: 'white' },
    image: { width: 140, height: 140 },
});
