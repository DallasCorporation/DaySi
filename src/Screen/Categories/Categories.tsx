import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CategoriesList from './CategoriesList';
import VendorList from './VendorList';

const Categories = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const isLight = useSelector((state: any) => state.user.lightTheme);
    return (
        <Layout style={styles.container} level="1">
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title={({ style }: any) => <Text category="s2" style={{ padding: 10, fontSize: 16, color: style.color }} >Categorie</Text>}>
                    <CategoriesList isLight={isLight} />
                </Tab>
                <Tab title={({ style }: any) => <Text category="s2" style={{ padding: 10, fontSize: 16, color: style.color }} >Professionisti</Text>}>
                    <VendorList isLight={isLight} />
                </Tab>
            </TabView>
        </Layout>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Categories;
