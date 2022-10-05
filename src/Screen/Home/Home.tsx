
import { Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import api from '../../api';
import { image_1 } from '../../constants/images';
import { image_2 } from '../../constants/images';
import { image_3 } from '../../constants/images';
import { image_4 } from '../../constants/images';

import { black, white } from '../../constants/theme';
import IconFont from '../../iconfont';
import CategoryCard from './CategoryCard';

const Home = () => {
    const user = useSelector((state: any) => state.user);
    const [light, setLight] = useState(false);
    const [categories, setCategories] = useState<any>([]);
    const fetch = async () => {
        await api.category.getAll().then(res => {
            setCategories(res);
            setCategories(res);
        });
    };

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        setLight(user.themeLight);
    }, [user]);

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
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView style={styles(light).container} persistentScrollbar={true}
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
                            <Text category="s2" style={styles().textButton}>{el.name}</Text>
                        </View>
                    )}
                </ScrollView>
                <ScrollView style={{ marginTop: 15 }}>
                    {mainCategory.map(el =>
                        <CategoryCard key={el.name} element={el} />
                    )}
                </ScrollView>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = (light: any) => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: light ? "rgba(255,255,255,0.05)" : 'rgba(0,0,0,0.9)',
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
});
export default Home;
