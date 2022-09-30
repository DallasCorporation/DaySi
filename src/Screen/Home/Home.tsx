import { Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import api from '../../api';
import { image_1 } from '../../constants/images';
import { image_2 } from '../../constants/images';
import { image_3 } from '../../constants/images';
import { image_4 } from '../../constants/images';

import { white, windowWidth } from '../../constants/theme';
import IconFont from '../../iconfont';

const Home = () => {

    const user = useSelector((state: any) => state.user);
    const [categories, setCategories] = useState<any>([]);
    const fetch = async () => {
        await api.category.getAll().then(res => {
            setCategories(res);
            setCategories(res);
            console.log(res);
        });
    };

    useEffect(() => {
        fetch();
    }, []);

    let mainCategory = [
        {
            name: 'Parrucchieri',
            desc: 'Hai bisogno di una\nspuntatina ai capelli?',
            img: image_1,
        },
        {
            name: 'Estetista',
            desc: 'Ti si sono rotte le unghie?\nNessun problema!',
            img: image_2,
        },
        {
            name: 'Yoga',
            desc: "Ti serve po' di \nginnastca rilassante",
            img: image_3,
        },
        {
            name: 'Personal trainer',
            desc: 'Vuoi un aiuto per \nmetterti in forma?',
            img: image_4,
        },
    ];
    return (
        <SafeAreaView style={styles().container}>
            <ScrollView style={styles().container} persistentScrollbar={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles().titleHome}>Hey {user.name}👋</Text>
                <Text style={styles().subtitleHome}>Stai cercando un servizio?</Text>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {categories.map((el: any) =>
                        <View key={el._id} style={styles().containerHome}>
                            <TouchableOpacity style={styles().buttonHome}>
                                <IconFont name={el.icon} size={38} />
                            </TouchableOpacity>
                            <Text category='s2' style={styles().textButton}>{el.name}</Text>
                        </View>
                    )}
                </ScrollView>
                <ScrollView style={{ marginTop: 15 }}>
                    {mainCategory.map(el =>
                        <View key={el.name} style={styles().mainCategory}>
                            <View>
                                <Text style={{ fontSize: 25, color: '#9C841C8C', fontWeight: 'bold' }}>{el.name}</Text>
                                <Text style={{ fontSize: 15, color: 'black' }}>{el.desc}</Text>
                                <TouchableOpacity style={{ marginTop: 10, width: 138, height: 39, backgroundColor: '#DAB741', borderRadius: 10, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: 'white' }}>Cerca ora</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={el.img} style={{ width: 140, height: 140 }} />
                            </View>
                        </View>
                    )}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: white,
    },
    titleHome: {
        marginLeft: 20,
        fontSize: 30,
    },
    subtitleHome: {
        marginLeft: 20,
        fontSize: 22,
        marginBottom: 30,
    },
    buttonHome: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: 84,
        height: 84,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:
    {
        marginTop: 5,
        maxWidth: 84,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerHome: {
        marginHorizontal: 10,
    },
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
    }
});
export default Home;
