
import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import api from '../../api';
import { image_1 } from '../../constants/images';
import { image_2 } from '../../constants/images';
import { image_3 } from '../../constants/images';
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
        setLight(user.lightTheme);
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
        // {
        //     name: 'Personal trainer',
        //     desc: 'Vuoi un aiuto per \nmetterti in forma?',
        //     img: image_4,
        // },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles(light).container} persistentScrollbar={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles(light).titleHome}>Hey {user.name}👋</Text>
                <Text style={styles(light).subtitleHome}>Stai cercando un servizio?</Text>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {categories.map((el: any) =>
                        <TouchableOpacity key={el._id} style={styles(light).containerHome}>
                            <Layout level={light ? '1' : '4'} style={styles(light).buttonHome}>
                                <IconFont name={el.icon} size={38} color={!light ? "#FFFFFF" : "#000000"} />
                            </Layout>
                            <Text category="s2" style={styles(light).textButton}>{el.name}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
                <ScrollView style={{ paddingTop: 15 }}>
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
        backgroundColor: light ? 'rgba(255,255,255,0.05)' : '#181a20',
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
        // backgroundColor: 'rgba(255,255,255,0.9)',
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
