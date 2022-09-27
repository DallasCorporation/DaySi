import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import store from './src/store/store';
import { Provider } from 'react-redux';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './src/Navigator/MainNavigator';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Root" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <MainNavigator />
        </ApplicationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
