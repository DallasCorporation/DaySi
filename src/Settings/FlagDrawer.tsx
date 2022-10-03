import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { Ref, useMemo } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import IconFont from '../iconfont';
import { SVGsFlagsArray } from '../assets/exportFlags';


interface ProfileDrawerProps {
    bottomSheetRef: Ref<BottomSheetMethods>;
    close: Function;
    status: number;
    setStatus: Function;
}

const FlagDrawer = ({ status, setStatus, bottomSheetRef, close }: ProfileDrawerProps) => {
    const snapPoints = useMemo(() => ['60%', '100%'], []);

    const renderBackAction = () => (
        <TopNavigationAction onPressIn={() => close()} icon={<Icon name="arrow-back" />} />
    );

    const renderRightActions = () => <TopNavigationAction icon={
        <TouchableOpacity>
            <IconFont name="i-language" size={25}  />
        </TouchableOpacity>
    }
    />;

    const element = SVGsFlagsArray.map((Each) =>
        <TouchableOpacity >
            <Each width={100} height={100} />
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
                    title="Aggiorna la lingua dell'app"
                    subtitle="Scegli quella che preferisci!"
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
    )
}
export default FlagDrawer


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
        borderColor: 'black',
        borderRadius: 50,
    },
});
