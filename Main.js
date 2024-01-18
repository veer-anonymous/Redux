import { View, Text } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import Splash from './src/screens/onboading/Splash'
import Practice from './src/practice/Practice'
import { Provider } from 'react-redux'
import MyStore from './redux/MyStore'
import Products from './Products'
import AppNavigation from './src/AppNavigation'

const Main = () => {
  return (
   <Provider store={MyStore}>
  {/* <Products/> */}
  <AppNavigation/>
   </Provider>
  )
}

export default Main