import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import IconFont from '../../iconfont';
import avatars, { SVGsArray } from '../../assets/exportAvatar';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../reducer/userSlice';


const ProfileDrawer = ({ bottomSheetRef, close, avatar }) => {
    const dispatch = useDispatch();

    const snapPoints = useMemo(() => ['60%'], []);

    const renderBackAction = () => (
        <TopNavigationAction onPressIn={() => close()} icon={<Icon name="arrow-back" />} />
    );

    const renderRightActions = () => <TopNavigationAction icon={<IconFont name="i-shouye" size={25} color={'blue'} />} />;

    const getAvatarName = (value) => Object.keys(avatars).find(key => avatars[key] === value)


    const element = SVGsArray.map((Each) =>
        <TouchableOpacity onPress={() => dispatch(updateAvatar(getAvatarName(Each)))}>
            <Each style={getAvatarName(Each) === avatar ? styles.selectedAvatar : styles.shadowAvatar} width={100} height={100} />
        </TouchableOpacity >
    );

    return (
        <BottomSheet
            style={{ backgroundColor: '#a8b5eb' }}
            ref={bottomSheetRef}
            index={-1}
            enablePanDownToClose
            snapPoints={snapPoints}
        >
            <View>
                <TopNavigation
                    alignment="center"
                    title="Aggiorna il tuo Avatar"
                    subtitle="Scegli quello che preferisci!"
                    accessoryLeft={renderBackAction}
                    accessoryRight={renderRightActions}
                />
                <FlatList
                    data={element}
                    renderItem={(el) => el.item}
                    numColumns={3}
                    style={styles.flatList}
                    columnWrapperStyle={styles.columns}
                />
            </View>
        </BottomSheet>
    );
};
export default ProfileDrawer;

const styles = StyleSheet.create({
    flatList: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 55,
    },
    columns: {
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    shadowAvatar: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
    },
    selectedAvatar: {
        opacity: 0.7,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 50,
    }
});
