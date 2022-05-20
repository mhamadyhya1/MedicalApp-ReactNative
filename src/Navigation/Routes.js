import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginUI from '../screens/Login/LoginUI';
import SignUP from '../screens/SignUp/SignUP';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

export default function Routes() {
    const userData = useSelector((state)=> state.auth.userData)
    console.log("user data" , userData)
    
    
  return (
      <NavigationContainer>
          <Stack.Navigator>
            {!!userData && userData?.access_token ? AuthStack(Stack) 
                  :  MainStack(Stack)
            }
           


         
              
          </Stack.Navigator>
      </NavigationContainer>
  )
}
