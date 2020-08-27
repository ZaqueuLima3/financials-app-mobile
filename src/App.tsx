import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import Routes from './routes'

declare const global: {HermesInternal: null | {}}

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
)

export default App
