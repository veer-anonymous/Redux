import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Products from '../Products/Products'
import CartStack from './CartStack'
import LikeStack from './LikeStack'


const Stack=createStackNavigator()
const MainNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='productstack' component={Products} options={{headerShown:false}}/>
        <Stack.Screen name='cartstack' component={CartStack} />
        <Stack.Screen name='likestack' component={LikeStack}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigation