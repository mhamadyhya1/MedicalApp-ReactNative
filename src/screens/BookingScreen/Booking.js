import React,{useEffect, useState,} from "react";
import CalendarStrip from 'react-native-calendar-strip';
import { Text, View, TouchableOpacity, StatusBar, FlatList,Image, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import moment from "moment";
import axios from "axios";
import { TIMESLOTS } from "../../config/urls";
import {useSelector} from 'react-redux'
import actions from "../../redux/actions";
import { showError, showSuccess } from "../../components/ShowMessage";
const { width } = Dimensions.get('screen');

export default function Booking({ route,navigation ,onDateChange }){
    const userData = useSelector((state) => state.auth.userData)
    const {Fullname,id ,day, image, yearExperience,specialist} = route.params;
    const [currentDate, setCurrentDate] = useState(moment().date('DD MMMM,YYYY'));
    const [selectedSlot, setSelectedSlot] = useState('');
    const [TimeSlots,setTimeSlots] =useState([]);
    const [book, setBook] = React.useState(false);
    const handleOnDateSelect = (date) => {
        setCurrentDate(date);
        if (onDateChange) {
          onDateChange(date);
        }
      };

     useEffect(()=>{
         axios.get(TIMESLOTS+id)
         .then((res)=>res.data)
         .then((TimeSlots)=>setTimeSlots(TimeSlots));
     },[])
   console.log(TimeSlots)
var patient_id =userData.user._id;
console.log("my id",patient_id)

    function doctorInfo() {

        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: Sizes.fixPadding * 2.0,
            }}>
                <View style={styles.doctorImageContainerStyle}>
                    <Image
                        source={{uri:image}}
                        resizeMode="contain"
                        style={{
                            height: 90.0, width: 90.0, borderRadius: 45.0
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', marginBottom: Sizes.fixPadding + 2.5 }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        width: width - 140.0,
                    }}>
                        <View style={{ width: width / 3.0, }}>
                            <Text style={{ ...Fonts.black16Bold, }}></Text>
                        </View>
                        
                    </View>
                    <Text style={{ ...Fonts.black20Bold,fontWeight:"bold",textAlign:"center",marginRight:85, marginTop: Sizes.fixPadding + 1.0 }}>Specialist: {specialist}</Text>
                    <Text style={{ ...Fonts.primaryColor16Regular, marginTop: Sizes.fixPadding - 7.0 }}>
                         {yearExperience} Years Experience
                    </Text>
                    <Text style={{ ...Fonts.black20Bold, marginTop: Sizes.fixPadding - 2.0 }}>Day Attend: {day}</Text>
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSelectedSlot(`${item}`)
                setBook(true)
            }} >
                <View style={{
                    backgroundColor: selectedSlot == `${item}` ? Colors.primary : 'white',
                    borderColor: selectedSlot == `${item}` ? Colors.primary : '#CDCDCD',
                    ...styles.slotContainerStyle,
                }}>
                    <Text style={(selectedSlot=={item})}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    console.log(selectedSlot)
    console.log("currentdate",currentDate)
    
   const onBooking = async ()=>{
       try{
           const res =await actions.CreateAppointment({
               doctor_id:id,
               patient_id:patient_id,
               date:BookedDate+"Z",
               time:selectedSlot
           })
           console.log("booked data: ",res)
           showSuccess("Booked Successful")
       }
       catch (error){
        console.log("Error:", error.message)
        showError(error.message)
       }
   }
    function bookingInfo() {
        return (
            book ?
                <View style={styles.bookNowContainerStyle}>
                    <TouchableOpacity onPress={onBooking}>
                        <View style={styles.bookButtonStyle}>
                            <Text style={{ ...Fonts.white20Regular }}>Book now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                : null
        )
    }

    
     
    const datesBlacklistFunc = date => {
       return date.isoWeekday() === 7 ;
      }
    var BookedDate = moment(currentDate).format('DD/MMMM/YYYY')
    
    console.log(currentDate)
    function calander() {
        return (
            <View>
                <View >
              <Text style={styles.title}>
                {moment(currentDate).format('DD/MMMM/YYYY')}
               </Text> 
                    <CalendarStrip
                        style={{ height: 100, paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding, }}
                        highlightDateContainerStyle={{
                            backgroundColor: Colors.primary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        dateNumberStyle={{ color: 'black', fontSize: 17.0 }}
                        
                        dateNameStyle={{ color: 'black', fontSize: 15.0 }}
                        highlightDateNameStyle={{ color: 'white', fontSize: 15.0 }}
                        highlightDateNumberStyle={{ color: 'white', fontSize: 17.0 }}
                        datesBlacklist={datesBlacklistFunc}
                        disabledDateOpacity={0.6}
                        disabledDateNameStyle={{ color: 'gray', fontSize: 15.0 }}
                        disabledDateNumberStyle={{ color: 'gray', fontSize: 17.0, }}
                        useIsoWeekday={false}
                        selectedDate={currentDate}
                        onDateSelected={handleOnDateSelect}
                        scrollable={true}
                        upperCaseDays={false}
                        styleWeekend={true}
                        
                        
                    />
                </View>
            </View>
        );
    }
  
    function divider() {
        return (
            <View style={styles.dividerStyle}>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={Colors.primary} />
            {

                <View style={{ flex: 1 }}>
                    {doctorInfo()}
                    {calander()}
                    {divider()}
                    <FlatList
                        data={TimeSlots}
                        renderItem={renderItem}
                        keyExtractor={(index) => `${index}`}
                        numColumns={3}
                        
                        contentContainerStyle={{
                            paddingHorizontal: Sizes.fixPadding,
                            paddingBottom: book ? Sizes.fixPadding * 8.0 : Sizes.fixPadding * 2.0
                        }}
                    />
                    {bookingInfo()}
                </View>
            }

        </View>)
}



const styles = StyleSheet.create({
    doctorImageContainerStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: 'white',
        borderColor: '#B3BCFC',
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding,
        marginTop: 30,
        marginBottom: Sizes.fixPadding + 2,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
    },
    title:{
       fontWeight:"bold",
       textAlign:"center",
       top:15,
    },
    slotContainerStyle: {
        alignItems: 'center',
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        marginBottom: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding * 2.0,
        height: 45.0,
        width: 100.0,
    },
    bookButtonStyle: {
        backgroundColor: Colors.primary,
        paddingVertical: Sizes.fixPadding + 3.0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
    },
    bookNowContainerStyle: {
        backgroundColor: 'white',
        height: 75.0,
        position: 'absolute', bottom: 0.0, width: '100%',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
    },
    dividerStyle: {
        backgroundColor: Colors.lightGray,
        height: 0.90,
        width: '100%',
        marginBottom: Sizes.fixPadding
    }
})

