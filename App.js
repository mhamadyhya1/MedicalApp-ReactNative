import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { getUserData} from './src/utils/utils';
import { savedUserData } from './src/redux/actions/auth';



export default function App() {

  
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
      <Routes/>
      <FlashMessage position="top" duration={2000}/>
    </Provider>
    
  );
};




