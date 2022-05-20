import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import TabRoutes from './TabRoutes'



const Stack = createBottomTabNavigator();

export default function MainStack() {

  return (
    
   <>
<Stack.Screen name="Hii" options={{ headerShown: false }} component={TabRoutes}/>
</> 
  
  )
}
