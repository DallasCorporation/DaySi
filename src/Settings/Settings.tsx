import { Platform, SafeAreaView, Share, StyleSheet, View, Linking } from 'react-native';
import React, { useRef, useState } from 'react';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import SettingsCard from './SettingsCard';
import FlagDrawer from './FlagDrawer';
const Settings = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const bottomSheetRef = useRef<any>(null);
    const [status, setStatus] = useState(-1);

    const openDrawerLanguage = () => {
        bottomSheetRef.current?.snapToIndex(0);
        setStatus(0);
    };
    const close = () => {
        bottomSheetRef.current?.close();
        setStatus(-1);
    };
    const share = async () => {
        try {
            const result = await Share.share({
                message:
                    'DaySi | Una piattaforma che semplifica le prenotazioni di servizi',
                url: 'cesenalab.it/portfolio-startup/daysi/',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const mailTo = () => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description');

    return (
        <SafeAreaView style={styles.container}>
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title={({ style }: any) => <Text category="s2" style={{ padding: 10, fontSize: 16, color: style.color }} >Generali</Text>}>
                    <Layout style={styles.layout} level="4">
                        <View style={styles.container}>
                            <SettingsCard name="Lingua" icon="i-language" onClick={openDrawerLanguage} />
                            <SettingsCard name="Notifiche" icon="i-riqi" />
                            <SettingsCard name="Tema" icon="i-fenlei" />
                            <SettingsCard name="Termini di servizio" icon="i-zixun" />
                            <SettingsCard name="Supporto" icon="i-liaotian" onClick={mailTo} />
                            <SettingsCard name="Invita un amico" icon="i-invite" onClick={share} />
                        </View>
                    </Layout>
                </Tab>
                <Tab title={({ style }: any) => <Text category="s2" style={{ padding: 10, fontSize: 16, color: style.color }} >Account</Text>}>
                    <Layout style={styles.layout} level="4">
                        <View style={styles.container}>
                            <SettingsCard name="Cambia Password" icon="i-lock" />
                            <SettingsCard name="Elimina il mio account" icon="i-shanchu" color="red" />
                        </View>
                    </Layout>
                </Tab>
            </TabView>
            <FlagDrawer setStatus={setStatus} status={status} bottomSheetRef={bottomSheetRef} close={close} />

        </SafeAreaView>
    );
};
export default Settings;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
    },
    layout: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    containerWhite: {
        justifyContent: 'center',
        borderRadius: 8,
        flex: 1 / 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
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
