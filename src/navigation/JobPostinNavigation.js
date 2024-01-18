import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignupForCopany from '../screens/jobposting/SignupForCopany';
import ForgetPasswordCompany from '../screens/jobposting/ForgetPasswordCompany';

const Stack = createStackNavigator();
const JobPostinNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginForCompany}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupForCopany}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="FogetPasswordCompany"
        component={ForgetPasswordCompany}
        // options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default JobPostinNavigation;
