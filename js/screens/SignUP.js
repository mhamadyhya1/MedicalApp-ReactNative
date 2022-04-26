import { View, Text,Image,StyleSheet,TextInput ,Button, TouchableOpacity,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DatePicker from '../components/DatePicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-virtualized-view';


export default function SignUP() {

   
    const [Fullname,setFullname] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassowrd] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('')
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'}
      ]);

      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
      };
    
      const getDate = () => {
        let tempDate = date.toString().split(' ');
        return date !== ''
          ? `${tempDate[0]} ${tempDate[1]}`
          : '';
      };

const split = date.toString().split(' ')
const day = split[2];
const month = split[1];
const year = split[3];
const DOB=day+"/"+month+"/"+year;


  return (

<View style={styles.container}>
 <Text style={styles.RegisterText}>Register New Account</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name"
            placeholderTextColor="#003f5c"/>
        </View>
        <View style={styles.inputView2}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.inputView3}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry={true}/>
        </View>
        <View style={styles.inputView4}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            secureTextEntry={true} />
        </View>
        <View style={styles.inputView5}>
          <TextInput
                placeholder="Phone Number"
                placeholderTextColor="grey"
                keyboardType="numeric"/>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={showDatePicker}>
        <View style={styles.inputView5}>
          <TextInput
                editable={false}
                value={DOB}
                placeholder="Date Of Birth"
                placeholderTextColor="#003f5c"
                />
        </View>
        </TouchableOpacity>
      <Text>{DOB}</Text>

     <TouchableOpacity activeOpacity={0.8} style={styles.LoginBtn}>
      <Text style={styles.LoginBtnText}>Register</Text>
    </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
</View>


)}

const styles=StyleSheet.create({
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
       }
})