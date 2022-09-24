import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { Ref, useMemo } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import IconFont from '../../iconfont';
import avatars, { SVGsArray } from '../../assets/exportAvatar';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../reducer/userSlice';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface ProfileDrawerProps {
    bottomSheetRef: Ref<BottomSheetMethods>;
    close: Function;
    avatar: String;
    status: number;
    setStatus: Function;
}

const ProfileDrawer = ({ bottomSheetRef, close, avatar, status, setStatus }: ProfileDrawerProps) => {


    const dispatch = useDispatch();

    const snapPoints = useMemo(() => ['60%'], []);

    const renderBackAction = () => (
        <TopNavigationAction onPressIn={() => close()} icon={<Icon name="arrow-back" />} />
    );

    const renderRightActions = () => <TopNavigationAction icon={<IconFont name="i-shouye" size={25} color={'blue'} />} />;

    const getAvatarName = (value: any) => Object.keys(avatars).find(key => avatars[key] === value)


    const element = SVGsArray.map((Each) =>
        <TouchableOpacity onPress={() => dispatch(updateAvatar(getAvatarName(Each)))}>
            <Each style={getAvatarName(Each) === avatar ? styles.selectedAvatar : styles.shadowAvatar} width={100} height={100} />
        </TouchableOpacity >
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            onClose={() => setStatus(-1)}
            index={-1}
            enablePanDownToClose
            snapPoints={snapPoints}
            backdropComponent={(props) =>
                <BottomSheetBackdrop
                    {...props}
                    enableTouchThrough={false}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    animatedIndex={{ value: status }}
                />}
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
        </BottomSheet >
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
