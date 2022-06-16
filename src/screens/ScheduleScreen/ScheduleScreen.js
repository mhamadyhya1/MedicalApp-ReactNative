import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Fonts, Sizes } from "../../constant/styles";
import AppointmentScreen from "../AppointmentsScreen/AppointmentScreen"



export default function ScheduleScreen(){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            
               <AppointmentScreen/>
        </SafeAreaView>
    );
}