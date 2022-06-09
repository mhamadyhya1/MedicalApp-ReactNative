import  React,{useEffect,useState} from 'react';
import { View, useWindowDimensions , FlatList,StyleSheet,Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import { Fonts, Colors, Sizes ,width} from "../../constant/styles";
import axios from 'axios';
import {useSelector} from 'react-redux'
import { GetAppointments } from '../../config/urls';
import moment from 'moment';


export default function AppointmentScreen() {
    const layout = useWindowDimensions();
    const userData = useSelector((state) => state.auth.userData)
    const [ActiveAppointments , setActiveAppointments]=useState('')
    
    useEffect(()=>{
        let payload = {patient_id:userData.user._id}
        axios.post(GetAppointments,payload)
        .then((res)=>res.data)
        .then((ActiveAppointments)=>setActiveAppointments(ActiveAppointments))
        
    },[])
    console.log(ActiveAppointments.date)
    console.log(ActiveAppointments)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Active' },
    //   { key: 'second', title: 'Today' },
    ]);
    const AppointmentShow = () => {
        
        const renderItem = ({ item }) => (
            
                <View style={{ marginHorizontal: 20.0 }}>
                <View style={{ flexDirection: 'row', marginVertical: 20.0 }}>
                    <View style={styles.pasetCircleStyle}>
                        <Text style={{ textAlign: 'center', color: Colors.primary, fontSize: 18, }}>{moment(item.date).format("DD MMMM YYYY")}</Text>
                    </View>
                    <View style={{ marginLeft: 10.0 }}>
                        <Text style={{ marginVertical: 8.0,fontWeight:"bold",...Fonts.black20Bold  }}>Dr {item.doctor_id.Fullname}</Text>
                        <Text style={{ marginVertical: 8.0,fontWeight:"bold",...Fonts.black20Bold }}>{moment(item.time , 'hh:mm a').format('hh:mm a')}</Text>
                        <Text style={{ ...Fonts.primaryColorRegular }}></Text>
                    </View>
                </View>
                
                <View style={{ backgroundColor: Colors.lightGray, height: 0.50, }}>
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
                />
                
                

            
        )
    
    }
      
      const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
      );
      
      const renderScene = SceneMap({
        first: AppointmentShow,
        // second: SecondRoute,
      });
    return (

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
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



  
  