import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2622F0",
        // justifyContent:"center",
        textAlign:"left"
        
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
        marginTop:20
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
    // TextInput: {
    //     height: 50,
    //     flex: 1,
    //     padding: 10,
    //   },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 45,

        alignItems: "center",
        marginTop:50,
        marginLeft:52,
        
      },
      inputView2: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 45,
        alignItems: "center",
        marginHorizontal:50,
        marginVertical:25,
      },
      inputView3: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 45,
        alignItems: "center",
        marginHorizontal:50,
        
      },
      inputView4: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        marginHorizontal:50,
        height: 45,
        
        alignItems: "center",
        marginVertical:15,
      },
      inputView5: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        marginHorizontal:50,
        height: 45,
        marginBottom:15,
        alignItems: "center",
        marginVertical:15,
      },
      DatePicker:{
          backgroundColor:"white",
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