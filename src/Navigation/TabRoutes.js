import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Profile from '../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Mater from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/Home/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import ChatScreen from '../screens/Chats/ChatScreen';



const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <BottomTab.Navigator initialRouteName="Home" >
    <BottomTab.Screen options={{ headerShown: false , tabBarIcon : () =>
     (<Icon name="home" size={24} color="grey"/>)  
  }}
      name="Home" component={HomeScreen} />
    <BottomTab.Screen options={{unmountOnBlur: true,headerShown:false , tabBarIcon:()=>
    (<FontAwesome5 name="calendar-alt" size={24} color="grey"/>)
    }}
        name="appointments" component={ScheduleScreen}
    />
    <BottomTab.Screen options={{headerShown:false , tabBarIcon:()=>
    (<Mater name="chat" size={24} color="grey"/>)
    }}
        name="chat" component={ChatScreen}
    />
    <BottomTab.Screen options={{ headerShown: false , tabBarIcon: () =>
       (
         <IonIcon name="person" color="grey" size={24}/>
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
