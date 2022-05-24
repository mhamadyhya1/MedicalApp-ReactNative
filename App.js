import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { getUserData } from './src/utils/utils';
import { savedUserData } from './src/redux/actions/auth';
import AuthStack from './src/Navigation/AuthStack';
AuthStack

const Stack = createNativeStackNavigator();

export default function App() {
 
   useEffect(()=>{
    const userData = getUserData()
    if (userData==null){
      return(
        <AuthStack></AuthStack>
      )
    }
   }

   )
  
  useEffect(()=>{
    (async()=>{
      SplashScreen.hide()
      const userData = await getUserData()
      console.log("user data App.js",userData)
      if(userData){
        savedUserData(userData)
      }  
    })();
  },[])

  return (

    <Provider store={store}>
      
      <Routes />
      <FlashMessage position="top" duration={3000}/>
    </Provider>
    
  );
};




