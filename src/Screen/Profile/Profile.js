import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import {cultured} from '../../../constants/theme';
import ProfileHeader from './ProfileHeader';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <ProfileHeader name="Props" services={1} kpi={0}/>
        </View>
        <View style={{backgroundColor: 'white', height: 200}}>
          <Text style={styles.text}>Page content</Text>
        </View>
        <View style={{borderColor: 'black', height: 200}}>
          <Text style={styles.text}>Page content</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'rgba(0, 0, 0, 0.2);',
            borderBottomWidth: 1,
          }}
        />
        <View style={{borderColor: 'black', height: 200}}>
          <Text style={styles.text}>Page content</Text>
        </View>

        <View style={{borderColor: 'black', height: 200}}>
          <Text style={styles.text}>Page content</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cultured,
  },
  text: {
    fontSize: 25,
    fontWeight: '200',
  },
});
export default Profile;
