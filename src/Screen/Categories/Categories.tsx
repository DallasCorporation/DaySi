import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { mainGreen } from '../../constants/theme';

const Categories = () => {
    useEffect(() => {
        // api.category.getAll().then()
    }, [])

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
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{  fontSize: 30, marginLeft: 25 }}>Categorie</Text>
            <View style={{ backgroundColor: 'white', margin: 25, height: 45, borderRadius: 10, marginBottom: 25 }}>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 10 }}>Categorie trovate per: Bologna</Text>
            </View>

            <SafeAreaView style={{ flex: 1 }}>

                <FlatList style={{ marginLeft: 25 }}
                    contentContainerStyle={{ padding: 15 }}
                    data={cate}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    renderItem={(el) =>
                        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, marginBottom: 25 }}>

                            <View style={{
                                width: 153, height: 130, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20,
                            }}>
                                <View>
                                    <View style={{ marginLeft: 14, marginRight: 14, marginTop: 10, width: 125, height: 93, backgroundColor: '#DAB701', borderRadius: 10 }} />
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{el.item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </SafeAreaView>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainGreen,
    },

});
export default Categories;
