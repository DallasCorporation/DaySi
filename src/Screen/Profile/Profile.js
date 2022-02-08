import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={{borderColor: 'black', borderWidth: 1, flex:1}}>
          <Text style={styles.text}>Page content</Text>
        </View>
        <View style={{borderColor: 'black', borderWidth: 1, flex: 2}}>
          <Text style={styles.text}>Page content</Text>
        </View>
        <View style={{borderColor: 'black', borderWidth: 1, flex: 3}}>
          <Text style={styles.text}>Page content</Text>
        </View>
        <Text style={styles.text}>Page content</Text>
        <Text style={styles.text}>Page content</Text>
        <Text style={styles.text}>Page content</Text>
        <Text style={styles.text}>Page content</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '200',
  },
});
export default Profile;
