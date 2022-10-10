import React, { useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileDrawer from './ProfileDrawer';
import { useAppSelector } from '../../store/store';
import { Layout } from '@ui-kitten/components';

const Profile = () => {
  const avatar = useAppSelector((state) => state.user.avatar);
  const user = useAppSelector((state) => state.user);
  const bottomSheetRef = useRef<any>(null);
  const [status, setStatus] = useState(-1);

  const handleClick = () => {
    bottomSheetRef.current?.snapToIndex(0);
    setStatus(0);
  };
  const close = () => {
    bottomSheetRef.current?.close();
    setStatus(-1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={{ flex: 1 }}>
        <ProfileHeader user={user} avatar={avatar} handleClick={handleClick} />
      </Layout>
      <ProfileDrawer setStatus={setStatus} status={status} avatar={avatar} bottomSheetRef={bottomSheetRef} close={close} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
export default Profile;
