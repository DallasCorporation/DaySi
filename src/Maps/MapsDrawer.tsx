import { View, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { Ref, useMemo } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import IconFont from '../iconfont';
import { Text } from 'react-native-svg';

interface DataBuildings {
    name: string;
    address: string
}

interface ProfileDrawerProps {
    bottomSheetRef: Ref<BottomSheetMethods>;
    close: Function;
    status: number;
    setStatus: Function;
    data: DataBuildings
}

const MapsDrawer = ({ data, status, setStatus, bottomSheetRef, close }: ProfileDrawerProps) => {
    const snapPoints = useMemo(() => ['40%', '100%'], []);

    const renderBackAction = () => (
        <TopNavigationAction onPressIn={() => close()} icon={<Icon name="arrow-back" />} />
    );

    const renderRightActions = () => <TopNavigationAction icon={
        <TouchableOpacity>
            <IconFont name="i-dingwei" size={25} />
        </TouchableOpacity>
    }
    />;

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
                    title={data.name}
                    subtitle={data.address}
                    accessoryLeft={renderBackAction}
                    accessoryRight={renderRightActions}
                />
                <Text>{data.address}</Text>
            </View>
        </BottomSheet >
    );
};
export default MapsDrawer;


// const styles = StyleSheet.create({
// });
