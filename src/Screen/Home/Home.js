import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import { image_1 } from '../../../constants/images';
import { image_2 } from '../../../constants/images';
import { image_3 } from '../../../constants/images';
import { image_4 } from '../../../constants/images';
import { cultured, mainGreen, windowHeight, windowWidth } from '../../../constants/theme';

const Home = () => {

    let array = ["Parrucchieri", "Estetista", "Yoga", "Vedi tutte", "Medico", "Armando"]
    let cat = [
        {
            name: "Parrucchieri",
            desc: "Hai bisogno di una\nspuntatina ai capelli?",
            img: image_1,
        },
        {
            name: "Estetista",
            desc: "Ti si sono rotte le unghie?\nNessun problema!",
            img: image_2,
        },
        {
            name: "Yoga",
            desc: "Ti si sono rotte le palle?\nNessun problema!",
            img: image_3,
        },
        {
            name: "Personal trainer",
            desc: "Ti si sono rotte le palle?\nNessun problema!",
            img: image_4,
        },
    ]
    return (
        <SafeAreaView style={styles().container}>
            <ScrollView style={styles().container} persistentScrollbar={true} >

                <Text style={{ height: 110 }}> </Text>
                <Text style={styles().titleHome}>Bentornato, osvaldo!</Text>
                <Text style={styles().subtitleHome}>Stai cercando un servizio?</Text>
                <ScrollView horizontal3>
                    {array.map(el =>
                        <TouchableOpacity style={styles().containerHome}>
                            <View style={styles().buttonHome}>
                                <Text></Text>
                                <Text></Text>
                                <Text></Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', textAlign: "center" }}>{el}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>

                <ScrollView>
                    {cat.map(el =>
                        <View style={{ width: windowWidth - 50, backgroundColor: 'white', height: 165, alignSelf: 'center', borderRadius: 20, marginBottom: 20, padding: 25,flexDirection:'row' }}>
                            <View>
                                <Text style={{ fontSize: 25, color: '#9C841C8C', fontWeight: 'bold' }}>{el.name}</Text>
                                <Text style={{ fontSize: 15, color: 'black' }}>{el.desc}</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginTop: 10, padding: 8, fontSize: 15, width: 138, height: 39, backgroundColor: '#DAB741', borderRadius: 10, textAlign: 'center', color: 'white' }}>Cerca ora</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={el.img} style={{ width: 170, height: 170 }} ></Image>
                            </View>
                        </View>
                    )}

                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainGreen,
    },
    titleHome: {
        marginLeft: 25,
        fontSize: 30,
        fontFamily: "Alegreya",
        color: "white",
    },
    subtitleHome: {
        marginLeft: 25,
        fontSize: 22,
        fontFamily: "Alegreya",
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 30,
    },
    buttonHome: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        width: 70,
        height: 70,
        borderRadius: 20,
    },
    containerHome: {
        margin: 9,
        marginLeft: 25,
        marginBottom: 40,
    },


});

export default Home;