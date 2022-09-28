import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
const Maps = () => {

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 41.29246,
                    longitude:  12.5736108,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
            />
        </View>
    );
};
export default Maps;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});



