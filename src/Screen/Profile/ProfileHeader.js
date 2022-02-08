import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileHeader = ({...props}) => {
  const {name, services, kpi}=props;
  return (
    <View style={{height: 230}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.image}>
          <Ionicons name={'person'} size={100} style={{color: '#000000'}} />
        </View>
        <View style={{marginHorizontal: 20, flex: 1}}>
          <Text style={{marginTop: 20, fontSize: 24}}>{name}</Text>
          <TouchableOpacity>
            <Text style={{marginTop: 10}}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{marginTop: 22}}>
            <View style={styles.rowSpaced}>
              <Text>Services Used</Text>
              <Text style={{fontWeight: '700'}}>{services}</Text>
            </View>
            <View style={[styles.rowSpaced, {marginTop: 3}]}>
              <Text>Other KPI</Text>
              <Text style={{fontWeight: '700'}}>{kpi}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.help}>
        <Ionicons name={'help-circle'} size={24} style={{color: '#000000'}} />
        <Text style={{fontSize: 16}}>Need Help? Ask Here</Text>
      </TouchableOpacity>
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
});

export default ProfileHeader;
