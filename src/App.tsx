import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Text>Hello everyone</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
