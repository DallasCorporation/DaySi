import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Navigator/BottomNav';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import store from './src/store/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </ApplicationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
