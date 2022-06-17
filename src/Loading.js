import React from 'react';
import { Image, Text, Touchable, TouchableOpacityBase, View,TouchableOpacity} from 'react-native';
import { logo } from './constants/images';


const Loading = () => {
  return (<View style={{ alignItems: 'center' }}>
    
    <Image source={logo} style={{ width: 200, height: 200}}></Image>
   
    <Text style={{ fontSize: 33, color: 'black', fontWeight: 'bold' }}>Benvenuto!</Text>
    <Text style={{ fontSize: 20, color: 'black',marginBottom:170}}>Slogan della StarUp</Text>

    <TouchableOpacity style={{ backgroundColor: "#DAB741", height: 60, width: 340, borderRadius: 10,marginBottom:30 }}>
      <Text style={{ fontSize: 25, color: 'white', textAlign: 'center',padding:11 }}>Effettua l'accesso</Text>
    </TouchableOpacity>
    <Text style={{ fontSize: 20, color: 'black',marginBottom:170}}>Non sei ancora registrato?Clicca qui!</Text>

  </View>);
};
export default Loading;
