import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { logo } from './constants/images';


const Access = () => {
  return (
    <View style={{ alignItems: 'center', backgroundColor: "#FFFCF3", flex: 1 }}>
      <Image source={logo} style={{ width: 190, height: 190, marginTop: 200, marginBottom: 20 }} />
      <Text style={{ fontSize: 33, color: 'black', fontWeight: 'bold' }}>Benvenuto!</Text>
      <Text style={{ fontSize: 20, color: 'black', marginBottom: 90 }}>Rendi la tua giornata fiorita</Text>
      <TouchableOpacity style={{ backgroundColor: "#DAB701", height: 60, width: 340, borderRadius: 10, marginBottom: 30 }}>
        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', padding: 11, fontWeight: 'bold' }}>Effettua l'accesso</Text>
      </TouchableOpacity>
      <Text>
        <Text style={{ fontSize: 18, color: 'black' }}>Non sei ancora registrato? </Text>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Clicca qui!</Text>
      </Text>

    </View>
  );
};
export default Access;
