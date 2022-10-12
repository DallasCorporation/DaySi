import { Autocomplete, AutocompleteItem, Icon, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import api from '../../api';
import IconFont from '../../iconfont';

const CategoriesList = ({ isLight }: any) => {
    const [categories, setCategories] = useState<any>();
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<any>(categories);

    const fetch = async () => {
        await api.category.getAll().then(res => {
            setCategories(res);
            setData(res);
        });
    };
    useEffect(() => {
        fetch();
    }, []);

    const filter = (item: any, query: string) => item.name.toLowerCase().includes(query.toLowerCase());

    const onSelect = (index: number) => {
        setValue(data[index].name);
        setData(data[index]);
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
        setData(categories);
    };
    const renderOption = (item: any, index: number) => (
        <AutocompleteItem
            key={index}
            title={item.name}
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
        <View style={{ backgroundColor: isLight ? 'rgba(255,255,255,0.05)' : '#181a20',}}>
            <Layout style={styles(isLight).container} >
                <Autocomplete
                    style={styles(isLight).autoComplete}
                    placeholder="Cerca una categoria"
                    value={value}
                    accessoryRight={renderCloseIcon}
                    onChangeText={onChangeText}
                    onSelect={onSelect}
                >
                    {Object(data).length > 0 && data.map(renderOption)}
                </Autocomplete>
                <FlatList
                    style={styles(isLight).flatList}
                    columnWrapperStyle={styles(isLight).columns}
                    data={categories}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    renderItem={(el) =>
                        <TouchableOpacity style={styles(isLight).card}>
                            <Layout level={isLight ? '1' : '4'} style={styles(isLight).buttonHome}>
                                <IconFont name={el.item.icon} size={38} color={!isLight ? "#FFFFFF" : "#000000"} />
                            </Layout>
                            <Text category="s2" style={styles(isLight).textButton}>{el.item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </Layout>
        </View>
    );
};
export default CategoriesList;


const styles = (isLight: boolean) => StyleSheet.create({
    container: {
        paddingTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        height: '100%',
    },
    autoComplete: {
        borderRadius: 10,
    },
    flatList: {
        paddingTop: 20,
        flex: 1,
    },
    columns: {
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    card: {
        flex: 0.5,
        marginHorizontal: 8,
        borderRadius: 6,
        ...Platform.select({
            ios: {
                shadowColor: isLight ? '#0F0F0F' : '#FFF',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    flex: {
        flex: 1,
    },
    image: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    imageBack: {
        width: '100%',
        height: 80,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        overflow: 'hidden',
    },
    buttonHome: {
        flex: 1,
        height: 84,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        marginTop: 5,
        flex: 1,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
