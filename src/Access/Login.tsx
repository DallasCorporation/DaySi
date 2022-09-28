import { Avatar, Button, Icon, Input, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import api from '../api';
import avatars from '../assets/exportAvatar';
import { updateUser } from '../reducer/userSlice';

const Login = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const login = async () => {
        let data = {
            email,
            password,
        };
        await api.user.login(data).then(res => {
            dispatch(dispatch(updateUser(res)));
        });
    };
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    const AlertIcon = (props: any) => (
        <Icon {...props} name="alert-circle-outline" />
    );

    const LoginIcon = (props: any) => (
        <Icon {...props} name="unlock-outline" />
    );


    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props: any) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>Deve contenere almeno 8 caratteri</Text>
            </View>
        );
    };

    const renderAvatar = (Item: any) => <Item width={200} height={200} />;


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainView}>
                <View style={styles.userIcon}>
                    <View>
                        <Avatar size="large" ImageComponent={() => renderAvatar(avatars.Avatar0)} />
                    </View>
                </View>
                <View style={styles.text}>
                    <Text category="h6">Accedi al tuo account</Text>
                    <Text category="c2">Non possiedi un account? Registrati ora!</Text>
                </View>

                <View style={styles.form} >
                    <Input
                        value={email}
                        size="small"
                        label="Email"
                        placeholder="daysi@test.com"
                        style={styles.formEntry}
                        onChangeText={nextValue => setEmail(nextValue)}
                    />
                    <Input
                        style={styles.formEntry}
                        value={password}
                        size="small"
                        label="Password"
                        placeholder="Inserisci la Password"
                        caption={renderCaption}
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />
                    <Button
                        onPress={() => login()}
                        accessoryRight={LoginIcon}
                        appearance="outline"
                        size="small"
                        style={[styles.formEntry, { borderRadius: 20 }]}>Accedi</Button>
                </View>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.rounded} >
                    <Icon
                        style={styles.icon}
                        fill="#00eafd"
                        name="google-outline"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rounded} onPress={() => navigation.navigate('SignUp', { name: 'Jane' })}>
                    <Icon
                        style={styles.icon}
                        fill="#00eafd"
                        name="person-add-outline"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rounded} >
                    <Icon
                        style={styles.icon}
                        fill="#00eafd"
                        animation="pulse"

                        name="close-circle-outline"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Login;

const styles = StyleSheet.create({
    safeArea: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5eafd',
    },
    mainView: {
        backgroundColor: '#FFF',
        width: '80%',
        flex: 0.8,
        borderRadius: 30,
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
    userIcon: {
        flex: 0.45,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.5,
                shadowRadius: 7,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    text: {
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
    },
    formEntry: {
        marginTop: 22,
        width: '80%',
    },
    options: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '80%',
        flex: 0.14,
        marginTop: 22,
        borderRadius: 30,
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

    rounded: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flex: 1,
        margin: 15,
        borderRadius: 50,
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
    icon: {
        width: 32,
        height: 32,
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#8F9BB3',
    },
});
