import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { cultured, mainGreen, windowWidth } from '../../constants/theme';

const Categories = () => {
    let cate = [
        {
            name: "Parrucchiere",
        },
        {
            name: "Meccanico",
        },
        {
            name: "Personal Trainer",
        },
        {
            name: "Mental Coach",
        },
        {
            name: "Yoga",
        },
        {
            name: "Estetista",
        },
        {
            name: "a",
        },
        {
            name: "v",
        },
    ]
    return (

        <ScrollView style={styles.container}>
            <Text style={{ height: 110 }}> </Text>

            <Text style={{ color: 'white', fontSize: 30, marginLeft: 25 }}>Categorie</Text>
            <View style={{ backgroundColor: 'white', margin: 25, height: 45, borderRadius: 10, marginBottom: 25 }}>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 10 }}>Categorie trovate per: Bofogna</Text>
            </View>

            <SafeAreaView style={{ flex: 1 }}>

                <FlatList style={{ marginLeft: 25 }}
                    contentContainerStyle={{ padding: 15 }}
                    data={cate}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    renderItem={(el) => {
                        return (
                            <TouchableOpacity style={{ flexDirection: 'row', flex: 1, marginBottom: 25 }}>

                                <View style={{ width: 153, height: 130, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20, elevation: 100, shadowOpacity: '100%', shadowColor: "black", }}>
                                    <View>
                                        <View style={{ marginLeft: 14, marginRight: 14, marginTop: 10, width: 125, height: 93, backgroundColor: '#DAB701', borderRadius: 10 }}></View>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>{el.item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>)
                    }
                    }
                />
            </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainGreen,
    },

});
export default Categories;
