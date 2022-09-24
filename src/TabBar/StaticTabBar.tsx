
import * as React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import IconFont from '../iconfont';

export default class StaticTabBar extends React.PureComponent {
    values: never[];
    onPress: (index: any, route: any) => void;
    constructor(props: any) {
        super(props);
        this.values = [];
        this.onPress = (index, route) => {
            const { value, tabs } = this.props;
            const tabWidth = width / tabs.length;
            Animated.sequence([
                Animated.parallel(this.values.map(v => Animated.timing(v, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }))),
                Animated.parallel([
                    Animated.spring(value, {
                        toValue: tabWidth * index,
                        useNativeDriver: true,
                    }),
                    Animated.spring(this.values[index], {
                        toValue: 5,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
            this.props.navigation.navigate(route);
        };
        const { tabs } = this.props;
        this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
    }
    render() {
        const { onPress } = this;
        const { tabs, value } = this.props;
        return (React.createElement(View, { style: styles.container }, tabs.map((tab, key) => {
            const { icon, name, route } = tab;
            const tabWidth = width / tabs.length;
            const cursor = tabWidth * key;
            const opacity = value.interpolate({
                inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
                outputRange: [1, 0, 1],
                extrapolate: 'clamp',
            });
            const translateY = this.values[key].interpolate({
                inputRange: [0, 1],
                outputRange: [64, 0],
                extrapolate: 'clamp',
            });
            const opacity1 = this.values[key].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            });
            return (
                React.createElement(React.Fragment, Object.assign({}, { key }),
                    React.createElement(TouchableWithoutFeedback, { onPress: () => onPress(key, route) },
                        React.createElement(Animated.View, { style: [styles.tab, { opacity }] },
                            <IconFont name={icon} size={25} />)),
                    React.createElement(
                        Animated.View, {
                        style: {
                            position: 'absolute',
                            top: -8,
                            left: tabWidth * key,
                            width: tabWidth,
                            height: 64,
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: opacity1,
                            transform: [{ translateY }],
                        },
                    },
                        React.createElement(View, { style: styles.activeIcon },
                            <IconFont name={icon} size={25} />
                        ))
                )
            );
        })));
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
    },
    activeIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 30,
    },
    labelStyle: {
        fontSize: 11,
        fontWeight: '600',
        color: '#000',
    },
});
