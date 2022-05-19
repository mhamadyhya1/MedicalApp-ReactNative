import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginUI from '../screens/Login/LoginUI';
import SignUP from '../screens/SignUp/SignUP';

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={LoginUI}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUP}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    
)

export default Routes