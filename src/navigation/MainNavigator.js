import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import JobPostinNavigation from './JobPostinNavigation';
import JobSearchNavigator from './JobSearchNavigator';
import SelectUser from '../screens/onboading/SelectUser';
import Splash from '../screens/onboading/Splash';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splas"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSelect"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Jobposting"
          component={JobPostinNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Jobsearching"
          component={JobSearchNavigator}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
