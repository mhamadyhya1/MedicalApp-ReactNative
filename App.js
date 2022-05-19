import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';


const Stack = createNativeStackNavigator();

export default function App() {
 

  useEffect(() => {
    SplashScreen.hide();
  })
  return (

    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" duration={3000}/>
    </Provider>
    
  );
};




