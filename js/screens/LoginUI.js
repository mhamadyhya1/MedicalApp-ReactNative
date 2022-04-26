import { View, Text,Image,StyleSheet,TextInput , TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react'


export default function LoginUI({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/removeBg.png')}
      />
    <Text style={styles.LoginText}>Login</Text>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
       
    <TouchableOpacity activeOpacity={0.8} style={styles.LoginBtn}>
      <Text style={styles.LoginBtnText}>Login</Text>
    </TouchableOpacity>
     
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        padding:10
      }}>
        <Text>Don't have account?</Text>
          <TouchableOpacity style={{marginLeft:10}} onPress={()=>navigation.navigate("SignUp")}>
            <Text style={styles.Signupnav}>Sign Up</Text>
          </TouchableOpacity>
        

      </View>
     
</View>
  )
  
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#26E339",
      justifyContent:'center',
  
      alignItems:'center'
    },
    image:{
      // marginLeft:100,
      marginTop:70,
    },
    LoginText:{
      fontStyle:"italic",
      fontWeight:"bold",
      fontSize:25,
      textAlign:"center",
      marginTop:32,
    },
    inputView: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "70%",
      height: 45,
      alignItems: "center",
      marginBottom:12 ,
      marginTop: 45,
      // marginLeft:52,
      
    },
    inputView2: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "70%",
      height: 45,
      alignItems: "center",
      marginVertical:12,
      // marginTop: 12,
      // marginLeft:52,
      
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      
    },
    LoginBtn:{
     width:"60%",
     backgroundColor:'tomato',
     height:40,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:30,
     marginTop:20
    },
    LoginBtnText:{
      fontWeight:'bold',
      fontSize:20,
      color:'#000'
  
    }
    
  })