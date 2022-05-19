import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
    errorMessage:{
      color:"#b32e2e",
      textAlign:"center",
      fontWeight:"bold"
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