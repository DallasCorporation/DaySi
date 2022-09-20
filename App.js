import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/Navigator/BottomNav';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default App;
