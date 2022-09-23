import React, { useRef } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileDrawer from './ProfileDrawer';
import { useSelector } from 'react-redux';

const Profile = () => {
  const avatar = useSelector(state => state.user.avatar);
  const user = useSelector(state => state.user);
  const bottomSheetRef = useRef(null);

  const handleClick = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };
  const close = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <ProfileHeader user={user} avatar={avatar} handleClick={handleClick} />
        </View>
      </ScrollView>
      <ProfileDrawer avatar={avatar} bottomSheetRef={bottomSheetRef} close={close} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: mainGreen,
  },

});
export default Profile;
