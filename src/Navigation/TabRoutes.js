import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Profile from '../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/Home/HomeScreen';


const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <BottomTab.Navigator initialRouteName="Home" >
    <BottomTab.Screen options={{ headerShown: false , tabBarIcon : () =>
     (<Icon name="home" size={24} color="black"/>)  
  }}
      name="Home" component={HomeScreen} />
    <BottomTab.Screen options={{ headerShown: false , tabBarIcon: () =>
       (
         <IonIcon name="person" color="black" size={24}/>
       ) 
        }}  name="Profile"  component={Profile}/>
    </BottomTab.Navigator>
  )
  
}
const styles = StyleSheet.create({
  circleStyle: {
      height: 50.0,
      width: 50.0,
      backgroundColor: '#F5F5F5',
      borderRadius: 25.0,
      alignItems: 'center',
      justifyContent: 'center',
  },
});
