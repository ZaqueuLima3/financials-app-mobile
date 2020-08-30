import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import Routes from './routes'
import AppProvider from './context'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#ECECEC" />

    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  </>
)

export default App
