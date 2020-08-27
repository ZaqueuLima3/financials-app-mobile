import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Text>Hello everyone</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
