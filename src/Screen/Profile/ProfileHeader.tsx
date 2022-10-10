import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import IconFont from '../../iconfont';
import { Avatar, Text, Input, Button } from '@ui-kitten/components';
import avatars from '../../assets/exportAvatar';
import api from '../../api';

const ProfileHeader = ({ handleClick, ...props }: any) => {
  const { user } = props;
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [edit, setEdit] = useState(true);

  const renderAvatar = (Item: any) => <Item width={200} height={200} />;

  const updateInfo = async () => {
    if (!edit) {
      await api.user.update(user._id, {
        name,
        surname,
        email,
      }).then(() => {
        Alert.alert("Informazioni aggiornate")
      });
    }
    setEdit(!edit);
  };

  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
        <Avatar style={styles.avatar} size="giant" ImageComponent={() => renderAvatar(avatars[user.avatar])} />
        <TouchableOpacity style={{ position: 'absolute', bottom: -20 }} onPress={() => handleClick()}>
          <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10 }}>
            <IconFont name={'i-bianxie'} color={'white'} size={25} />
          </View>
        </TouchableOpacity>

      </View>
      <Text style={styles.placeholder}>Raccontaci un po' di te!</Text>
      <Input
        placeholder="Nome"
        value={name}
        style={styles.input}
        size="large"
        disabled={edit}
        label={'Nome'}
        status="info"
        accessoryLeft={<IconFont name={'i-shouye'} size={25} />}
        onChangeText={(val) => setName(val)}
      />
      <Input
        placeholder="Cognome"
        value={surname}
        style={styles.input}
        size="large"
        disabled={edit}
        label={'Cognome'}
        status="info"
        accessoryLeft={<IconFont name={'i-shouye'} size={25} />}
        onChangeText={(val) => setSurname(val)}
      />
      <Input
        placeholder="Email"
        value={email}
        style={styles.input}
        size="large"
        disabled={edit}
        label={'Email'}
        status="info"
        accessoryLeft={<IconFont name={'i-mail'} size={25} />}
        onChangeText={(val) => setEmail(val)}
      />

      <Button
        size="large"
        status="info"
        appearance="outline"
        accessoryRight={<IconFont name={'i-bianji'} size={25} color={'#4253ff'} />}
        onPress={() => { updateInfo() }} style={[styles.input, { borderRadius: 10 }]}>{edit ? 'Modifica' : 'Aggiorna'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 18,
    height: 140,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  help: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 22,
  },
  avatar: {
    width: 220,
    height: 220,
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  placeholder: {
    marginTop: 32, textAlign: 'center',
  },
});

export default ProfileHeader;
