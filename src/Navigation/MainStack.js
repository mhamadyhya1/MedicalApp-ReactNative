import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SpecialistScreen from '../screens/Specialists/Specialists';
import TabRoutes from './TabRoutes'
import {TabStack} from '../Navigation/Routes'



export default function MainStack() {
const Stack = createNativeStackNavigator();
  return (
    
   <NavigationContainer>
   <Stack.Screen name="Specialists"  component={SpecialistScreen}/>
   <Stack.Screen name="TabRoutes" options={{ headerShown: false }} component={TabStack} />
   </NavigationContainer> 
  
  )
}
