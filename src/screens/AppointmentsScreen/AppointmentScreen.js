import  React,{useEffect,useState} from 'react';
import { View, useWindowDimensions , FlatList,StyleSheet,Text ,TouchableOpacity, RefreshControlBase } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import  AntDesign  from 'react-native-vector-icons/FontAwesome5';
import { Fonts, Colors, Sizes ,width} from "../../constant/styles";
import axios from 'axios';
import {useSelector} from 'react-redux'
import { DELETEAPPOINTMENT, GetAppointments, TODAYAPPOINTMENTS } from '../../config/urls';
import moment from 'moment';
import { showError, showSuccess } from '../../components/ShowMessage';
import { useIsFocused } from '@react-navigation/native';

export default function AppointmentScreen(props) {
    const isFocused = useIsFocused();
    // const layout = useWindowDimensions();
    const userData = useSelector((state) => state.auth.userData)
    const [ActiveAppointments , setActiveAppointments]=useState('')
    const [TodayAppointments , setTodayAppointments]=useState('')
    const [refresh,setrefresh]=useState(false)
    useEffect(()=>{
        if(isFocused){
            fetchData();
            fetchTodayAppointments();
        }
    },[isFocused])
    useEffect(()=>{
        fetchData();
        fetchTodayAppointments();
    },[refresh])

   const fetchData=()=>{
    let payload = {patient_id:userData.user._id}
    axios.post(GetAppointments,payload)
    .then((res)=>res.data)
    .then((ActiveAppointments)=>setActiveAppointments(ActiveAppointments))
   }
   const fetchTodayAppointments = () =>{
    let payload = {patient_id:userData.user._id}
    axios.post(TODAYAPPOINTMENTS,payload)
    .then((res)=>res.data)
    .then((TodayAppointments)=>setTodayAppointments(TodayAppointments))
   }
    
    console.log(ActiveAppointments.date)
    console.log(ActiveAppointments)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Active' },
      { key: 'second', title: 'Today' },
    ]);
    
    const AppointmentShow = () => {
        const onDelete = (id)=>{
        try{
            let url = DELETEAPPOINTMENT+id
            axios.post(url)
            .then((res)=>console.log(res.data))
            showSuccess("Deleted")
            setrefresh(true)
            setTimeout(()=>{
                setrefresh(false)
            },800)
        }
        catch (error) {
          showError(error.message)
        }
          
           
        }

        const renderItem = ({ item }) => (
                 
            <View style={{ justifyContent: "space-between", flexDirection: 'row',padding:5 }}>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.pasetCircleStyle}>
                        <Text style={{ textAlign: 'center', color: Colors.primary, fontSize: 18, }}>{moment(item.date).format("DD MMMM YYYY")}</Text>
                    </View>
                    <View style={{ marginLeft: 10.0 }}>
                        <Text style={{ marginVertical: 8.0, fontWeight: "bold", ...Fonts.black20Bold }}>Dr {item.doctor_id.Fullname}</Text>
                        <Text style={{ marginVertical: 8.0, fontWeight: "bold", ...Fonts.black20Bold }}>{moment(item.time, 'hh:mm a').format('hh:mm a')}</Text>
                        <Text style={{ ...Fonts.primaryColorRegular }}></Text>
                    </View>

                </View>
                <View style={{justifyContent:'flex-end' , marginRight:12}}>
                    <TouchableOpacity  onPress={() => onDelete(item._id)} style={styles.delete}>
                        <Text style={{fontSize:18,color:"#fff"}}>delete</Text>
                    </TouchableOpacity>
                    
                </View>

             </View>
            
            
           
        )
        
        return ( 
          ActiveAppointments.length===0?
            
              <View style={styles.noActiveDataContainerStyle}>
                    <FontAwesome5 name="calendar-alt" size={70} color='gray' />
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding * 2.0 }}>No Active Appointments</Text>
                </View>  :
                <FlatList
                    data={ActiveAppointments}
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={renderItem}
                    listMode="SCROLLVIEW"
                    ItemSeparatorComponent={()=><View style={{height:2,width:"100%",backgroundColor:"#ccc",marginHorizontal:10}}/>}
                    
                />
                
        )
    
    }
      
      const SecondRoute = () =>{
        const onDelete = (id)=>{
            try{
                let url = DELETEAPPOINTMENT+id
                axios.post(url)
                .then((res)=>console.log(res.data))
                showSuccess("Deleted")
                setrefresh(true)
                setTimeout(()=>{
                    setrefresh(false)
                },800)
            }
            catch (error) {
              showError(error.message)
            }
              
               
            }
            const renderItem = ({ item }) => (
                 
                <View style={{ justifyContent: "space-between", flexDirection: 'row',padding:5 }}>
    
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.pasetCircleStyle}>
                            <Text style={{ textAlign: 'center', color: Colors.primary, fontSize: 18, }}>{moment(item.date).format("DD MMMM YYYY")}</Text>
                        </View>
                        <View style={{ marginLeft: 10.0 }}>
                            <Text style={{ marginVertical: 8.0, fontWeight: "bold", ...Fonts.black20Bold }}>Dr {item.doctor_id.Fullname}</Text>
                            <Text style={{ marginVertical: 8.0, fontWeight: "bold", ...Fonts.black20Bold }}>{moment(item.time, 'hh:mm a').format('hh:mm a')}</Text>
                            <Text style={{ ...Fonts.primaryColorRegular }}></Text>
                        </View>
    
                    </View>
                    <View style={{justifyContent:'flex-end' , marginRight:12}}>
                        <TouchableOpacity  onPress={() => onDelete(item._id)} style={styles.delete}>
                            <Text style={{fontSize:18,color:"#fff"}}>delete</Text>
                        </TouchableOpacity>
                        
                    </View>
    
                 </View>
                
                
               
            )
        return(
            TodayAppointments.length===0?
            
              <View style={styles.noActiveDataContainerStyle}>
                    <FontAwesome5 name="calendar-alt" size={70} color='gray' />
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding * 2.0 }}>No Today Appointments</Text>
                </View>  :
                <FlatList
                    data={TodayAppointments}
                    keyExtractor={(item) => item._id}
                    renderItem={renderItem}
                    listMode="SCROLLVIEW"
                    ItemSeparatorComponent={()=><View style={{height:2,width:"100%",backgroundColor:"#ccc",marginHorizontal:10}}/>}
                    
                />
)
        
        
      }
      
      const renderScene = SceneMap({
        first: AppointmentShow,
         second: SecondRoute,
      });
    return (

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        // initialLayout={{ width: layout.width }}
      />
    );
  }


  const styles = StyleSheet.create({
    pasetCircleStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: '#E9EBFE',
        borderColor: Colors.primary,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10.0,
    },
    delete:{
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"red",
        width:90,
        height:40,
        borderRadius:50,
    }, 
    activeCircleStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: '#E8F5E9',
        borderColor: '#8ECC90',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10.0,
    },
    noActiveDataContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogStyle: {
        height: 110.0,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogNoButtonStyle: {
        flex: 0.50,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50.0,
        borderRadius: 8.0,
        marginRight: 15.0,
    },
    dialogYesButtonStyle: {
        flex: 0.50,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50.0,
        borderRadius: 8.0,
        marginLeft: 15.0,
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 90,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0
    }
})



  
  