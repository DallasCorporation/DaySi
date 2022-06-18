import React from 'react';
import { Image, Text, Touchable, TouchableOpacityBase, View,TouchableOpacity} from 'react-native';
import { logo, logoScritta } from './constants/images';


const Loading = () => {
  return (<View style={{ alignItems: 'center',backgroundColor:"#FFFCF3",flex:1 }}>
    
    <Image source={logo} style={{width: 180, height: 180,marginTop:200,marginBottom:40
    }}></Image>
    <Image source={logoScritta} style={{width: 270, height: 100}}></Image>
   
  </View>);
};
export default Loading;
