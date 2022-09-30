import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import IconFont from '../iconfont';
import { Divider, Text } from '@ui-kitten/components';

const Settings = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <IconFont name={'i-riqi'} size={24} />
                    <Text category="s1" >Generali</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <IconFont name={'i-riqi'} size={24} />
                    <Text category="s1" >Generali</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <IconFont name={'i-riqi'} size={24} />
                    <Text category="s1" >Generali</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <IconFont name={'i-riqi'} size={24} />
                    <Text category="s1" >Generali</Text>
                </View>

            </View>
            <View style={styles.container}>
                <Text>Privacy</Text>
            </View>
        </SafeAreaView>
    );
};
export default Settings;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});
