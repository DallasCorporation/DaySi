import { Text } from '@ui-kitten/components';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { windowWidth } from '../../constants/theme';

const CategoryCard = ({ element }: any) => {

    return (
        <View key={element.name} style={styles().mainCategory}>
            <View>
                <Text style={styles().title}>{element.name}</Text>
                <Text style={styles().description}>{element.desc}</Text>
                <TouchableOpacity style={styles().button}>
                    <Text style={styles().buttonText}>Cerca ora</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={element.img} style={styles().image} />
            </View>
        </View>
    );
};
export default CategoryCard;


const styles = () => StyleSheet.create({
    mainCategory: {
        width: windowWidth - 50,
        backgroundColor: 'white',
        height: 165,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20,
        padding: 25,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    title: { fontSize: 25, color: '#9C841C8C', fontWeight: 'bold' },
    description: { fontSize: 15, color: 'black' },
    button: { marginTop: 10, width: 138, height: 39, backgroundColor: '#DAB741', borderRadius: 10, justifyContent: 'center' },
    buttonText: { textAlign: 'center', color: 'white' },
    image: { width: 140, height: 140 },
});
