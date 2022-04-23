import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUI from './js/screens/LoginUI';
import SignUP from './js/screens/SignUP';

const Stack = createNativeStackNavigator();

export default function App() {
 

  useEffect(() => {
    SplashScreen.hide();
  })
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home"
        component={LoginUI}
       n></Stack.Screen>
       <Stack.Screen name="SignUp" component={SignUP}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  );
};




