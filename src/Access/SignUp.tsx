
import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import avatars from '../assets/exportAvatar';
import api from '../api';
import { updateUser } from '../reducer/userSlice';
import { useDispatch } from 'react-redux';

const SignUp = ({ navigation }: any) => {

    const dispatch = useDispatch();
    const AlertIcon = (props: any) => (
        <Icon {...props} name="alert-circle-outline" />
    );

    const toggleSecureEntry1 = () => {
        setSecurePassword(!securePassword);
    };
    const toggleSecureEntry2 = () => {
        setSecureConfirmPassword(!secureConfirmPassword);
    };

    const renderIcon1 = (props: any) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry1}>
            <Icon {...props} name={securePassword ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    const renderIcon2 = (props: any) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry2}>
            <Icon {...props} name={secureConfirmPassword ? 'eye-off' : 'eye'} />
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

    const submit = async () => {
        if (password !== confirmPassword) { return Alert.alert('Le password non sono uguali', 'Controlla di nuovo le password inserite.',); }
        if (password.length < 8) { return Alert.alert('Password non corretta', 'La password deve essere lunga almeno 8 caratteri.',); }
        if (name === '' || surname === '' || email === '') { return Alert.alert('Dati mancanti', 'Inserisci tutti i dati richiesti.',); }
        let data = {
            name,
            surname,
            email,
            password,
            confirmPassword,
            type: 'Customer',
        };
        await api.user.signUp(data).then(res => {
            dispatch(updateUser(res));
            console.log(res);
        });
    };

    const renderAvatar = (Item: any) => <Item width={70} height={70} />;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [securePassword, setSecurePassword] = useState<boolean>(true);
    const [secureConfirmPassword, setSecureConfirmPassword] = useState<boolean>(true);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainView}>
                <View style={styles.userIcon}>
                    <Avatar style={styles.avatar} size="large" ImageComponent={() => renderAvatar(avatars.Avatar1)} />
                </View>
                <View style={styles.text}>
                    <Text category="h6">Registrati a DaySì ora!</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text category="c2">Possiedi un account? </Text>
                        <TouchableOpacity><Text category="c2">Premi qui!</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.form} >
                    <Input
                        value={name}
                        size="small"
                        label="Nome"
                        placeholder="Margherita"
                        style={styles.formEntry}
                        onChangeText={nextValue => setName(nextValue)}
                    />
                    <Input
                        value={surname}
                        size="small"
                        label="Cognome"
                        placeholder="Rossi"
                        style={styles.formEntry}
                        onChangeText={nextValue => setSurname(nextValue)}
                    />
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
                        placeholder="4Y6#fFBr8sD7"
                        caption={renderCaption}
                        accessoryRight={renderIcon1}
                        secureTextEntry={securePassword}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />

                    <Input
                        style={styles.formEntry}
                        value={confirmPassword}
                        size="small"
                        label="Conferma Password"
                        placeholder="4Y6#fFBr8sD7"
                        caption={renderCaption}
                        accessoryRight={renderIcon2}
                        secureTextEntry={secureConfirmPassword}
                        onChangeText={nextValue => setConfirmPassword(nextValue)}
                    />
                    <Button
                        // accessoryRight={LoginIcon}
                        onPress={() => submit()}
                        appearance="outline"
                        size="small"
                        style={[styles.formEntry, { borderRadius: 20 }]}>Registrati</Button>
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
                <TouchableOpacity style={styles.rounded} onPress={() => navigation.navigate('Login', { name: 'Jane' })}>
                    <Icon
                        style={styles.icon}
                        fill="#00eafd"
                        name="person-add-outline"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rounded} onPress={() => { }}>
                    <Icon
                        style={styles.icon}
                        fill="#00eafd"
                        animation="pulse"
                        name="close-circle-outline"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};
export default SignUp;


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
        flex: 0.15,
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
    avatar: {
        width: 180,
        height: 180,
    },
    text: {
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.8,
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
