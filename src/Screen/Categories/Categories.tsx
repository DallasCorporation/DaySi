import { Autocomplete, AutocompleteItem, Icon } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image, ImageBackground } from 'react-native';
import api from '../../api';

const Categories = () => {

    const [categories, setCategories] = useState<any>();
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<any>(categories);

    const fetch = async () => {
        await api.category.getAll().then(res => {
            setCategories(res);
            setData(res);
            console.log(res);
        });
    };
    useEffect(() => {
        fetch();
    }, []);

    const filter = (item: any, query: string) => item.name.toLowerCase().includes(query.toLowerCase());



    const onSelect = (index: number) => {
        setValue(data[index].name);
    };

    const onChangeText = (query: any) => {
        setValue(query);
        setData(categories.filter((item: any) => filter(item, query)));
    };

    const clearInput = () => {
        setValue('');
        setData(categories);
    };

    const search = () => {
        console.log(value);
        setData(categories);
    };

    const renderOption = (item: any, index: number) => (
        <AutocompleteItem
            key={index}
            title={item.name}
        // accessoryLeft={StarIcon}
        />
    );

    const renderCloseIcon = (props: any) => (
        <View style={{ flexDirection: 'row' }}>
            {value.length > 0 &&
                <TouchableOpacity onPress={clearInput}>
                    <Icon fill="#ff0000" {...props} name="close" />
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={search}>
                <Icon {...props} name="search" />
            </TouchableOpacity>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <Autocomplete
                style={styles.autoComplete}
                placeholder="Cerca una categoria"
                value={value}
                accessoryRight={renderCloseIcon}
                onChangeText={onChangeText}
                onSelect={onSelect}
            >
                {Object(data).length > 0 && data.map(renderOption)}
            </Autocomplete>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    style={styles.flatList}
                    columnWrapperStyle={styles.columns}
                    data={categories}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    renderItem={(el) =>
                        <TouchableOpacity style={styles.card}>
                            <View >
                                <ImageBackground
                                    resizeMode="cover"
                                    imageStyle={{ borderRadius: 6}}
                                    style={{ width: "100%", height: 80, borderTopRightRadius: 6, borderTopLeftRadius: 6, overflow:"hidden" }} source={{ uri: el.item.image }} >
                                    <View style={styles.darkMask} />

                                </ImageBackground>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000', textAlign: 'center', marginTop: 3 }}>{el.item.name}</Text>
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
        marginTop: 32,
        flex: 1,
    },
    flatList: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    columns: {

        marginBottom: 20,
        justifyContent: 'space-between',
    },
    autoComplete: {
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    card: {
        flex: 0.48,
        borderRadius: 6,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    darkMask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});
export default Categories;
