import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <BottomTab.Navigator
      tabBar={(tabProps)=> (
          <>
            <BottomTabBar  {...tabProps}/>
          </>
      )}
      initialRouteName="Home"
    >
    <BottomTab.Screen  name="Home"  component={Home}/>
    <BottomTab.Screen  name="Profile"  component={Profile}/>
    </BottomTab.Navigator>
  )
  
}
