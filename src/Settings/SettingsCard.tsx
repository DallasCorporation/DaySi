import { Icon, Layout, Text } from '@ui-kitten/components';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import IconFont from '../iconfont';
import React from 'react';
import { useSelector } from 'react-redux';

const SettingsCard = ({ name, icon, onClick, color }: any) => {
    const isLight = useSelector((state: any) => state.user.lightTheme);
    const getColor = () => {
        if (color) { return color; }
        if (isLight) { return '#333333'; }
        return '#FFFFFF';
    };

    return (
        <TouchableOpacity style={styles.containerWhite} onPress={onClick}>
            <Layout style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 8, paddingHorizontal: 20 }}>
                <Layout style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <IconFont name={icon} size={24} style={{ marginRight: 15 }} color={getColor()} />
                    <Text category="s1" >{name}</Text>
                </Layout>
                <Icon fill={isLight ? "#000000" : "#FFFFFF"} name="arrow-right" style={styles.icon} />
            </Layout>
        </TouchableOpacity>
    );
};
export default SettingsCard;

const styles = StyleSheet.create({
    containerWhite: {
        justifyContent: 'center',
        borderRadius: 8,
        flex: 1 / 10,
        marginHorizontal: 20,
        marginVertical: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 1,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    icon: {
        width: 22,
        height: 22,
    },
});
