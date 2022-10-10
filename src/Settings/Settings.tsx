import { Platform, SafeAreaView, Share, StyleSheet, Linking } from 'react-native';
import React, { useRef, useState } from 'react';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import SettingsCard from './SettingsCard';
import FlagDrawer from './FlagDrawer';
import ThemeDrawer from './ThemeDrawer';
const Settings = (props: any) => {
    const { toggleTheme } = props
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const languageBottomSheetRef = useRef<any>(null);
    const themeBottomSheetRef = useRef<any>(null);
    const [languageDrawerStatus, setLanguageDrawerStatus] = useState(-1);
    const [themeDrawerStatus, setThemeDrawerStatus] = useState(-1);

    const openDrawerLanguage = () => {
        languageBottomSheetRef.current?.snapToIndex(0);
        setLanguageDrawerStatus(0);
    };

    const openDrawerTheme = () => {
        themeBottomSheetRef.current?.snapToIndex(0);
        setThemeDrawerStatus(0);
    };

    const closeLanguage = () => {
        languageBottomSheetRef.current?.close();
        setLanguageDrawerStatus(-1);
    };

    const closeTheme = () => {
        themeBottomSheetRef.current?.close();
        setThemeDrawerStatus(-1);
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
                        <SafeAreaView style={styles.container}>
                            <SettingsCard name="Lingua" icon="i-language" onClick={openDrawerLanguage} />
                            <SettingsCard name="Notifiche" icon="i-hanhan-01-011" />
                            <SettingsCard name="Tema" icon="i-fenlei" onClick={openDrawerTheme} />
                            <SettingsCard name="Termini di servizio" icon="i-zixun" />
                            <SettingsCard name="Supporto" icon="i-hanhan-01-01" onClick={mailTo} />
                            <SettingsCard name="Invita un amico" icon="i-invite" onClick={share} />
                        </SafeAreaView>
                    </Layout>
                </Tab>
                <Tab title={({ style }: any) => <Text category="s2" style={{ padding: 10, fontSize: 16, color: style.color }} >Account</Text>}>
                    <Layout style={styles.layout} level="4">
                        <SafeAreaView style={styles.container}>
                            <SettingsCard name="Cambia Password" icon="i-lock" />
                            <SettingsCard name="Elimina il mio account" icon="i-shanchu" color="red" />
                        </SafeAreaView>
                    </Layout>
                </Tab>
            </TabView>
            <FlagDrawer setStatus={setLanguageDrawerStatus} status={languageDrawerStatus} bottomSheetRef={languageBottomSheetRef} close={closeLanguage} />
            <ThemeDrawer toggleTheme={toggleTheme} setStatus={setThemeDrawerStatus} status={themeDrawerStatus} bottomSheetRef={themeBottomSheetRef} close={closeTheme} />

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
    },
    layout: {
        paddingTop: 20,
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
