import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34cfeb",
    textAlign: "left",
   },
   Loginclicker:{
     fontWeight:"bold",
     marginLeft:3
   },
    InputContainer:{
      marginTop:50,
    },
    LoginBtn:{
        width:"60%",
        backgroundColor:'tomato',
        height:40,
        marginLeft:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        left:60,
        marginBottom:90,
        marginTop:5,
       },
       BackToLogin:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        color:"#000000"
        
       },
       LoginBtnText:{
         fontWeight:'bold',
         fontSize:20,
         color:'#000',
         textAlign:"center",
     
       },
    RegisterText:{
         fontSize:20,
         fontWeight:"bold",
         fontStyle:"italic",
         textAlign:"center",
         
    },
    
      DatePicker:{
          fontSize:20,
          textAlign:"center",
          marginVertical:12,
          fontWeight:"bold",
          color:"#000000"
       },
       errorMessage:{
         color:"#b32e2e",
         textAlign:"center",
         fontWeight:"bold"
       },
       icon:{
         left:1,
         bottom:40,
         
         
       }
       
})