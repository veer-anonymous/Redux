import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Products from '../Products';
import Cart from './Cart';
import FavSlice from './FavSlice';
import Favs from './Favs';

const Stack=createStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Products' component={Products} options={{headerShown:false}}/>
    <Stack.Screen name='Cart' component={Cart}/>
    {/* <Stack.Screen name='Fav' component={FavSlice}/> */}
    <Stack.Screen name='Favourites' component={Favs}/>
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation