import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginUI from '../screens/Login/LoginUI';
import SignUP from '../screens/SignUp/SignUP';
import TabRoutes from './TabRoutes';


const Stack = createNativeStackNavigator();

export default function Routes() {
  const userData = useSelector((state) => state.auth.userData)
  console.log("user data", userData)


  return (
    <NavigationContainer>
      {userData && userData.token ? <MainStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}


const MainStack = () =>

(
  <Stack.Navigator>
   <Stack.Screen name="TabRoutes" options={{ headerShown: false }} component={TabRoutes} />
   <Stack.Screen name="AuthStack" options={{ headerShown: false }} component={AuthStack} />
   </Stack.Navigator>
)

const AuthStack = () => (
  <Stack.Navigator options={{ headerShown: false }}>
    <Stack.Screen name="LoginUI"options={{ headerShown: false }} component={LoginUI} />
    <Stack.Screen name="SignUp"  options={{ headerShown: false }}component={SignUP} />
  </Stack.Navigator>
)
