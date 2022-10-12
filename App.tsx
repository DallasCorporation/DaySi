import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import store from './src/store/store';
import { Provider } from 'react-redux';
import MainNavigator from './src/Navigator/MainNavigator';
import { default as lightTheme } from './themeLight.json';
import { default as darkTheme } from './themeDark.json';

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
        <ApplicationProvider {...eva} customMapping={{ ...eva.mapping }} theme={light ?  { ...eva.light, ...lightTheme } : { ...eva.dark, ...darkTheme }}>
          <MainNavigator toggleTheme={toggleTheme} light={light} />
        </ApplicationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
