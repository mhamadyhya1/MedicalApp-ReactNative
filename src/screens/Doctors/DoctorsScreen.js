import React, { useEffect,useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, FlatList, StatusBar, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import axios from "axios";
import { DOCTORS } from "../../config/urls";

const { width } = Dimensions.get('screen');

const DoctorsScreen = ({ route,navigation }) => {
    const [Data, setData] = useState([]);
useEffect(()=>{
    let payload={Specialist:Name}
    axios.post(DOCTORS,payload)
    .then((res)=>res.data)
    .then((Data)=>setData(Data));
},[])
console.log(Data)
    


const{Name}=route.params


   
console.log(Name)
   

     function doctors() {

        const renderItem = ({ item }) => {
            return (
                <View style={{ justifyContent: 'center', marginTop: 15.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.doctorImageContainerStyle}>
                            <Image
                                source={{uri:item.imageUrl}}
                                resizeMode="contain"
                                style={{
                                    height: 109.0, width: 109.0, borderRadius: 75.0,
                                    overflow: 'hidden',
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ ...Fonts.black22Bold , fontWeight:"bold" }}>Dr {item.Fullname}</Text>
                            <Text style={{ ...Fonts.primaryColor20Bold, marginTop: Sizes.fixPadding + 1.0 }}>{item.Specialist}</Text>
                            <Text style={{ ...Fonts.primaryColor16Regular, marginTop: Sizes.fixPadding - 7.0 }}>
                                {item.YearExperience} Years Experience
                            </Text>
                            
                        </View>
                    </View>


                    <View style={styles.bookContainerStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate('Booking',
                        {Fullname:item.Fullname,image:item.imageUrl,yearExperience:item.YearExperience,specialist:item.Specialist,day:item.days,id:item._id})}>
                            <View style={styles.bookAppointmentButtonStyle}>
                                <Text style={{ ...Fonts.primaryColorBold }}>Book Appointment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.dividerStyle}>
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                data={Data}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
            />
        )
    }

    return <SafeAreaView style={{ flex: 1, }} backgroundColor="rgba(0,0,0,0)">
        <StatusBar backgroundColor={Colors.primary} />
        <View style={{ flex: 1, backgroundColor: 'white' }}>
           {doctors()}
        </View>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding,
    },
    headerContainerStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding,
        alignItems: 'center'
    },
    doctorImageContainerStyle: {
        height: 110.0,
        width: 110.0,
        borderRadius: 75.0,
        backgroundColor: 'white',
        borderColor: '#B3BCFC',
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
    },
    bookContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    bookVideoConsultButtonStyle: {
        width: width / 2 - 30,
        borderColor: '#FF9B07',
        borderWidth: 1.0,
        backgroundColor: '#FFEDD2',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    },
    bookAppointmentButtonStyle: {
        width: width / 2 - 30,
        borderColor: Colors.primary,
        borderWidth: 1.0,
        backgroundColor: '#E3E6FE',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        flexDirection:"row",
        justifyContent:"center"
    },
    dividerStyle: {
        backgroundColor: Colors.lightGray,
        height: 0.80,
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})


export default DoctorsScreen;