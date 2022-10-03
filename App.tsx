import React, { useState } from 'react';
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
  const [light, setToggle] = useState(true);
  const toggleTheme = () => {
    // 🌞 -> 🌚
    setToggle(!light);
  };
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={light ? eva.light : eva.dark}>
          <MainNavigator toggleTheme={toggleTheme} light={light}/>
        </ApplicationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
