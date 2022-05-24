import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginUI from '../screens/Login/LoginUI'
import SignUP from '../screens/SignUp/SignUP'

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginUI" component={LoginUI} />
           <Stack.Screen name="SignUp" component={SignUP}/>
      </Stack.Navigator>
         
    </NavigationContainer>
  )
}
