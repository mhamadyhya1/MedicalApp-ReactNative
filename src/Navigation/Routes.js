import { View, Text } from 'react-native'
import React , {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginUI from '../screens/Login/LoginUI';
import SignUP from '../screens/SignUp/SignUP';
import TabRoutes from './TabRoutes';
import SpecialistScreen from '../screens/Specialists/Specialists';
import jwtDecode from 'jwt-decode';
import actions from '../redux/actions';
import AnnouncementDetailScreen from '../screens/AnnouncementsScreen/AnnouncementDetailScreen';
import DoctorsScreen from '../screens/Doctors/DoctorsScreen';
import Booking from '../screens/BookingScreen/Booking';


const Stack = createNativeStackNavigator();

export default function Routes() {
  

  const userData = useSelector((state) => state.auth.userData)
    useEffect(() => {
      if(userData){
        try{
          const jwt = userData.token
          var decoded = jwtDecode(jwt)
          if (decoded.exp * 1000 < Date.now()) {
            actions.logout();
          }
          else {
            console.log("Not Expired")
          }
        }
        catch (error){
          console.log("Error")
        }
      }
},[])
  
  

 

  return (
    <NavigationContainer>
      {userData && userData.token  ? <MainStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}


const TabStack = () =>
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
const MainStack = ()=> (
  <Stack.Navigator>
    <Stack.Screen name="Stack" options={{ headerShown: false }} component={TabStack} />
    <Stack.Screen name="SpecialistScreen" options={{ headerShown: false }} component={SpecialistScreen}/>
    <Stack.Screen name="DoctorsScreen"  options={({ route })=>({title:route.params.Name})} component={DoctorsScreen}/>
    <Stack.Screen name="AnnouncementDetailScreen" options={({ route })=>({title:route.params.Title})} component={AnnouncementDetailScreen}/>
    <Stack.Screen name="Booking" options={({ route })=>({title:route.params.Fullname})} component={Booking} />
  </Stack.Navigator>
)
