import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { image_1 } from '../../constants/images';
import { image_2 } from '../../constants/images';
import { image_3 } from '../../constants/images';
import { image_4 } from '../../constants/images';

import { white, windowWidth } from '../../constants/theme';
import IconFont from '../../iconfont';

const Home = () => {

    let array = ['Parrucchieri', 'Estetista', 'Yoga', 'Personal\nTrainer', 'Medico', 'Mental\nCoach'];
    let cat = [
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
                <Text style={styles().titleHome}>Hey Margherita👋</Text>
                <Text style={styles().subtitleHome}>Stai cercando un servizio?</Text>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {array.map(el =>
                        <TouchableOpacity key={el} style={styles().containerHome}>
                            <View style={styles().buttonHome}>
                                <IconFont name="i-yoga" size={32}/>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>{el}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
                <ScrollView>
                    {cat.map(el =>
                        <View key={el.name} style={{ width: windowWidth - 50, backgroundColor: 'white', height: 165, alignSelf: 'center', borderRadius: 20, marginBottom: 20, padding: 25, flexDirection: 'row', elevation: 10, shadowColor: 'white' }}>
                            <View>
                                <Text style={{ fontSize: 25, color: '#9C841C8C', fontWeight: 'bold' }}>{el.name}</Text>
                                <Text style={{ fontSize: 15, color: 'black' }}>{el.desc}</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginTop: 10, padding: 8, fontSize: 15, width: 138, height: 39, backgroundColor: '#DAB741', borderRadius: 10, textAlign: 'center', color: 'white' }}>Cerca ora</Text>
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
        marginLeft: 25,
        fontSize: 30,
    },
    subtitleHome: {
        marginLeft: 25,
        fontSize: 22,
        marginBottom: 30,
    },
    buttonHome: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: 70,
        height: 70,
        borderRadius: 20,
        justifyContent:"center",
        alignItems:"center"
    },
    containerHome: {
        margin: 9,
        marginLeft: 25,
        marginBottom: 40,
    },
});
export default Home;
