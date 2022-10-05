import { Button, IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapsDrawer from './MapsDrawer';
const Maps = () => {

    const coord = [{
        id: 1,
        name: 'dadsada',
        address: 'sadasdas',
        latitude: 41,
        longitude: 12,
    },
    {
        id: 2,
        name: 'dadsada',
        address: 'sadasdas',
        latitude: 41.2,
        longitude: 12,
    },
    ];

    const bottomSheetRef = useRef<any>(null);
    const [data, setData] = useState(coord[0]);
    const [status, setStatus] = useState(-1);

    const openDrawer = (data: any) => {
        bottomSheetRef.current?.snapToIndex(0);
        setStatus(0);
        setData(data);
    };
    const close = () => {
        bottomSheetRef.current?.close();
        setStatus(-1);
    };
    const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([]);

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flex: 0.1 }}>

                <Layout level="1" style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, padding: 10 }}>
                    <Select
                        style={{ flex: 0.9, height: 45 }}
                        multiSelect={true}
                        placeholder="Servizi"
                        selectedIndex={multiSelectedIndex}
                        onSelect={index => setMultiSelectedIndex(index)}>
                        <SelectItem title="Option 1.1" />
                        <SelectItem title="Option 1.2" />
                        <SelectItem title="Option 1.3" />
                        <SelectItem title="Option 2.1" />
                        <SelectItem title="Option 2.2" />
                        <SelectItem title="Option 2.3" />
                    </Select>
                    <Button style={{ height: 45 }} size="small">Cerca</Button>
                </Layout>
            </Layout >
            <View style={{ flex: 0.9 }}>
                <MapView
                    mapType={Platform.OS == 'android' ? 'none' : 'standard'}
                    style={styles.map}
                    initialRegion={{
                        latitude: 41.29246,
                        longitude: 12.5736108,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                >
                    {coord.map((el: any) =>
                        <Marker key={el.id} onPress={() => { openDrawer(el); }}
                            coordinate={{ latitude: el.latitude, longitude: el.longitude }}>
                            <View style={{ backgroundColor: 'white', padding: 2 }}>
                                <Text>AAA</Text>
                            </View>
                        </Marker>
                    )}
                </MapView>
                <MapsDrawer data={data} setStatus={setStatus} status={status} bottomSheetRef={bottomSheetRef} close={close} />
            </View>
        </Layout >
    );
};
export default Maps;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});



