import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import {cultured, mainGreen} from '../../constants/theme';
import { logo } from '../../constants/images';


const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
       <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainGreen,
  },
  
});
export default Profile;
