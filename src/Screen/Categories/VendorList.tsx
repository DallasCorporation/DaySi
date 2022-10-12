import { Autocomplete, Avatar, Layout, Text } from '@ui-kitten/components';
import { FlatList, Image, ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import IconFont from '../../iconfont';
import avatars from '../../assets/exportAvatar';

// https://www.figma.com/community/file/1156447737717432944
const VendorList = ({ isLight }: any) => {
    const renderAvatar = (Item: any) => <Item width={70} height={70} />;

    const [data, setData] = useState<any>([]);

    const fetch = async () => {
        await api.category.getAll().then(res => {
            setData(res);
        });
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <View style={{ backgroundColor: isLight ? 'rgba(255,255,255,0.05)' : '#181a20' }}>
            <Layout style={styles(isLight).container} >
                {/* <TouchableOpacity style={{ height: 180, width: '50%' }}>
                    <Layout level="4" style={{ borderRadius: 6, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.5, }}>
                            <Image style={{ flex: 1, }} source={{ uri: 'https://reactjs.org/logo-og.png' }} resizeMethod="auto" resizeMode="center" />
                        </View>
                        <View style={{ position: 'absolute', bottom: 0, top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar size="large" ImageComponent={() => renderAvatar(avatars.Avatar0)} />
                        </View>
                        <View style={{ flex: 0.5, marginTop: 60, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Name</Text>
                            <Text>Address</Text>
                        </View>
                    </Layout>
                </TouchableOpacity> */}

                <FlatList
                    style={styles(isLight).flatList}
                    columnWrapperStyle={styles(isLight).columns}
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    renderItem={(el) =>
                        <TouchableOpacity style={styles(isLight).card}>
                            <Layout level={isLight ? '1' : '4'} style={styles(isLight).buttonHome}>
                                <IconFont name={el.item.icon} size={38} color={!isLight ? '#FFFFFF' : '#000000'} />
                            </Layout>
                            <Text category="s2" style={styles(isLight).textButton}>{el.item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </Layout>
        </View>
    );
};
export default VendorList;

const styles = (isLight: boolean) => StyleSheet.create({
    container: {
        paddingTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        height: '100%',
    },
    layout: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
