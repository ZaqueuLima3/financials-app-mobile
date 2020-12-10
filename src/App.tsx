import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {KeyboardAvoidingView, SafeAreaView, StatusBar, View} from 'react-native'

import Routes from './routes'
import AppProvider from './context'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => (
  <View style={{flex: 1}}>
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  </View>
)

export default App
