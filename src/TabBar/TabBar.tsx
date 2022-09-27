import * as React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Animated } from 'react-native';
import * as shape from 'd3-shape';
import Svg, { Path } from 'react-native-svg';
import StaticTabBar from './StaticTabBar';
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get('window');
const height = 64;
const tabs = [
    {
        name: 'Home',
        icon: 'i-dianpu',
        route: 'Home',
    },
    {
        name: 'Maps',
        icon: 'i-dingwei',
        route: 'Categorie',
    },
    {
        name: 'Maps',
        icon: 'i-search',
        route: 'Maps',
    },
    {
        name: 'Account',
        icon: 'i-shouye',
        route: 'Account',
    },
];
const tabWidth = width / tabs.length;
const backgroundColor = 'white';
const getPath = () => {
    const left = shape.line<any>().x((d: { x: number; }) => d.x).y((d: { y: number; }) => d.y)([
        { x: 0, y: 0 },
        { x: width, y: 0 },
    ]);
    const tab = shape.line<any>().x((d: { x: number; }) => d.x).y((d: { y: number; }) => d.y).curve(shape.curveBasis)([
        { x: width + tabWidth / 2 - 100, y: 0 },
        { x: width + tabWidth / 2 - 65 + -35, y: 0 },
        { x: width + tabWidth / 2 - 50 + 10, y: -6 },
        { x: width + tabWidth / 2 - 50 + 15, y: height - 14 },
        { x: width + tabWidth / 2 + 50 - 15, y: height - 14 },
        { x: width + tabWidth / 2 + 50 - 10, y: -6 },
        { x: width + tabWidth / 2 + 65 - -35, y: 0 },
        { x: width + tabWidth / 2 + 100, y: 0 },
    ]);
    const right = shape.line<any>().x((d: { x: number; }) => d.x).y((d: { y: number; }) => d.y)([
        { x: width + tabWidth, y: 0 },
        { x: width * 2, y: 0 },
        { x: width * 2, y: height },
        { x: 0, y: height },
        { x: 0, y: 0 },
    ]);
    return `${left} ${tab} ${right}`;
};
const d = getPath();

interface Props {
    navigation: any
}

export default class TabBar extends React.PureComponent<Props> {
    value: Animated.Value;
    constructor() {
        super(...arguments);
        this.value = new Animated.Value(0);
    }
    render() {
        const { value } = this;
        const { navigation } = this.props;
        const translateX = value.interpolate({
            inputRange: [0, width],
            outputRange: [-width, 0],
        });
        return (
            React.createElement(React.Fragment, null,
                React.createElement(View, Object.assign({}, { height, width }),
                    React.createElement(AnimatedSvg, Object.assign({ width: width * 2 }, { height }, { style: { transform: [{ translateX }] } }),
                        React.createElement(Path, Object.assign({ fill: backgroundColor }, { d }))),
                    React.createElement(View, { style: StyleSheet.absoluteFill },
                        React.createElement(StaticTabBar, Object.assign({}, { navigation, tabs, value })))
                ),
                React.createElement(SafeAreaView, { style: styles.container })
            )
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor,
    },
});
