import { Icon, Text } from '@ui-kitten/components';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import IconFont from '../iconfont';
import React from 'react';

const SettingsCard = ({ name, icon, onClick, color }: any) => {
    return (
        <TouchableOpacity style={styles.containerWhite} onPress={onClick}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal:20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <IconFont name={icon} size={24} style={{ marginRight: 15 }} color={color ? color : "#333333"} />
                    <Text category="s1" >{name}</Text>
                </View>
                <Icon fill="#000000" name="arrow-right" style={styles.icon} />
            </View>
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
        backgroundColor: 'white',
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
