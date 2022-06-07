import React,{useState} from "react";
import CalendarStrip from 'react-native-calendar-strip';
import { Text, View, TouchableOpacity, StatusBar, FlatList,Image, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import moment from "moment";


const afternoonSlots = ["12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00"]


const { width } = Dimensions.get('screen');

const ChatScreen = ({ navigation ,onDateChange }) => {
    const [currentDate, setCurrentDate] = useState(moment().date('DD MMMM,YYYY'));
    const [selectedSlot, setSelectedSlot] = React.useState('');
    const [book, setBook] = React.useState(false);
    const handleOnDateSelect = (date) => {
        setCurrentDate(date);
        if (onDateChange) {
          onDateChange(date);
        }
      };

    function doctorInfo() {

        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: Sizes.fixPadding * 2.0,
            }}>
                <View style={styles.doctorImageContainerStyle}>
                    <Image
                        
                        resizeMode="contain"
                        style={{
                            height: 90.0, width: 90.0, borderRadius: 45.0,
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', marginTop: Sizes.fixPadding, }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        width: width - 140.0,
                    }}>
                        <View style={{ width: width / 3.0, }}>
                            <Text style={{ ...Fonts.black16Bold, }}></Text>
                        </View>
                        
                    </View>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}></Text>
                    <Text style={{ ...Fonts.primaryColor16Regular, marginTop: Sizes.fixPadding - 7.0 }}>
                         Years Experience
                    </Text>
                    <Text style={{ ...Fonts.black20Bold, marginTop: Sizes.fixPadding - 2.0 }}></Text>
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSelectedSlot(`${item} PM`)
                setBook(true)
            }} >
                <View style={{
                    backgroundColor: selectedSlot == `${item} PM` ? Colors.primary : 'white',
                    borderColor: selectedSlot == `${item} PM` ? Colors.primary : '#CDCDCD',
                    ...styles.slotContainerStyle,
                }}>
                    <Text style={
                        (selectedSlot == `${item} PM`) ?
                            { ...Fonts.white16Regular }
                            :
                            { ...Fonts.primaryColor16Regular }}
                    >{item} PM</Text>
                </View>
            </TouchableOpacity>
        )
    }
    console.log(selectedSlot)
    

    function bookingInfo() {
        return (
            book ?
                <View style={styles.bookNowContainerStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Consultation', {
                        image, name, experience, type, selectedSlot, rating
                    })}>
                        <View style={styles.bookButtonStyle}>
                            <Text style={{ ...Fonts.white20Regular }}>Book now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                : null
        )
    }

    
  
    const datesBlacklistFunc = date => {
       return date.isoWeekday() === 1 ; // disable Saturdays
      }
      const datesBlacklistFunc2 = date => {
        return date.isoWeekday() === 3 ; // disable Saturdays
       }
    
    console.log(currentDate)
    function calander() {
        return (
            <View>
                <View style={{}}>
              <Text style={styles.title}>
                {moment(currentDate).format('DD MMMM,YYYY')}
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
                        ListHeaderComponent={
                            <>
                                {/* {slotsInfo({ image: require("../../assets/images/icons/sunrise.png"), data: morningSlots })}
                                {slotsTime({ slots: morningSlots, time: 'AM' })}
                                {slotsInfo({ image: require("../../assets/images/icons/sun.png"), data: afternoonSlots })} */}
                            </>
                        }
                        data={afternoonSlots}
                        renderItem={renderItem}
                        keyExtractor={(index) => `${index}`}
                        numColumns={3}
                        ListFooterComponent={
                            <>
                                {/* {slotsInfo({ image: require("../../assets/images/icons/sun-night.png"), data: eveningSlots })}
                                {slotsTime({ slots: eveningSlots, time: 'PM' })} */}
                            </>
                        }
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

ChatScreen.navigationOptions = {
    title: 'Time Slots',
    headerTitleStyle: { ...Fonts.black20Bold, marginLeft: -Sizes.fixPadding * 2.0 },
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
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
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
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

export default ChatScreen;