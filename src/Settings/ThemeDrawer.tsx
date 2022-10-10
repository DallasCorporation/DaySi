import { TouchableOpacity, StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { Ref, useEffect, useMemo, useState } from 'react';
import { Icon, Layout, Radio, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import IconFont from '../iconfont';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../reducer/userSlice';
import api from '../api';


interface ProfileDrawerProps {
    bottomSheetRef: Ref<BottomSheetMethods>;
    close: Function;
    status: number;
    setStatus: Function;
    toggleTheme: Function;
}

const ThemeDrawer = ({ toggleTheme, status, setStatus, bottomSheetRef, close }: ProfileDrawerProps) => {
    const snapPoints = useMemo(() => ['80%', '100%'], []);
    const dispatch = useDispatch();
    const light = useSelector((state: any) => state.user.lightTheme);
    const user = useSelector((state: any) => state.user);
    const [activeChecked, setActiveChecked] = useState(light);

    useEffect(() => {
        setActiveChecked(!light);
    }, [light]);


    const renderBackAction = () => (
        <TopNavigationAction onPressIn={() => close()} icon={<Icon name="arrow-back" />} />
    );

    const renderRightActions = () => <TopNavigationAction icon={<IconFont name="i-fenlei" size={25} />} />;

    const updateTheme = async (change: boolean) => {
        setActiveChecked(!change);
        toggleTheme(change);
        dispatch(changeTheme(change));
        await api.user.updateTheme(user._id, { lightTheme: change });
    };

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
            <Layout style={{ flex: 1 }}>
                <TopNavigation
                    alignment="center"
                    title="Scegli il tema dell'app"
                    subtitle="Chiaro o Scuro, quale preferisci?"
                    accessoryLeft={renderBackAction}
                    accessoryRight={renderRightActions}
                />
                <Layout style={styles.container} level="1">

                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 100 }}>🌞</Text>
                        <Toggle checked={activeChecked} onChange={(status) => updateTheme(!status)} />
                        <Text style={{ fontSize: 100 }}>🌚</Text>
                    </View>
                </Layout>
            </Layout>
        </BottomSheet >
    );
};
export default ThemeDrawer;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    radio: {
        margin: 2,
    },
});
